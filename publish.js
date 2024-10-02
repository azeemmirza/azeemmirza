const dotenv = require('dotenv');
const shell = require('shelljs');
const fs = require('node:fs');
const readline = require('node:readline');

// Helper to run shell commands
function runCommand(command, errorMessage) {
  if (shell.exec(command).code !== 0) {
    console.error(errorMessage);
    shell.exit(1);
  }
}

// Ask for version bump input (patch, minor, major)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1: Create temporary .npmrc file with NPM_TOKEN for authentication
const createNpmrcFile = () => {
  const npmToken = process.env.NPM_TOKEN;
  if (!npmToken) {
    console.error('NPM_TOKEN environment variable not set in .env');
    process.exit(1);
  }
  console.log('Creating temporary .npmrc file for authentication...');
  fs.writeFileSync('.npmrc', `//registry.npmjs.org/:_authToken=${npmToken}\n`);
};

// Step 2: Clean up .npmrc file after publishing
const cleanUpNpmrcFile = () => {
  console.log('Cleaning up temporary .npmrc file...');
  fs.unlinkSync('.npmrc');
};


dotenv.config();

// Start the process
rl.question('Enter the version type (patch, minor, major): ', function (versionType) {
  rl.close();

  try {
    // Step 1: Create .npmrc file with NPM_TOKEN
    createNpmrcFile();

    // Step 2: Bump version using npm
    console.log(`Bumping version as ${versionType}`);
    runCommand(`npm version ${versionType} -m "release: bump version to %s"`, 'Failed to bump version.');

    // Step 3: Push version bump to Git
    console.log('Pushing version changes to Git...');
    runCommand('git push --follow-tags', 'Failed to push changes to Git.');

    // Step 4: Publish to npm
    console.log('Publishing package to npm...');
    runCommand('npm publish', 'Failed to publish package to npm.');
  } finally {
    // Clean up the .npmrc file
    cleanUpNpmrcFile();
  }

  console.log('Version bumped and package published successfully!');
});