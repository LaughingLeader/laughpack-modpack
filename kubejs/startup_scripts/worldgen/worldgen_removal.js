
onEvent(global.EVENT.STARTUP.WORLDGEN_REMOVE, /** @param {WorldgenRemoveEventJSForge} e **/ e => {
	//Removing hardcoded Druidcraft lavender.
	e.removeFeatureById("vegetal_decoration", ["druidcraft:lavender"])
})