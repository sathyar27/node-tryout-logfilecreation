"use strict";

const fs = require("fs");
const mkdirp = require("mkdirp");

const FOLDER_NAME = "log_file_1";

function myFunc(data) {
  const infoMsg = function(data) {
    return data.split("\r\n").filter(x => {
      if (x != "") {
        if (x[0] == "I") {
          return true;
        } else {
          return false;
        }
      }
    });
  };

  var infoMsg1 = infoMsg(data);

  const warningMsg = function(data) {
    return data.split("\r\n").filter(x => {
      if (x != "") {
        if (x[0] == "W") {
          return true;
        } else {
          return false;
        }
      }
    });
  };
  var warningMsg1 = warningMsg(data);

  const errorMsg = function(data) {
    return data.split("\r\n").filter(x => {
      if (x != "") {
        if (x[0] == "E") {
          return true;
        } else {
          return false;
        }
      }
    });
  };
  var errorMsg1 = errorMsg(data);

  return [infoMsg1, warningMsg1, errorMsg1];
}

function writeFile(filesData) {
  const infoWriteFile = function(fileName, fileData) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, fileData, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(`${fileName} sUCCESS`);
        }
      });
    });

    // fs.writeFile(fileName, fileData, err => {
    //   if (err) throw err;
    //   console.log("Lyric saved!");
    // });
  };

  return Promise.all([
    infoWriteFile(`${FOLDER_NAME}/info-log.txt`, filesData[0].join("\n")),
    infoWriteFile(`${FOLDER_NAME}/warning-log.txt`, filesData[1].join("\n")),
    infoWriteFile(`${FOLDER_NAME}/error-log.txt`, filesData[2].join("\n"))
  ]);
}

function myPackageFunc(logfile) {
  return new Promise((resolve, reject) => {
    fs.readFile(logfile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function mkdirpPromise(dirName) {
  return new Promise((resolve, reject) => {
    mkdirp(dirName, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// mkdirp(FOLDER_NAME, function (err) {
//     myPackageFunc("error.log").then(myFunc).then(writeFile).catch(console.log)
// })

mkdirpPromise("logfiles")
  .then(() =>
    myPackageFunc("error.log")
      .then(myFunc)
      .then(writeFile)
  )
  .then(data => data.length)
  .then((length) => console.log(`${length} Files saved`))
  .catch(console.log);

//mkdirpPromise("logfiles").then(() => "test").then(console.log).catch(console.log)

//mkdirpPromise("logfiles").then(() => myPackageFunc("error.log")).then(myFunc).then(writeFile).catch(console.log)

//myPackageFunc("sample.log").then(handleIWE).then(data => writeFile('info-log.txt', data.join("\n"))).catch(console.log)
