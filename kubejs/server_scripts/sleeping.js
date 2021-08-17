let printedStuff = false

onEvent(global.EVENT.SERVER.WORLD_TICK, /** @param {SimpleWorldEventJS} e **/ e => {
	let world = e.getWorld()
	if(!printedStuff) {
		global.inspect(world, true, false)
		global.inspect(world.minecraftWorld, true, false)
		printedStuff = true
	}
})