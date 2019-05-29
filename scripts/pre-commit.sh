#!/bin/bash

for file in $(git diff --cached --name-only | grep -E '\.ts$')
do
  git show ":$file" | yarn eslint "$file" --fix # we only want to lint the staged changes, not any un-staged changes
  if [ $? -ne 0 ]; then
    echo "ESLint failed on staged file '$file'. Please check your code and try again. You can run ESLint manually via npm run eslint."
    exit 1 # exit with failure status
  fi
done