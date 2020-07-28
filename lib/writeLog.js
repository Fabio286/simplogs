'use strict';
const fs = require('fs');
const path = require('path');
const fullPath = path.dirname(require.main.filename);
const regexResp = /^(.*?)node_modules/.exec(fullPath);
const appPath = regexResp ? regexResp[1] : fullPath;
// const appPath = path.join(__dirname, '../');

const writeLogs = {
   /**
    * Writes a log on yyyymmdd-trace.log file
    *
    * @param {*} trace Trace to write on log
    */
   writeTrace (trace) {
      return new Promise((resolve, reject) => {
         const fd = new Date();
         const y = fd.getFullYear();
         const m = (fd.getMonth() + 1).toString().padStart(2, '0');
         const d = fd.getDate().toString().padStart(2, '0');
         const H = fd.getHours().toString().padStart(2, '0');
         const i = fd.getMinutes().toString().padStart(2, '0');
         const s = fd.getSeconds().toString().padStart(2, '0');
         const ms = fd.getMilliseconds().toString().padStart(3, '0');
         const string = `${d}/${m}/${y} ${H}:${i}:${s}.${ms} - ${trace}\r\n`;

         fs.access(`${appPath}/logs`, err => {
            if (err) {
               try {
                  fs.mkdirSync(`${appPath}/logs`);
               }
               catch (err) {}
            }

            fs.appendFile(`${appPath}/logs/${y}${m}${d}-trace.log`, string, 'utf-8', err => {
               if (err) reject(err);
               resolve();
            });
         });
      });
   },

   /**
    * Writes a log on yyyymmdd-err.log file
    *
    * @param {*} err Error to write on log
    */
   writeError (err) {
      return new Promise((resolve, reject) => {
         let errMsg;
         if (Object.prototype.hasOwnProperty.call(err, 'stack'))
            errMsg = err.stack;
         else if (typeof err === 'object')
            errMsg = `Error: ${JSON.stringify(err, null, 3)}`;
         else
            errMsg = err;

         const fd = new Date();
         const y = fd.getFullYear();
         const m = (fd.getMonth() + 1).toString().padStart(2, '0');
         const d = fd.getDate().toString().padStart(2, '0');
         const H = fd.getHours().toString().padStart(2, '0');
         const i = fd.getMinutes().toString().padStart(2, '0');
         const s = fd.getSeconds().toString().padStart(2, '0');
         const ms = fd.getMilliseconds().toString().padStart(3, '0');
         const string = `${d}/${m}/${y} ${H}:${i}:${s}.${ms} - ${errMsg}\r\n`;

         fs.access(`${appPath}/logs`, err => {
            if (err) {
               try {
                  fs.mkdirSync(`${appPath}/logs`);
               }
               catch (err) {}
            }

            fs.appendFile(`${appPath}/logs/${y}${m}${d}-err.log`, string, 'utf-8', err => {
               if (err) reject(err);
               resolve();
            });
         });
      });
   }

};

module.exports = writeLogs;
