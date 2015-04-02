
<!-- TITLE/ -->

# Tiered Map

<!-- /TITLE -->


<!-- BADGES/ -->

[![Build Status](https://img.shields.io/travis/bevry/tiered-map/master.svg)](http://travis-ci.org/bevry/tiered-map "Check this project's build status on TravisCI")
[![NPM version](https://img.shields.io/npm/v/tiered-map.svg)](https://npmjs.org/package/tiered-map "View this project on NPM")
[![NPM downloads](https://img.shields.io/npm/dm/tiered-map.svg)](https://npmjs.org/package/tiered-map "View this project on NPM")
[![Dependency Status](https://img.shields.io/david/bevry/tiered-map.svg)](https://david-dm.org/bevry/tiered-map)
[![Dev Dependency Status](https://img.shields.io/david/dev/bevry/tiered-map.svg)](https://david-dm.org/bevry/tiered-map#info=devDependencies)<br/>
[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A simple map of key value pairs with support for tiers (e.g. defaults go at tier 25, standards go at 50, and overrides go at tier 75)

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

## Install

### [NPM](http://npmjs.org/)
- Use: `require('tiered-map')`
- Install: `npm install --save tiered-map`

### [Browserify](http://browserify.org/)
- Use: `require('tiered-map')`
- Install: `npm install --save tiered-map`
- CDN URL: `//wzrd.in/bundle/tiered-map@1.0.1`

### [Ender](http://enderjs.com)
- Use: `require('tiered-map')`
- Install: `ender add tiered-map`

<!-- /INSTALL -->


## Usage

``` javascript
var TieredMap = require('tiered-map')

var m = new TieredMap({
	tiers: {
		'high': 75
	}
	onChangeListener: function(key, newValue, oldValue){
		console.log('The key', key, 'changed from', oldValue, 'to', newValue)
	}
})

m.set('name', 'ben')  // name defaults to ben (default level is 50)
m.set('name', 'bob', 25)  // name will stay bob
m.set('name', null)  // name will become bob
m.set('name', 'john', 'high')  // name will become john

console.log(m.get('name', 75))  // will output john
console.log(m.get('name'))  // will output nothing
console.log(m.get('name', 25))  // will output bob

console.log(m.getTier('high'))  // will output 75
```

Very useful for having multiple tiers of data attributes with different priorities. For example, you could have default values at tier 25, adjusted values at tier 50, and override values at tier 75.


<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/bevry/tiered-map/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/bevry/tiered-map/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

These amazing people are maintaining this project:

- Benjamin Lupton <b@lupton.cc> (https://github.com/balupton)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/bevry.svg)](https://www.gratipay.com/bevry/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPayl donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Benjamin Lupton](https://github.com/balupton) <b@lupton.cc> — [view contributions](https://github.com/bevry/tiered-map/commits?author=balupton)

[Become a contributor!](https://github.com/bevry/tiered-map/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Unless stated otherwise all works are:

- Copyright &copy; 2015+ Bevry Pty Ltd <us@bevry.me> (http://bevry.me)

and licensed under:

- The incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT License](http://opensource.org/licenses/mit-license.php)

<!-- /LICENSE -->


