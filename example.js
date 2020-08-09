/* eslint-disable @typescript-eslint/no-var-requires */
const { writeTrace, writeError } = require('./dist/index');

writeError('This is an error message!');
writeTrace('This is a trace message!');
