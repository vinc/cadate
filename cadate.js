#!/usr/bin/env node

const fs = require('fs');
const { DateTime } = require('luxon');
const argv = require('minimist')(process.argv.slice(2), {
  boolean: ['i', 'iso8601', 'short', 'abbr', 'full', 'huge']
});

if (argv.h || argv.help) {
  fs.createReadStream(__dirname + '/usage.txt').pipe(process.stdout);
  return 0;
}

const input = argv._.join(' ');
const date = (input ? DateTime.fromISO(input) : DateTime.local()).reconfigure({
  locale: argv.l || argv.locale || require('locale2'),
  outputCalendar: argv.c || argv.cal || argv.calendar,
  numberingSystem: argv.n || argv.num || argv.numbering
}).setZone(argv.z || argv.timezone);

try {
  if (argv.i || argv.iso || argv.iso8601) {
    output = date.toFormat('yyyy-LL-dd');
  } else if (argv.short) {
    output = date.toLocaleString(DateTime.DATE_SHORT);
  } else if (argv.abbr) {
    output = date.toLocaleString(DateTime.DATE_MED);
  } else if (argv.full) {
    output = date.toLocaleString(DateTime.DATE_FULL);
  } else if (argv.huge) {
    output = date.toLocaleString(DateTime.DATE_HUGE);
  } else {
    output = date.toLocaleString();
  }
} catch(error) {
  console.error('Error: ' + error.message);
  return 1;
}

console.log(output);
