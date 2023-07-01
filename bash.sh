#!/bin/bash

get_files () {
  files="`ls *.[ch]`"
}


count_lines () {
  local f=$1 
  l=`wc -l $f | sed 's/^\([0-9]*\).*$/\1/'` 

if [ $# -ge 1 ]
then
  echo "Usage: $0 "
  exit 1
fi

# split by newline
IFS=$'\012'

echo "$0 counts the lines of code" 
# don't forget to initialise!
l=0
n=0
s=0
# call a function to get a list of files
get_files
# iterate over this list
for f in $files
do
        # call a function to count the lines
        count_lines $f
        echo "$f: $l"
	# increase counter
        n=$[ $n + 1 ]
	# increase sum of all lines
        s=$[ $s + $l ]
done

echo "$n files in total, with $s lines in total"