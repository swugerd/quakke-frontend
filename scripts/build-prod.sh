#!/bin/bash
echo "🔧 Building production image..."

cd ~/projects/quakke-frontend

git fetch origin master
git checkout master
git reset --hard origin/master

docker build -t quakke-frontend:prod .
