// priority: 0

onEvent(global.EVENT.STARTUP.WORLDGEN_REMOVE, /** @param {WorldgenRemoveEventJSForge} e **/ e => {
	/* try {
		let t = e.getConfiguredFeatureKey("lavender")
		console.info(`lavender key ? ${t}`)
		t = e.getConfiguredFeatureKey("druidcraft:lavender")
		console.info(`druidcraft lavender ? ${t}`)
	} catch (ex) {
		console.error(ex)
	} */
	//console.info("Removing lavender from biome features.")
	//Removing hardcoded Druidcraft lavender.
	e.removeFeatureById("vegetal_decoration", ["druidcraft:lavender", "minecraft:lavender"])

	//console.info("=====FEATURES======")
	//e.printFeatures("vegetal_decoration")
})