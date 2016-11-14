'use strict'

const insubnet = require('insubnet')
const ranges = require('./ip-ranges')

module.exports = function(ip) {
    for (let i = 0; i < ranges.prefixes.length; i++) {
        if (insubnet.Auto(ip, ranges.prefixes[i].ip_prefix)) {
            return ranges.prefixes[i];
        }
    }
    return false;
}
