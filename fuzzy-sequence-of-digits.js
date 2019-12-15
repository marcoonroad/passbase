#!/usr/bin/env node

const argv = require('yargs').argv;
const crypto = require('crypto');

const randomNumber = () => {
  const hexBytes = crypto.randomBytes(4).toString('hex');
  return Number.parseInt(hexBytes, 16);
};

const digits = argv.digits || 8;

while (true) {
  const number = randomNumber();
  const padding = ('0').repeat(digits - 1) + number.toString();

  console.log(padding.substr(-digits));
}

