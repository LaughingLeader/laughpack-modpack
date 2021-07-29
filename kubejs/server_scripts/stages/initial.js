//priority: 99

/**
 * @typedef LoggedInEventJS
 * @type {Object}
 * @property {ServerJS} server
 * @property {ServerPlayerJS} player
 */

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
	}
}

events.listen("player.logged_in", onLoggedIn)