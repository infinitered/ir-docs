#!/bin/bash

# Parameters
TARGET_REPO="git@github.com:infinitered/ir-docs.git"
PACKAGE_NAME="react-native-mlkit"
DOCS_PATH="./packages/ir-docs"
LABEL="React Native MLKit"
DESCRIPTION="Expo Native modules for MLKit"

# Install Git if not already installed
if ! git --version > /dev/null 2>&1; then
  sudo apt-get update
  sudo apt-get install -y git
fi

# Clone target repository into TEMP_IR_DOCS
git clone "$TARGET_REPO" ./TEMP_IR_DOCS

# Check if docs exist
if [ ! "$(ls -A $DOCS_PATH/docs)" ]; then
  echo "Error: No files found in docs directory."
  exit 1
fi

# Remove existing docs with the same package name if they exist
rm -rf ./TEMP_IR_DOCS/docs/$PACKAGE_NAME

# Create the target directory
mkdir -p ./TEMP_IR_DOCS/docs/$PACKAGE_NAME

# Copy docs to TEMP_IR_DOCS repository
cp -R $DOCS_PATH/docs/* ./TEMP_IR_DOCS/docs/$PACKAGE_NAME

# Copy static content if it exists
if [ "$(ls -A $DOCS_PATH/static)" ]; then
  mkdir -p ./TEMP_IR_DOCS/static/$PACKAGE_NAME
  cp -R $DOCS_PATH/static/* ./TEMP_IR_DOCS/static/$PACKAGE_NAME/
else
  echo "No static files to copy."
fi

# Create _category_.json
echo "{
  \"label\": \"$LABEL\",
  \"link\": {
    \"type\": \"generated-index\",
    \"description\": \"$DESCRIPTION\"
  }
}" > ./TEMP_IR_DOCS/docs/$PACKAGE_NAME/_category_.json

# Commit and push
cd ./TEMP_IR_DOCS
git add .
COMMIT_MESSAGE=$(git log -1 --pretty=%B)
PR_NUMBER=$(echo $COMMIT_MESSAGE | grep -oE "#[0-9]+")
if [ ! -z "$PR_NUMBER" ]; then
  REPO_URL=$(git config --get remote.origin.url)
  REPO_NAME=$(basename -s .git $REPO_URL)
  PR_LINK="https://github.com/infinitered/$REPO_NAME/pull/$PR_NUMBER"
  FINAL_COMMIT_MESSAGE="$REPO_NAME -- $COMMIT_MESSAGE -- $PR_LINK"
else
  FINAL_COMMIT_MESSAGE="$COMMIT_MESSAGE"
fi

if git diff --quiet && git diff --staged --quiet; then
    echo "Nothing to commit, working tree clean"
else
    git commit -m "$FINAL_COMMIT_MESSAGE"
    git push origin main
fi

cd ..
rm -rf TEMP_IR_DOCS
