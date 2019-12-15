#!/usr/bin/env node

const argv = require('yargs').argv;
const moment = require('moment');

const format = argv.format || 'YYYY-MM-DD';
const sinceDate =
  argv.since ||
  moment()
    .subtract(60, 'years')
    .format(format);
const untilDate = argv.until || moment().format(format);

let since = moment(sinceDate, format);
const until = moment(untilDate, format);

if (!since.isValid()) {
  console.error(`Invalid passed since date: ${since}`);
  process.exit(1);
}

if (!until.isValid()) {
  console.error(`Invalid passed until date: ${until}`);
  process.exit(1);
}

while (since.isSameOrBefore(until)) {
  console.log(since.format(format));
  since = since.add(1, 'day');
}
