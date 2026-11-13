#!/bin/bash
# Author: Vedant Srivastava (2601060015)
# Description: Creates a timestamped tar.gz backup archive of a specified folder.

if [ -z "$1" ]; then
    echo "Usage: ./backup.sh <folder>"
    exit 1
fi

SOURCE_DIR="$1"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Directory '$SOURCE_DIR' does not exist."
    exit 1
fi

BACKUP_DIR="$HOME/DeveloperPortfolio_Backups"
mkdir -p "$BACKUP_DIR"

TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")
ARCHIVE_NAME="backup_${TIMESTAMP}.tar.gz"
ARCHIVE_PATH="${BACKUP_DIR}/${ARCHIVE_NAME}"
LOG_FILE="${BACKUP_DIR}/backup.log"

tar -czf "$ARCHIVE_PATH" -C "$(dirname "$SOURCE_DIR")" "$(basename "$SOURCE_DIR")"

if [ $? -eq 0 ]; then
    FILE_SIZE=$(du -h "$ARCHIVE_PATH" | cut -f1)
    echo "Success! Backup created: $ARCHIVE_NAME (Size: $FILE_SIZE)"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] SUCCESS: Backed up '$SOURCE_DIR' to '$ARCHIVE_NAME' ($FILE_SIZE)" >> "$LOG_FILE"
else
    echo "Error: Backup failed."
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] FAILURE: Failed to back up '$SOURCE_DIR'" >> "$LOG_FILE"
    exit 1
fi
