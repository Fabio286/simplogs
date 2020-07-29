# SimpLogs

[![Build Status](https://travis-ci.com/Fabio286/simplogs.svg?branch=master)](https://travis-ci.com/Fabio286/simplogs) ![GitHub package.json version](https://img.shields.io/github/package-json/v/fabio286/simplogs) ![GitHub](https://img.shields.io/github/license/fabio286/simplogs)

A simple module that creates app file logs.  
I've made this module to have a light weight and simple way to track trace and error logs in my small and mid size projects.

However, if you are here maybe this small piece of code can be handy for your purpose.

## Installation

### Add GitHub registry

Add `@fabio286:registry=https://npm.pkg.github.com` to `.npmrc` file like follow:

```properties
@fabio286:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org
```

### Install

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
