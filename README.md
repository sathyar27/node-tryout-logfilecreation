**Fun with logs**

Something has gone terribly wrong!
* Files you will need: error.log,sample.log (given in the repo)
* Files you should submit : index.js (you can also have additional ones)

*Log file parsing*

We’re really not sure what happened, but we did manage to recover
the log file ` error.log `. It seems to consist of a different log message
on each line. Each line begins with a character indicating the type of
log message it represents:

• ’I’ for informational messages,

• ’W’ for warnings, and

• ’E’ for errors.

The error message lines then have an integer indicating the severity
of the error (error-level), with 1 being the sort of error you might get around to
caring about sometime next summer, and 100 being epic, catastrophic
failure. All the types of log messages then have an integer time stamp
followed by textual content that runs to the end of the line. Here is a
snippet of the log file including an informational message followed
by a level 2 error message:

`I 147 mice in the air, I’m afraid, but you might catch a bat, and`

`E 2 148 #56k istereadeat lo d200ff\] BOOTMEM`

I:Informational | 147:timestamp | rest:message

E:Error | 2:error-level | 148:timestamp | rest:message

It’s all quite confusing; clearly we need a program to sort through this mess.


*Things to be done*

 - Read and parse the log file
 - Create a folder named `parsed`
 - Create four different files with following contents in it- 
    1) File with all Informational messages sorted with timestamp
    2) File with all Warning messages sorted with timestamp
    3) File with all Error messages messages sorted with timestamp
    4) File with all Error messages ,sorted by error level and with only 
       error level greater than 50 
  - Print `Files created` once all files are written
  - Print the file sizes of all the created files once done (Optional)

*Rules*
 1. No loops allowed
 2. Must use Promise api for reading and creating files

*Hints*
 1. Use Ramda / lodash / native sort function of Array to sort records
 2. Promise.all will help with finding out if all files are created.

> Written with [StackEdit](https://stackedit.io/).

