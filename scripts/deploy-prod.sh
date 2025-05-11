#!/bin/bash
echo "🚀 Deploying production..."

docker-compose up -d --force-recreate frontend-prod

echo "🚀 Production deployment completed!"
