'use strict'

const test = require('tape')
const isAwsIp = require('./')

test('is amazon', function(t) {
    t.plan(1)
    t.ok(isAwsIp('54.169.93.3'))
})
