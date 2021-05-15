const configBase = require('./wdio.conf');
const { ghostBaseUrl3_3_0 } = require('./config');

exports.config = {
  ...configBase,
  currentGhostVersion: '3.3.0',
  baseUrl: ghostBaseUrl3_3_0
};