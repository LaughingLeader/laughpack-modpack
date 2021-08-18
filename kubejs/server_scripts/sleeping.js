let printedStuff = false

onEvent(global.EVENT.SERVER.WORLD_TICK, /** @param {SimpleWorldEventJS} e **/ e => {
	let world = e.getWorld()
	if (world.getTime() % 20 == 10)
	{
		let totalPlayers = world.players.length
		if (totalPlayers > 1) {
			let totalSleeping = 0
			world.players.forEach(p => {
				if (p.sleeping) {
					totalSleeping = totalSleeping + 1
				}
			})
			if (totalSleeping > 0) {
				console.info(`Total sleeping: ${totalSleeping}/${totalPlayers}`)
				if (totalSleeping >= totalPlayers / 2) {
					/** @type {ServerJS} */
					let server = utils.getServer()
					server.runCommandSilent("/time set 0")
				}
			}
		}
	}
	// if(!printedStuff) {
	// 	global.inspect(world, true, false)
	// 	printedStuff = true
	// }
})