<!-- TITLE/ -->

<h1>Tiered Map</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.org/bevry/tiered-map" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/bevry/tiered-map/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/tiered-map" title="View this project on NPM"><img src="https://img.shields.io/npm/v/tiered-map.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/tiered-map" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/tiered-map.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/tiered-map" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/tiered-map.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/tiered-map#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/tiered-map.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-thanksapp"><a href="https://givethanks.app/donate/npm/tiered-map" title="Donate to this project using Thanks App"><img src="https://img.shields.io/badge/thanksapp-donate-yellow.svg" alt="Thanks App donate button" /></a></span>
<span class="badge-boostlab"><a href="https://boost-lab.app/bevry/tiered-map" title="Donate to this project using Boost Lab"><img src="https://img.shields.io/badge/boostlab-donate-yellow.svg" alt="Boost Lab donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A simple map of key value pairs with support for tiers (e.g. defaults go at tier 25, standards go at 50, and overrides go at tier 75)

<!-- /DESCRIPTION -->


<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Install: <code>npm install --save tiered-map</code></li>
<li>Require: <code>require('tiered-map')</code></li>
</ul>

<a href="https://jspm.io" title="Native ES Modules CDN"><h3>jspm</h3></a>

``` html
<script type="module">
    import * as pkg from '//dev.jspm.io/tiered-map'
</script>
```

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>tiered-map</code> aliases <code>tiered-map/source/index.js</code></li>
<li><code>tiered-map/source/index.js</code> is esnext source code with require for modules</li>
<li><code>tiered-map/edition-browsers/index.js</code> is esnext compiled for browsers with require for modules</li></ul>

<!-- /INSTALL -->


## Usage

```javascript
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

<h2>History</h2>

<a href="https://github.com/bevry/tiered-map/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/bevry/tiered-map/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/tiered-map/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/tiered-map">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-thanksapp"><a href="https://givethanks.app/donate/npm/tiered-map" title="Donate to this project using Thanks App"><img src="https://img.shields.io/badge/thanksapp-donate-yellow.svg" alt="Thanks App donate button" /></a></span>
<span class="badge-boostlab"><a href="https://boost-lab.app/bevry/tiered-map" title="Donate to this project using Boost Lab"><img src="https://img.shields.io/badge/boostlab-donate-yellow.svg" alt="Boost Lab donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://balupton.com">Benjamin Lupton</a> — <a href="https://github.com/bevry/tiered-map/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/tiered-map">view contributions</a></li></ul>

<a href="https://github.com/bevry/tiered-map/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2015+ <a href="http://bevry.me">Bevry Pty Ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
