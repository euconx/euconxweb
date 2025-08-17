#!/usr/bin/env python3

import re
import json

def main():
    # Read the file
    with open('/home/user/webapp/lib/translations.ts', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    fixed_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        # Fix escaped quotes
        line = line.replace('\\"', '"')
        
        # Fix stray backslashes at end of lines
        line = re.sub(r',\\\s*$', ',', line)
        line = re.sub(r'\\\s*$', '', line)
        
        # Fix pattern: property\n  : value
        if i < len(lines) - 1:
            next_line = lines[i + 1]
            if re.match(r'^\s*:\s*', next_line):
                # Combine with previous line
                value_part = next_line.strip()[1:].strip()
                line = line.rstrip() + ': ' + value_part + '\n'
                i += 1  # Skip the next line
        
        # Fix malformed object entries
        if re.match(r'^\s*\w+:\s*$', line) and i < len(lines) - 1:
            next_line = lines[i + 1]
            if re.match(r'^\s*\w+:\s*"', next_line):
                # This is a malformed object, fix it
                line = line.rstrip() + ' {\n'
        
        # Fix specific patterns for team members
        if 'efe:' in line and 'name:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        efe: {\n'
        elif 'cihan:' in line and 'name:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        cihan: {\n'
        elif 'henriett:' in line and 'name:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        henriett: {\n'
        
        # Fix milestone entries
        if 'expansion:' in line and 'year:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        expansion: {\n'
        elif 'certification:' in line and 'year:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        certification: {\n'
        elif 'growth:' in line and 'year:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        growth: {\n'
        elif 'innovation:' in line and 'year:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        innovation: {\n'
        elif 'future:' in line and 'year:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        future: {\n'
        
        # Fix capabilities entries
        if 'euCompliance:' in line and 'title:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        euCompliance: {\n'
        elif 'logisticsOptimization:' in line and 'title:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        logisticsOptimization: {\n'
        elif 'qualityAssurance:' in line and 'title:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        qualityAssurance: {\n'
        elif 'costOptimization:' in line and 'title:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        costOptimization: {\n'
        elif 'technicalSupport:' in line and 'title:' in lines[i+1] if i < len(lines) - 1 else False:
            line = '        technicalSupport: {\n'
        
        # Fix indentation for properties inside objects
        if re.match(r'^\s{2}\w+:\s*"', line):
            # This looks like it should be indented more
            line = '      ' + line.lstrip()
        
        # Fix lines that are just commas
        if line.strip() == ',' and i > 0:
            # Add the comma to the previous line
            if fixed_lines:
                if not fixed_lines[-1].rstrip().endswith(','):
                    fixed_lines[-1] = fixed_lines[-1].rstrip() + ',\n'
            i += 1
            continue
        
        # Remove double commas
        line = re.sub(r',\s*,', ',', line)
        
        fixed_lines.append(line)
        i += 1
    
    # Join all lines
    content = ''.join(fixed_lines)
    
    # Count braces to ensure balance
    open_braces = content.count('{')
    close_braces = content.count('}')
    missing_braces = open_braces - close_braces
    
    print(f"Open braces: {open_braces}, Close braces: {close_braces}, Missing: {missing_braces}")
    
    # Add missing closing braces if needed
    if missing_braces > 0:
        # Find where to add them - just before the last line
        lines = content.split('\n')
        for _ in range(missing_braces):
            # Find the appropriate indentation level
            lines.insert(-1, '  },')
        content = '\n'.join(lines)
    
    # Write the fixed content
    with open('/home/user/webapp/lib/translations.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("File fixed and saved!")

if __name__ == '__main__':
    main()