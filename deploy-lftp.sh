#!/bin/bash

# AKB Capital Group - SFTP Deployment Script (using lftp)
# This script uploads the built landing page to the hosting server

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

# Remote directory - we'll first check what's available
# Common options: /, /public_html/, /htdocs/, /www/
REMOTE_DIR="/"

echo ""
echo "📦 Step 1: Building the project..."
npm run build

echo ""
echo "📤 Step 2: Uploading files to server..."
echo "   Server: $SFTP_HOST"
echo "   User: $SFTP_USER"
echo "   Remote directory: $REMOTE_DIR"

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo ""
    echo "⚠️  lftp is not installed. Installing via Homebrew..."
    brew install lftp
fi

# Upload using lftp (more reliable than sftp for batch operations)
lftp -e "
set sftp:auto-confirm yes;
set ssl:verify-certificate no;
open sftp://$SFTP_USER:$SFTP_PASS@$SFTP_HOST:$SFTP_PORT;
cd $REMOTE_DIR;
mirror --reverse --delete --verbose $BUILD_DIR .;
bye
"

echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Your landing page should now be live at your domain."
echo ""
echo "📝 Note: If the site doesn't appear, the remote directory might be different."
echo "   Common alternatives: /public_html/, /htdocs/, /www/"
echo ""
