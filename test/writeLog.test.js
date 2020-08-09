/* eslint-disable @typescript-eslint/no-var-requires */
const chai = require('chai');
chai.use(require('chai-fs'));
chai.should();
const fs = require('fs');
const path = require('path');

const { writeTrace, writeError } = require('../dist/index');

const fd = new Date();
const y = fd.getFullYear();
const m = (fd.getMonth() + 1).toString().padStart(2, '0');
const d = fd.getDate().toString().padStart(2, '0');
const tracePath = path.join(__dirname, `../logs/${y}${m}${d}-trace.log`);
const errPath = path.join(__dirname, `../logs/${y}${m}${d}-err.log`);

describe('writeLog.js', function () {
   after(function () {
      try {
         fs.unlinkSync(tracePath);
         fs.unlinkSync(errPath);
      }
      catch (error) {}
   });

   describe('writeTrace()', function () {
      it('should write a trace file', function (done) {
         writeTrace('This is a trace message!').then(() => {
            tracePath.should.be.a.file();
            done();
         }).catch(console.log);
      });
   });

   describe('writeError()', function () {
      it('should write a error file', function (done) {
         const err = { stack: 'This is a error message!' };
         writeError(err).then(() => {
            errPath.should.be.a.file();
            done();
         }).catch(console.log);
      });
   });
});
