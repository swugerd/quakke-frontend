#!/bin/bash
echo "🔧 Building staging image..."

cd ~/projects/quakke-frontend

if [ -n "$BRANCH" ]; then
  echo "📥 Pulling branch: $BRANCH"
  git fetch origin "$BRANCH"
  git checkout "$BRANCH" || git checkout -b "$BRANCH" origin/"$BRANCH"
  git reset --hard origin/"$BRANCH"
else
  echo "⚠️ BRANCH variable is not set. Skipping git pull."
fi

docker build -t quakke-frontend:stage .

echo "✅ Build completed"
