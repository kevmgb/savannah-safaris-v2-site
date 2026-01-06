#!/usr/bin/env node

/**
 * Build script to inject environment variables into Decap CMS config
 * This replaces __GITHUB_APP_ID__ placeholder with the actual value from .env
 */

const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { config } = require('dotenv');

const rootDir = join(__dirname, '..');

// Load environment variables
config({ path: join(rootDir, '.env') });

const appId = process.env.VITE_DECAP_GITHUB_APP_ID;

if (!appId) {
  console.error('❌ Error: VITE_DECAP_GITHUB_APP_ID not found in .env file');
  console.error('   Please create a .env file in the root directory with:');
  console.error('   VITE_DECAP_GITHUB_APP_ID=your_app_id_here');
  process.exit(1);
}

// Read config.yml
const configPath = join(rootDir, 'public/admin/config.yml');

try {
  let configContent = readFileSync(configPath, 'utf8');
  
  // Replace placeholder with actual value
  configContent = configContent.replace(/__GITHUB_APP_ID__/g, appId);
  
  // Write back to config.yml
  writeFileSync(configPath, configContent, 'utf8');
  
  console.log('✅ Decap CMS config built successfully');
} catch (error) {
  console.error('❌ Error building config:', error.message);
  process.exit(1);
}

