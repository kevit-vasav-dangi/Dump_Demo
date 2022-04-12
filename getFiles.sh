#!/bin/bash
search_files=/home/kevit/Nodejs/Dump
date_format=$(date "+%Y-%m-%d-%H-%M-%S")
archive_name="yearly_backup-$date_format.xlsx"
isValidDate() {
    x
    date "yearly_backup-+%Y-%m-%d" -d "$d" > /dev/null  2>&1
    if [ $? != 0 ]
    then
        echo "Date $d NOT a valid YYYY-MM-DD date"
        exit 1
    fi
}
echo $date_format
for entry in "$search_files"/*
do 
    #echo $entry
    #if [$entry == */home/kevit/Nodejs/Dump/yearly_backup-20-03-2022-00-00-01.xlsx* ]; 
    #then
    #    echo "Its there"
    #fi
    #arr = ${string//"yearly_backup-"/ }
    #echo arr
    #isValidDate "$entry"
    #echo "$entry"
    #echo grep -i ".xlsx" $entry
done