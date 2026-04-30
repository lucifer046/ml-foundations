import json
import os

# Paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
METADATA_PATH = os.path.join(BASE_DIR, 'book', 'book_metadata.json')

def polish():
    with open(METADATA_PATH, 'r') as f:
        metadata = json.load(f)

    # 1. Update Category and Topic Names in Metadata
    name_map = {
        "Practice Lab": "Foundations: Comprehensive Examples",
        "Calculus Practice": "Calculus: Numerical Applications",
        "Linear Algebra Practice": "Linear Algebra: Solved Problems",
        "SVD: Theory & Practice": "SVD: Theory & Worked Examples",
        "Eigenvalues & Spectral": "Eigenvalues & Spectral Theory",
        "PCA: Full Guide": "PCA: Complete Theory & Practice",
        "Probability & Distributions": "Probability & Statistical Foundations",
        "Why Reduce Dimensions?": "The Goal of Dimensionality Reduction",
        "PCA Intuition": "PCA: Conceptual Intuition",
        "The PCA Algorithm": "PCA: Mathematical Steps",
        "Practice: PCA": "PCA: Solved Examples"
    }

    for cat in metadata['categories']:
        for topic in cat['topics']:
            if topic['title'] in name_map:
                topic['title'] = name_map[topic['title']]

    with open(METADATA_PATH, 'w') as f:
        json.dump(metadata, f, indent=4)

    # 2. Replace strings in Markdown files
    replacements = {
        "The 5th Grade Analogy": "Conceptual Intuition",
        "The 5th Grade Summary": "High-Level Summary",
        "The 5th Grade Challenge": "Conceptual Challenge",
        "5th Grade Meaning": "Intuitive Meaning",
        "Practice Problem": "Example Case",
        "Practice Problem:": "Example Case:",
        "Practice:": "Example:",
        "## Practice Problem": "## Worked Example",
        "### Practice Problem": "### Worked Example",
        "## The 5th Grade Analogy": "## The Conceptual Intuition",
        "## Part 4: The 5th Grade": "## Part 4: Conceptual",
    }


    count = 0
    for root, dirs, files in os.walk(BASE_DIR):
        for file in files:
            if file.endswith('.md'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = new_content.replace(old, new)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
    
    print(f"Polished {count} Markdown files.")
    print("Updated book_metadata.json names.")

if __name__ == "__main__":
    polish()
