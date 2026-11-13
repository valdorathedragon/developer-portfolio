#!/bin/bash
# Author: Vedant Srivastava (2601060015)
# Description: Generates a formatted system information report.

STUDENT_NAME="Vedant Srivastava"
ROLL_NUMBER="2601060015"

echo "============================================================"
echo "SYSTEM REPORT | Name: $STUDENT_NAME | Roll No: $ROLL_NUMBER | Date: $(date)"
echo "============================================================"

echo -e "\n--- CPU Information ---"
lscpu | grep -E "Model name|CPU\(s\):"

echo -e "\n--- Memory Usage ---"
free -h | awk 'NR==1{print $1, $2, $3} NR==2{print "RAM:", "Total=" $2, "| Used=" $3}'

echo -e "\n--- Top 3 Processes by CPU Usage ---"
ps -eo pid,comm,%cpu --sort=-%cpu | head -n 4

echo -e "\n============================================================"
echo "Report generated successfully."
echo "============================================================"
