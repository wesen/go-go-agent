#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ensure the output directory exists
const outputDir = path.join(__dirname, '../src/generated/proto');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const jsonOutput = path.join(outputDir, 'events.json');
const jsOutput = path.join(outputDir, 'events.js');
const tsOutput = path.join(outputDir, 'events.d.ts');
const protoFile = path.join(__dirname, '../../proto/events.proto');

try {
  // Generate JSON from proto
  console.log('Generating JSON from proto...');
  execSync(`npx pbjs -t json -o ${jsonOutput} ${protoFile}`);

  // Generate JS from proto with static modules
  console.log('Generating JS from proto...');
  execSync(`npx pbjs -t static-module --es6 -w es6 -o ${jsOutput} ${protoFile}`);
  
  // Generate TypeScript definitions
  console.log('Generating TypeScript definitions...');
  execSync(`npx pbts -o ${tsOutput} ${jsOutput}`);
  
  console.log('Proto generation complete!');
} catch (error) {
  console.error('Error generating proto files:', error.message);
  process.exit(1);
}