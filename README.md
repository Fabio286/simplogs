# SimpLogs

A simple module that creates app file logs.  
I've made this module to have a light weight and simple way to track trace and error logs in my small and mid size projects.

However, if you are here maybe this small piece of code can be handy for yout purpose.

## Installation

```bash
npm install --save @fabio286/simplogs
```

## Usage

```js
const { writeTrace, writeError } = require('@fabio286/simplogs');

writeError('This is an error message!');
writeTrace('This is a trace message!');
```

Error and trace files will be created in `logs` folder inside the app root. The name of log files is `yyyymmdd-err.log` and `yyyymmdd-trace.log`.

## Run tests

```bash
npm test
```
