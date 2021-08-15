// priority: 1

let inspected = {
	add: false,
	remove: false
}

/** @param {WorldgenAddEventJSForge} e **/
/** @param {WorldgenRemoveEventJSForge} e **/ 

/* onEvent(global.EVENT.STARTUP.WORLDGEN_ADD, e => {
	if (!inspected.add) {
		//global.inspect(e, true)
		inspected.add = true
	}
})

onEvent(global.EVENT.STARTUP.WORLDGEN_REMOVE, e => {
	// console.info("=====FEATURES======")
	// e.printFeatures()
	if (!inspected.remove) {
		//global.inspect(e, true)
		//e.printFeatures("vegetal_decoration")
		inspected.remove = true
	}
})

onEvent("worldgen.remove", e => {
	console.info("=====FEATURES======")
	e.printFeatures()
})
 */