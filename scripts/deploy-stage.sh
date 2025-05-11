#!/bin/bash
echo "🚀 Deploying staging..."

docker-compose up -d --force-recreate frontend-stage

echo "✅ Staging deployment completed!"
