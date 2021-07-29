onEvent("player.chat", e => {
	console.info("player.chat")
	global.printObject(e.player)
})

let test = true
onEvent("player.tick", e => {
	if (test) {
		test = false
		console.info("player.tick")
		global.inspect(e)
		console.info(`Is operator: ${e.player.OP}`)
		global.printObject(e.player)
	}
})