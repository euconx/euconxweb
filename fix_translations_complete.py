#!/usr/bin/env python3

import re

# Read the file
with open('/home/user/webapp/lib/translations.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix escaped quotes
content = content.replace('\\"', '"')

# Fix stray backslashes
content = re.sub(r',\\\s*\n', ',\n', content)
content = re.sub(r'\\\s*\n', '\n', content)

# Fix object structure issues
# Pattern: property:\nvalue should be property: value
content = re.sub(r'(\w+):\s*\n\s*(["\'])', r'\1: \2', content)

# Fix malformed object entries
# Pattern: },\n, should be },
content = re.sub(r'},\s*\n\s*,', r'},', content)

# Fix properties that have colons on separate lines
# Pattern: property\n  : value should be property: value
content = re.sub(r'(\w+)\s*\n\s*:\s*', r'\1: ', content)

# Fix object declarations that are missing braces
# Pattern for team members structure
content = re.sub(r'teamMembers: \{\s*ahmet: \{\s*name:', r'teamMembers: {\n        ahmet: {\n          name:', content)

# Fix specific malformed objects in FAQ section
content = re.sub(r'(q\d+): \{([^}]+)\},', lambda m: fix_faq_object(m), content)

def fix_faq_object(match):
    num = match.group(1)
    content = match.group(2)
    # Clean up the content
    content = re.sub(r'\s+', ' ', content)
    # Find question and answer
    parts = content.split('answer:')
    if len(parts) == 2:
        question = parts[0].replace('question:', '').strip().strip('"')
        answer = parts[1].strip().strip('"')
        return f'''      {num}: {{
        question: "{question}",
        answer: "{answer}",
      }},'''
    return match.group(0)

# Fix milestone objects
content = re.sub(r'milestones: \{([^}]+(?:\{[^}]+\}[^}]+)*)\}', lambda m: fix_milestones(m.group(1)), content)

def fix_milestones(milestones_content):
    # Parse and fix milestone structure
    fixed = 'milestones: {\n'
    
    # Split by year patterns
    years = re.findall(r'year: "(\d+)"[^}]+', milestones_content)
    
    milestone_names = ['founding', 'expansion', 'certification', 'growth', 'innovation', 'future']
    
    for i, year in enumerate(years[:6]):
        if i < len(milestone_names):
            # Extract content for this milestone
            pattern = f'year: "{year}"[^}}]+'
            match = re.search(pattern, milestones_content)
            if match:
                content = match.group(0)
                # Extract fields
                title = re.search(r'title: "([^"]+)"', content)
                description = re.search(r'description: "([^"]+)"', content)
                impact = re.search(r'impact: "([^"]+)"', content)
                
                if title and description and impact:
                    fixed += f'''        {milestone_names[i]}: {{
          year: "{year}",
          title: "{title.group(1)}",
          description: "{description.group(1)}",
          impact: "{impact.group(1)}",
        }},\n'''
    
    fixed += '      },'
    return fixed

# Fix capabilities objects
content = re.sub(r'capabilities:\s*\n\s*title:', r'capabilities: {\n        turkishMarket: {\n          title:', content)

# Add missing closing braces for objects
# Count braces to ensure balance
open_braces = content.count('{')
close_braces = content.count('}')
missing_braces = open_braces - close_braces

print(f"Open braces: {open_braces}, Close braces: {close_braces}, Missing: {missing_braces}")

# Add missing closing braces at the end if needed
if missing_braces > 0:
    # Find the last meaningful line before the end
    lines = content.split('\n')
    last_content_index = -1
    for i in range(len(lines) - 1, -1, -1):
        if lines[i].strip() and not lines[i].strip().startswith('//'):
            last_content_index = i
            break
    
    if last_content_index > 0:
        # Add the missing braces
        closing = '\n' + ('  },\n' * (missing_braces - 2)) + '},\n}'
        lines.insert(last_content_index + 1, closing)
        content = '\n'.join(lines)

# Write the fixed content
with open('/home/user/webapp/lib/translations_fixed.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed file written to translations_fixed.ts")