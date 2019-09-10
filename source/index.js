'use strict'

module.exports = class TieredMap {
	constructor(opts) {
		this.highestAttributes = {}
		this.attributesByTier = {}
		this.namedTiers = {}
		this.setTiers = []
		this.setConfig(opts)
	}

	setConfig(opts = {}) {
		if (opts.onChangeListener) {
			this.onChangeListener = opts.onChangeListener
		}

		if (opts.namedTiers) {
			for (const key in opts.namedTiers) {
				if (opts.namedTiers.hasOwnProperty(opts.namedTiers)) {
					const value = opts.namedTiers[key]
					this.setTier(key, value)
				}
			}
		}

		return this
	}

	setTier(key, value) {
		this.namedTiers[key] = value
		return this
	}

	getTier(key) {
		const type = typeof key
		if (type === 'number') {
			return key
		} else if (type === 'string') {
			return this.namedTiers[key]
		} else {
			throw new Error('Unknown type for key')
		}
	}

	getHighestTier() {
		return this.setTiers[this.setTiers.length - 1]
	}

	isHighestTier(tier) {
		return this.getTier(tier) === this.getHighestTier()
	}

	set(key, value, tier = 50) {
		tier = this.getTier(tier)

		if (tier < 0 || tier > 100) {
			throw new Error('Tier cannot be less than 0 or greater than 100')
		}

		let attributes = this.attributesByTier[tier]
		if (attributes == null) {
			attributes = this.attributesByTier[tier] = {}
			this.setTiers = [tier].concat(this.setTiers).sort()
		}
		attributes[key] = value

		const oldValue = this.highestAttributes[key]
		const newValue = this.getHighestValue(key)
		if (oldValue !== newValue) {
			this.highestAttributes[key] = newValue
			if (this.onChangeListener) {
				this.onChangeListener(key, newValue, oldValue)
			}
		}

		return this
	}

	get(key, tier) {
		if (tier == null) {
			return this.highestAttributes[key]
		} else {
			return (this.attributesByTier[tier] || {})[key]
		}
	}

	getHighestValue(key) {
		const tiers = this.setTiers
		for (let i = tiers.length - 1; i >= 0; --i) {
			const tier = tiers[i]
			const value = this.get(key, tier)
			if (value != null) {
				return value
			}
		}
	}
}
