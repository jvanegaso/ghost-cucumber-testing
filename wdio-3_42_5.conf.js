const configBase = require('./wdio.conf');
const { ghostBaseUrl3_42_5 } = require('./config');

exports.config = {
  ...configBase,
  currentGhostVersion: '3.42.5',
  baseUrl: ghostBaseUrl3_42_5
};

// 