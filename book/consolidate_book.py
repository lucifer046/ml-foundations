import os
import json
import shutil

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
METADATA_PATH = os.path.join(BASE_DIR, 'book', 'book_metadata.json')

def consolidate():
    with open(METADATA_PATH, 'r') as f:
        metadata = json.load(f)

    new_categories = []
    
    # Get all directories in base to match category IDs
    all_dirs = [d for d in os.listdir(BASE_DIR) if os.path.isdir(os.path.join(BASE_DIR, d))]

    for cat in metadata['categories']:
        cat_id = cat['id']
        cat_title = cat['title']
        
        # Find category directory
        cat_dir = next((d for d in all_dirs if d.startswith(cat_id + '_')), None)
        if not cat_dir:
            print(f"Warning: Category dir not found for {cat_id}")
            new_categories.append(cat)
            continue
            
        cat_abs_path = os.path.join(BASE_DIR, cat_dir)
        
        # Determine merge groups
        groups = []
        if cat_title == "Foundations of Learning":
            groups = [
                {"title": "Introduction to ML", "files": ["01_introduction_ml/what_is_ml.md", "01_introduction_ml/ml_terminology.md", "01_introduction_ml/ml_pillars.md", "01_introduction_ml/types_of_ml.md"]},
                {"title": "Supervised Learning", "files": ["02_learning_types/regression.md", "02_learning_types/classification.md"]},
                {"title": "Unsupervised & Density", "files": ["02_learning_types/unsupervised.md", "02_learning_types/density_estimation.md"]},
                {"title": "Model Performance", "files": ["03_performance/loss_functions.md", "03_performance/data_splitting.md", "03_performance/encoder_decoder.md"]},
                {"title": "Practice Lab", "files": ["04_practice/comprehensive_foundations.md", "01_introduction_ml/practice_foundations.md"]}
            ]
        elif cat_title == "Calculus and Geometry":
            groups = [
                {"title": "Calculus Foundations", "files": ["01_limits_continuity/limits.md", "01_limits_continuity/continuity.md", "02_differentiation/derivatives.md", "02_differentiation/approximations.md", "03_optimization_basics/extrema.md"]},
                {"title": "Multivariable & Geometry", "files": ["05_multivariable_calculus/partial_derivatives.md", "05_multivariable_calculus/gradients.md", "06_geometry/lines_and_planes.md", "06_geometry/hyperplanes.md"]},
                {"title": "Calculus Practice", "files": ["04_practice/calculus_practice.md", "04_practice/geometry_gradients_practice.md"]}
            ]
        elif cat_title == "Linear Algebra Foundations":
            groups = [
                {"title": "Linear Systems", "files": ["01_linear_systems/intro_linear_systems.md", "01_linear_systems/gaussian_elimination.md", "01_linear_systems/system_consistency.md"]},
                {"title": "Vector Spaces", "files": ["02_subspaces/what_is_subspace.md", "02_subspaces/column_and_row_space.md", "02_subspaces/null_space.md", "02_subspaces/orthogonality.md"]},
                {"title": "Projections & Least Squares", "files": ["03_projections/intro_least_squares.md", "03_projections/normal_equations.md", "03_projections/projection_matrices.md"]},
                {"title": "Linear Algebra Practice", "files": ["04_practice/linear_algebra_practice.md"]}
            ]
        elif cat_title == "Spectral Theory and SVD":
            groups = [
                {"title": "Eigenvalues & Spectral", "files": ["01_eigen/intro_eigen.md", "01_eigen/finding_eigen.md", "02_matrix_types/symmetric_unitary.md"]},
                {"title": "SVD: Theory & Practice", "files": ["03_svd/svd_intuition.md", "03_svd/svd_math.md", "04_practice/spectral_practice.md"]}
            ]
        elif "Dimensionality Reduction" in cat_title or "PCA" in cat_title:
            groups = [
                {"title": "PCA: Full Guide", "files": ["01_intro/why_reduction.md", "02_pca/pca_intuition.md", "02_pca/pca_algorithm.md", "03_practice/pca_practice.md"]}
            ]

        elif cat_title == "Optimization":
            groups = [
                {"title": "Optimization: Full Guide", "files": ["01_gradient_descent/intuition.md", "01_gradient_descent/math.md", "02_constraints/lagrange_multipliers.md", "03_convexity/convex_sets_functions.md", "04_practice/optimization_practice.md"]}
            ]
        elif cat_title == "Probability and Statistics":
            groups = [
                {"title": "Probability & Distributions", "files": ["01_basics/prob_intuition.md", "02_distributions/common_distributions.md", "03_bayes/bayes_theorem.md", "04_practice/probability_practice.md"]}
            ]
        else:
            new_categories.append(cat)
            continue

        new_topics = []
        for i, group in enumerate(groups):
            merged_filename = group['title'].lower().replace(' ', '_').replace('&', 'and').replace(':', '') + ".md"
            merged_abs_path = os.path.join(cat_abs_path, merged_filename)
            
            combined_content = f"# {group['title']}\n\n"
            for f_rel in group['files']:
                f_abs = os.path.join(cat_abs_path, f_rel)
                if os.path.exists(f_abs):
                    with open(f_abs, 'r', encoding='utf-8') as f_in:
                        content = f_in.read().strip()
                        # Remove existing # titles from subfiles to avoid multiple H1s
                        if content.startswith('# '):
                            content = content.split('\n', 1)[-1].strip()
                        
                        if combined_content:
                            combined_content += "\n\n---\n\n"
                        combined_content += content
                else:
                    print(f"Warning: File not found {f_abs}")
            
            with open(merged_abs_path, 'w', encoding='utf-8') as f_out:
                f_out.write(combined_content)
            
            new_topics.append({
                "id": f"{i+1:02d}",
                "title": group['title'],
                "file": merged_filename
            })

        new_categories.append({
            "id": cat_id,
            "title": cat_title,
            "topics": new_topics
        })

    # Update metadata

    new_metadata = {
        "course_title": metadata['course_title'],
        "course_code": metadata['course_code'],
        "categories": new_categories
    }
    
    with open(METADATA_PATH, 'w') as f:
        json.dump(new_metadata, f, indent=4)

    print("Consolidation complete. Please run build_book_data.py to refresh book_data.js.")

if __name__ == "__main__":
    consolidate()
