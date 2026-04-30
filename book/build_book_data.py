import os
import json

def build_book_data():
    metadata_path = 'book/book_metadata.json'
    if not os.path.exists(metadata_path):
        print("Error: book_metadata.json not found.")
        return

    with open(metadata_path, 'r') as f:
        metadata = json.load(f)

    source_data = {}

    for cat in metadata['categories']:
        cat_id = cat['id']
        cat_title = cat['title']
        
        # Find base directory matching category ID (e.g., 01_Foundations_of_Learning)
        cat_dir = None
        for d in os.listdir('.'):
            if os.path.isdir(d) and d.startswith(cat_id + '_'):
                cat_dir = d
                break
        
        if not cat_dir:
            print(f"Warning: Directory for category {cat_id} not found.")
            continue

        for topic in cat['topics']:
            topic_id = topic['id']
            # The 'file' in metadata can now be a path like "01_introduction_ml/01_what_is_ml.md"
            rel_md_path = topic['file']
            
            md_path = os.path.join(cat_dir, rel_md_path)
            code_path = md_path.replace('.md', '.py')

            theory_content = ""
            if os.path.exists(md_path):
                with open(md_path, 'r', encoding='utf-8') as f:
                    theory_content = f.read()
            else:
                print(f"Warning: MD file {md_path} not found.")

            code_content = ""
            if os.path.exists(code_path):
                with open(code_path, 'r', encoding='utf-8') as f:
                    code_content = f.read()
            else:
                code_content = f"# No implementation file found for {topic['title']}\n# Path: {code_path}"

            key = f"{cat_id}.{topic_id}"
            source_data[key] = {
                "title": topic['title'],
                "category": cat_title,
                "theory": theory_content,
                "code": code_content
            }

    js_content = f"const SOURCE_DATA = {json.dumps(source_data, indent=4)};\n"
    js_content += f"const BOOK_METADATA = {json.dumps(metadata, indent=4)};"
    
    output_path = 'book/book_data.js'
    # Ensure book directory exists (it should, but just in case)
    if not os.path.exists('book'):
        os.makedirs('book')
        
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"Successfully generated {output_path}")

if __name__ == "__main__":
    build_book_data()
