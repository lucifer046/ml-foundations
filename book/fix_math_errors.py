import os
import re

def fix_math_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Pattern 1: $$Variable$ -> $Variable$
    new_content = re.sub(r'\$\$(?=[a-zA-Z])(.*?)(?<!\$)\$(?!\$)', r'$\1$', content)
    
    # Pattern 1b: $Variable$$ -> $Variable$
    new_content = re.sub(r'(?<!\$)\$(?!\$)(?=[a-zA-Z])(.*?)\$\$(?!\$)', r'$\1$', new_content)

    
    # Pattern 2: Triple $$$ -> $
    new_content = re.sub(r'\$\$\$+', r'$', new_content)

    # Pattern 3: Stray $$ at start of line or after bold
    new_content = re.sub(r'\*\*\$\$(.*?)\$', r'**$\1$', new_content)


    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    count = 0
    for root, dirs, files in os.walk('.'):
        for file in files:
            if file.endswith('.md'):
                path = os.path.join(root, file)
                if fix_math_in_file(path):
                    print(f"Fixed math in: {path}")
                    count += 1
    print(f"Total files fixed: {count}")

if __name__ == "__main__":
    main()
