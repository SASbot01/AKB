#!/bin/bash

# AKB Capital Group - SFTP Deployment Script
# This script builds and uploads the landing page to the hosting server

set -e

echo "🚀 AKB Capital Group Deployment Script"
echo "========================================"

# SFTP Configuration
SFTP_HOST="access-5018168070.webspace-host.com"
SFTP_PORT="22"
SFTP_USER="a1511096"
SFTP_PASS="AKBlanding25."

# Local build directory
BUILD_DIR="./dist"

# Remote directory (root of the web server)
REMOTE_DIR="."

echo ""
echo "📦 Step 1: Building the project..."
npm run build

echo ""
echo "📤 Step 2: Uploading files to server..."
echo "   Server: $SFTP_HOST"
echo "   User: $SFTP_USER"

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo ""
    echo "⚠️  lftp is not installed. Installing via Homebrew..."
    brew install lftp
fi

# Upload using lftp
lftp -e "
set sftp:auto-confirm yes;
set ssl:verify-certificate no;
open sftp://$SFTP_USER:$SFTP_PASS@$SFTP_HOST:$SFTP_PORT;
mirror --reverse --verbose $BUILD_DIR $REMOTE_DIR;
bye
"

echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Your landing page is now live!"
echo ""
echo "📋 Uploaded files:"
echo "   - index.html"
echo "   - assets/index-CBzUHAbx.js"
echo ""
echo "🔗 Next steps:"
echo "   1. Configure your domain to point to: $SFTP_HOST"
echo "   2. Access your site through your domain"
echo ""
