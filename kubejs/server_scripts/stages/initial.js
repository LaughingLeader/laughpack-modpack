//priority: 99

/**
 * @typedef LoggedInEventJS
 * @type {Object}
 * @property {ServerJS} server
 * @property {ServerPlayerJS} player
 */

let serverSpawn = {
	pos: [0.5, 104.0, -127.0],
	facing: [0.0, 8.6]
}

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
		e.server.runCommandSilent(teleportCommand(e.player.getName()))
		// let spawnDimension = e.player.minecraftEntity.func_241141_L_()
		// if (spawnDimension != null && spawnDimension.path == "overworld") {
			
		// }
	}
}

/** 
 * @param {ServerPlayerEntityJS} player
 * @param {CommandEventJS} e 
*/
global.customCommands.spawntest = function (player, cmdParts, e) {
	let username = e.parseResults.context.source.func_197011_j()[0]
	//console.info(`${user} (${typeof(user)})`)
	//global.inspect(user)
	//global.inspect(e.parseResults.context.source)
	//global.inspect(e.parseResults.context.source, true)
	//console.info(`Player name: ${player.entity.getName()}`)
	e.server.runCommandSilent(teleportCommand(username))
	e.cancel()
}

onEvent("player.logged_in", onLoggedIn)