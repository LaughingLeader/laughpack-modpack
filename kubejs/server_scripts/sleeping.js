let printedStuff = false

/** @param {SimpleWorldEventJS} e **/ e
let onWorldTick = function(e)
{
	let world = e.getWorld()
	//Every 20 ticks
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
				if (totalSleeping >= totalPlayers / 2) {
					console.info(`Total sleeping: ${totalSleeping}/${totalPlayers}`)
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
}

//onEvent(global.EVENT.SERVER.WORLD_TICK, onWorldTick)