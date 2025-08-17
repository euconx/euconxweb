#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib', 'translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Fix escaped quotes
content = content.replace(/\\"/g, '"');

// Fix the stray backslashes at end of lines
content = content.replace(/,\\\s*\n/g, ',\n');
content = content.replace(/\\\s*\n/g, '\n');

// Fix malformed object syntax patterns
// Fix pattern: name: "value", title\n  : "value"
content = content.replace(/,\s*(\w+)\s*\n\s*:\s*"/g, ',\n        $1: "');

// Fix pattern: }\n,  =>  },
content = content.replace(/}\s*\n\s*,/g, '},');

// Fix malformed object definitions
// Fix pattern where objects start without proper braces
content = content.replace(/(\w+):\s*\n\s*{\s*\n\s*(\w+):/g, '$1: {\n        $2:');

// Fix the teamMembers section specifically
content = content.replace(/teamMembers:\s*\n\s*name:/g, 'teamMembers: {\n        ahmet: {\n          name:');

// Fix milestones section
content = content.replace(/milestones:\s*\n\s*year:/g, 'milestones: {\n        founding: {\n          year:');

// Fix capabilities section  
content = content.replace(/capabilities:\s*\n\s*\\\s*\n\s*title:/g, 'capabilities: {\n        turkishMarket: {\n          title:');

// Fix stats object that has colons on new lines
content = content.replace(/stats:\s*\n\s*projects:\s*"([^"]+)",\s*savings\s*\n\s*:\s*"([^"]+)",/g, 
  'stats: {\n          projects: "$1",\n          savings: "$2",');

// Fix aboutPage sections
content = content.replace(/aboutPage:\s*\n\s*title:\s*"([^"]+)",\s*subtitle\s*\n\s*:\s*"([^"]+)",/g,
  'aboutPage: {\n      title: "$1",\n      subtitle: "$2",');

// Fix socialProof section
content = content.replace(/socialProof:\s*\n\s*title:\s*"([^"]+)",\s*testimonial1\s*\n\s*:\s*/g,
  'socialProof: {\n        title: "$1",\n        testimonial1:\n          ');

// Fix cta section  
content = content.replace(/cta:\s*\n\s*title:\s*"([^"]+)",\s*subtitle\s*\n\s*:\s*"([^"]+)",/g,
  'cta: {\n        title: "$1",\n        subtitle: "$2",');

// Remove double commas
content = content.replace(/,\s*,/g, ',');

// Fix unclosed objects - add missing closing braces
// Count opening and closing braces to ensure they match
let openBraces = (content.match(/{/g) || []).length;
let closeBraces = (content.match(/}/g) || []).length;

console.log(`Open braces: ${openBraces}, Close braces: ${closeBraces}`);

// Write the fixed content
fs.writeFileSync(filePath, content, 'utf8');

console.log('Translations file fixed!');