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
		console.info(`getSpawnLocation: ${e.player.getSpawnLocation()}`)
		global.inspect(e.server, true)
		//global.inspect(e.player, true)
		let i = 0
		e.server.worlds.forEach(world => {
			if(i == 0) {
				global.inspect(world, true)
				i++
			}
		})
		//let world = e.server.getWorld()
		//console.info(`getWorld: ${world}`)
		//global.printObject(world)
	}
})