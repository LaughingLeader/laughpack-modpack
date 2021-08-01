onEvent("player.chat", e => {
	console.info("player.chat")
	global.printObject(e.player)
})

let onTick = function(e){
	if (test) {
		test = false
		console.info("player.tick")
		//global.inspect(Platform.mods, true)
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
		//let world = e.server.getLevel()
		//console.info(`getLevel: ${world}`)
		//global.printObject(world)
	}
}

let test = true
/** @param {LoggedInEventJS} e */
//onEvent("player.tick", onTick)