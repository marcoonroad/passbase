#!/usr/bin/env node

const argv = require('yargs').argv;

const digits = argv.digits || 8;
const limit = Number.parseInt(('9').repeat(digits), 10);

for (let index = 0; index <= limit; index += 1) {
  const padding = ('0').repeat(digits - 1) + index.toString();
  console.log(padding.substr(-digits));
}

