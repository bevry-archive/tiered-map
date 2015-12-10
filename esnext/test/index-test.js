/* eslint no-magic-numbers:0 */
'use strict'

// Import
const joe = require('joe')
const {equal} = require('assert-helpers')
const TieredMap = require('../../')

// Task
joe.describe('tiered-map', function (describe, it) {
	it('should work', function () {
		const m = new TieredMap()
		m.set('name', 'ben')
		equal(m.get('name'), 'ben', 'expect name to be ben')
		m.set('name', 'duran', 25)
		equal(m.get('name'), 'ben', 'expect name to stay ben')
		m.set('name', null, 50)
		equal(m.get('name'), 'duran', 'expect name to become duran')
		m.set('name', 'joe', 75)
		equal(m.get('name'), 'joe', 'expect name to be joe')
		m.setTier('up', 75)
		equal(m.getTier('up'), 75, 'expect up tier to be 75')
		m.set('name', 'john', 'up')
		equal(m.get('name'), 'john', 'expect name to be john')
		m.set('name', null, 75)
		m.set('name', null, 25)
		equal(m.get('name') || null, null, 'expect name to be null')
	})
})
