//priority: 99

/**
 * @typedef LoggedInEventJS
 * @type {Object}
 * @property {ServerJS} server
 * @property {ServerPlayerJS} player
 */

let serverSpawn = {
	pos: [0.5, 104.0, -127.0],
	facing: [1.0, 2.0]
}

let actualWorldSpawn = [
	-3857.5, 74.0, 1603.5
]

let teleportCommand = function(player) {
	return `/execute in laughpack:void run teleport ${player} ${serverSpawn.pos.join(" ")} ${serverSpawn.facing.join(" ")}`
}

/**
 * @param {LoggedInEventJS} e
**/
let onLoggedIn = function(e)
{
	let startingItems = [
		"minecraft:stone_sword",
		"minecraft:stone_pickaxe",
		"botania:flower_bag",
		{ item: "minecraft:apple", count: 6 },
	]

	if (!e.hasGameStage("starting_items")) {
		e.addGameStage("starting_items")
		startingItems.forEach(item=> {
			e.player.give(item)
		})
	}

	if (!e.hasGameStage("void_guest") && !e.player.OP && !e.player.creativeMode) {
		e.addGameStage("void_guest")
	}

	if (!e.hasGameStage("void_spawn") && !e.server.singlePlayer) {
		e.addGameStage("void_spawn")
		let spawnDimension = e.player.minecraftEntity.func_241141_L_()
		if (spawnDimension != null && spawnDimension.path == "overworld") {
			e.server.runCommandSilent(teleportCommand(e.player.getName()))
		}
	}
}

global.customCommands.spawntest = function(server,player) {
	console.info(`Server: name(${server.name}) dedicated(${server.dedicated}) singlePlayer(${server.singlePlayer})`)
	//let username = e.parseResults.context.source.func_197011_j()[0]
	//server.runCommandSilent(teleportCommand(username))
}

onEvent("player.logged_in", onLoggedIn)

//console.info(`${user} (${typeof(user)})`)
//global.inspect(user)
//global.inspect(e.parseResults.context.source)
//global.inspect(e.parseResults.context.source, true)
//console.info(`Player name: ${player.entity.getName()}`)