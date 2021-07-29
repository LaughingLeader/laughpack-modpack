onEvent("player.chat", e => {
	console.info("player.chat")
	global.printObject(e.player)
})

let test = true
/** @param {LoggedInEventJS} e */
onEvent("player.tick", e => {
	if (test) {
		test = false
		console.info("player.tick")
		//console.info(`spawnLocation: ${e.player.spawnLocation}`)
		//console.info(`Dimension(func_241141_L_): ${e.player.minecraftEntity.func_241141_L_()}`)
		//console.info(`Position(func_241140_K_ ): ${e.player.minecraftEntity.func_241140_K_()}`)
		//global.inspect(e.player.minecraftEntity)
		//global.inspect(e.player.minecraftEntity.func_241141_L_(), true)
		//global.inspect(e.server.entities[0], true)
		//global.inspect(e.server.minecraftServer, true)
		//global.inspect(e.player, true)
		let i = 0
		// e.server.worlds.forEach(world => {
		// 	if(i == 0) {
		// 		global.inspect(world, true)
		// 		i++
		// 	}
		// })
		//let world = e.server.getWorld()
		//console.info(`getWorld: ${world}`)
		//global.printObject(world)
	}
})