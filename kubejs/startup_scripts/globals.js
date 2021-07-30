//priority: 1000

global.customCommands = {}

/**
 * All KubeJS event values.
 * @global
 */
global.EVENT = {
	/**
	 * Startup script event values.
	 * @readonly
	 * @enum {string}
	 */
	STARTUP: {
		/** Cancellable: No */
		INIT: "init",
		/** Cancellable: No */
		POSTINIT: "postinit",
		/** Cancellable: No */
		LOADED: "loaded",
		/** Cancellable: No */
		BLOCK_REGISTRY: "block.registry",
		/** Cancellable: No */
		ITEM_REGISTRY: "item.registry",
		/** Cancellable: No */
		FLUID_REGISTRY: "fluid.registry",
		/** Cancellable: No */
		WORLDGEN_ADD: "worldgen.add",
		/** Cancellable: No */
		WORLDGEN_REMOVE: "worldgen.remove",
	},
	/**
	 * Server script event values.
	 * @readonly
	 * @enum {string}
	 */
	SERVER: {
		/** Scope: Server Startup | Cancellable: No */
		COMMAND_REGISTRY: "command.registry",
		/** Cancellable: Yes */
		COMMAND_RUN: "command.run",
		/** Scope: Server Startup | Cancellable: No */
		SERVER_LOAD: "server.load",
		/** Cancellable: No */
		SERVER_UNLOAD: "server.unload",
		/** Cancellable: No */
		SERVER_TICK: "server.tick",
		/** Scope: Server Startup | Cancellable: No */
		SERVER_DATAPACK_FIRST: "server.datapack.first",
		/** Scope: Server Startup | Cancellable: No */
		SERVER_DATAPACK_LAST: "server.datapack.last",
		/** Scope: Server Startup | Cancellable: No */
		RECIPES: "recipes",
		/** Cancellable: No */
		WORLD_LOAD: "world.load",
		/** Cancellable: No */
		WORLD_UNLOAD: "world.unload",
		/** Cancellable: No */
		WORLD_TICK: "world.tick",
		/** Cancellable: Yes */
		WORLD_EXPLOSION_PRE: "world.explosion.pre",
		/** Cancellable: No */
		WORLD_EXPLOSION_POST: "world.explosion.post",
		/** Cancellable: No */
		PLAYER_LOGGED_IN: "player.logged_in",
		/** Cancellable: No */
		PLAYER_LOGGED_OUT: "player.logged_out",
		/** Cancellable: No */
		PLAYER_TICK: "player.tick",
		/** Cancellable: Yes */
		PLAYER_DATA_FROM_CLIENT: "player.data_from_client",
		/** Cancellable: Yes */
		PLAYER_CHAT: "player.chat",
		/** Cancellable: No */
		PLAYER_ADVANCEMENT: "player.advancement",
		/** Cancellable: No */
		PLAYER_INVENTORY_OPENED: "player.inventory.opened",
		/** Cancellable: No */
		PLAYER_INVENTORY_CLOSED: "player.inventory.closed",
		/** Cancellable: No */
		PLAYER_INVENTORY_CHANGED: "player.inventory.changed",
		/** Cancellable: No */
		PLAYER_CHEST_OPENED: "player.chest.opened",
		/** Cancellable: No */
		PLAYER_CHEST_CLOSED: "player.chest.closed",
		/** Cancellable: Yes */
		ENTITY_DEATH: "entity.death",
		/** Cancellable: Yes */
		ENTITY_ATTACK: "entity.attack",
		/** Cancellable: Yes */
		ENTITY_DROPS: "entity.drops",
		/** Cancellable: Yes */
		ENTITY_CHECK_SPAWN: "entity.check_spawn",
		/** Cancellable: Yes */
		ENTITY_SPAWNED: "entity.spawned",
		/** Scope: Server Startup | Cancellable: No */
		BLOCK_MISSING_MAPPINGS: "block.missing_mappings",
		/** Scope: Server Startup | Cancellable: No */
		BLOCK_TAGS: "block.tags",
		/** Cancellable: Yes */
		BLOCK_RIGHT_CLICK: "block.right_click",
		/** Cancellable: Yes */
		BLOCK_LEFT_CLICK: "block.left_click",
		/** Cancellable: Yes */
		BLOCK_PLACE: "block.place",
		/** Cancellable: Yes */
		BLOCK_BREAK: "block.break",
		/** Cancellable: No */
		BLOCK_DROPS: "block.drops",
		/** Scope: Server Startup | Cancellable: No */
		ITEM_MISSING_MAPPINGS: "item.missing_mappings",
		/** Scope: Server Startup | Cancellable: No */
		ITEM_TAGS: "item.tags",
		/** Cancellable: Yes */
		ITEM_RIGHT_CLICK: "item.right_click",
		/** Cancellable: No */
		ITEM_RIGHT_CLICK_EMPTY: "item.right_click_empty",
		/** Cancellable: No */
		ITEM_LEFT_CLICK: "item.left_click",
		/** Cancellable: Yes */
		ITEM_ENTITY_INTERACT: "item.entity_interact",
		/** Cancellable: Yes */
		ITEM_PICKUP: "item.pickup",
		/** Cancellable: Yes */
		ITEM_TOSS: "item.toss",
		/** Cancellable: No */
		ITEM_CRAFTED: "item.crafted",
		/** Cancellable: No */
		ITEM_SMELTED: "item.smelted",
		/** Scope: Server Startup | Cancellable: No */
		FLUID_TAGS: "fluid.tags",
		/** Cancellable: No */
		ENTITY_TYPE_TAGS: "entity_type.tags",
		/** Scope: Server */
		GAMESTAGE_ADDED: "gamestage.added",
		/** Scope: Server */
		GAMESTAGE_REMOVED: "gamestage.removed",
	},
	/**
	 * Client script event values.
	 * @readonly
	 * @enum {string}
	 */
	CLIENT: {
		/** Scope: Client Startup | Cancellable: No */
		CLIENT_INIT: "client.init",
		/** Cancellable: No */
		CLIENT_DEBUG_INFO_LEFT: "client.debug_info.left",
		/** Cancellable: No */
		CLIENT_DEBUG_INFO_RIGHT: "client.debug_info.right",
		/** Cancellable: No */
		CLIENT_LOGGED_IN: "client.logged_in",
		/** Cancellable: No */
		CLIENT_LOGGED_OUT: "client.logged_out",
		/** Cancellable: No */
		CLIENT_TICK: "client.tick",
		/** Cancellable: Yes */
		PLAYER_DATA_FROM_SERVER: "player.data_from_server",
		/** Cancellable: No */
		ITEM_TOOLTIP: "item.tooltip",
		JEI_SUBTYPES: "jei.subtypes",
		JEI_HIDE_ITEMS: "jei.hide.items",
		JEI_HIDE_FLUIDS: "jei.hide.fluids",
		JEI_HIDE_CUSTOM: "jei.hide.custom",
		JEI_YEET_CATEGORIES: "jei.yeet.categories",
		JEI_YEET_RECIPES: "jei.yeet.recipes",
		JEI_ADD_ITEMS: "jei.add.items",
		JEI_ADD_FLUIDS: "jei.add.fluids",
		JEI_INFORMATION: "jei.information",
	},
}

let car_removals = [
	"car:backmix_reactor",
	"car:blastfurnace",
	"car:bio_diesel_bucket",
	"car:methanol_bucket",
	"car:cable_insulator",
	"car:cable",
	"car:canola",
	"car:canola_cake",
	"car:canola_methanol_mix_bucket",
	"car:canola_oil_bucket",
	"car:canola_oil",
	"car:canola_seeds",
	"car:crank",
	"car:dynamo",
	"car:fluid_extractor",
	"car:fluid_pipe",
	"car:generator",
	"car:glycerin_bucket",
	"car:oilmill",
	"car:split_tank",
	Item.of("ceramics:clay_bucket", {fluid:"car:canola_oil"}),
	Item.of("ceramics:clay_bucket", {fluid:"car:canola_methanol_mix"}),
	Item.of("ceramics:clay_bucket", {fluid:"car:bio_diesel"}),
	Item.of("ceramics:clay_bucket", {fluid:"car:glycerin"}),
	Item.of("ceramics:clay_bucket", {fluid:"car:methanol"}),
	//"car:tank",
]

/**@global */
global.removals = {
	car: {
		input: car_removals,
		output: car_removals,
		fluids: [
			"car:bio_diesel",
			"car:bio_diesel_flowing",
			"car:canola_methanol_mix",
			"car:canola_methanol_mix_flowing",
			"car:canola_oil",
			"car:canola_oil_flowing",
			"car:glycerin",
			"car:glycerin_flowing",
			"car:methanol",
			"car:methanol_flowing",
		]
	}
}