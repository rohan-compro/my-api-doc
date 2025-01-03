#!/bin/bash

# Enable error handling to stop the script if any command fails
set -e

# Set repository variables
CURRENT_REPO_DIR=$(pwd)          # The current repository (where you are running the script)
EXTERNAL_REPO_URL="https://github.com/rohan-compro/marvel"  # URL of the external repository
EXTERNAL_REPO_DIR="external-repo"  # Folder to clone the external repository

# Step 1: Clone the external repository (without its .git folder)
echo "Cloning marvel repository..."
git clone --depth 1 --single-branch $EXTERNAL_REPO_URL $EXTERNAL_REPO_DIR

# Step 2: Ensure the target folder is clean
TARGET_DIR="$CURRENT_REPO_DIR/docs/sdk"
echo "Ensuring target folder $TARGET_DIR is clean..."
rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR"

# Step 3: Copy files to the desired folder in your current repository (e.g., docs/sdk)
echo "Copying files from external repo to $TARGET_DIR..."
cp -r "$EXTERNAL_REPO_DIR"/* "$TARGET_DIR/"

# Step 4: Clean up the external repository folder after copying files
echo "Cleaning up the cloned external repository..."
rm -rf "$EXTERNAL_REPO_DIR"

# Step 5: Build the Docusaurus site
echo "Building the Docusaurus site..."
npm run build

# Step 6: Deploy to Netlify using the CLI
echo "Deploying to Netlify..."
npx netlify deploy --prod --dir=build

echo "Deployment complete. You can now commit and push the changes to your repository."
