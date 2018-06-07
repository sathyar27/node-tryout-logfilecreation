'use strict';

const fs = require('fs');
const ramda = require('ramda');

function infoMsg(data) {
    return data.split("\r\n").filter((x) => {
        if (x != "") {
            if (x[0] == "I") {
                return true;
            }
            else {
                return false;
            }
        }
    })
}

function warningMsg(data) {
    return data.split("\r\n").filter((x) => {
        if (x != "") {
            if (x[0] == "W") {
                return true;
            }
            else {
                return false;
            }
        }
    })
}


function errorMsg(data) {
    return data.split("\r\n").filter((x) => {
        if (x != "") {
            if (x[0] == "E") {
                return true;
            }
            else {
                return false;
            }
        }
    })
}

function nnnew(data) {
    // 3 func
}

function writeFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('Lyric saved!');
    });
}


const writeFileC = fileName => fileData => {
    fs.writeFile(fileName, fileData, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;

        // success case, the file was saved
        console.log('Lyric saved!');
    });
}
const writeFileInfo = writeFileC("info-log.txt")


function myPackageFunc(logfile) {
    return new Promise((resolve, reject) => {
        fs.readFile(logfile, 'utf8', (err, data) => {
            if (err) { reject(err); }
            else {
                resolve(data);
            }
        });
    })

    // fs.readFile(logfile, 'utf-8', (err, data) => {  
    //     if (err) { console.log(err); }
    //     else {                
    //         console.log(data);
    //     }
    // });
}

// myPackageFunc("sample.log")

myPackageFunc("sample.log").then(errorMsg).then(data => writeFile('info-log.txt', data.join("\n"))).catch(console.log)

//myPackageFunc("sample.log").then(errorMsg).then(writeFileInfo).catch(console.log)