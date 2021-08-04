
/** @type {Object.<string,PortalDestination>} */
let destinations = {}

/** 
 * @class
 * @param {string} biome
 * @param {number[]} position
 * @param {number[]} rotation
 * @param {string} dimension
**/
let PortalDestination = function(biome, position, rotation, dimension) {
	this.biome = biome
	this.position = position
	this.rotation = rotation
	this.id = biome.substring(biome.indexOf(":")+1)
	destinations[this.id] = this
	if (dimension !== undefined) {
		this.dimension = dimension
	} else {
		this.dimension = "minecraft:overworld"
	}
}

/**
 * Gets a string for teleport command usage.
 * @param {string} username
 * @returns {string}
**/
PortalDestination.prototype.getTeleportCommand = function(username) {
	//return `/tp ${username} ${this.position.join(" ")} ${this.rotation.join(" ")}`
	return `/execute in ${this.dimension} run tp ${username} ${this.position.join(" ")} ${this.rotation.join(" ")}`
};

let plains = new PortalDestination("minecraft:plains", [-2640.02, 85, 144.62], [326.84, 8.7])
let desert = new PortalDestination("minecraft:desert", [-3442.49, 95, 3277.01], [-63.45, 16.05])
let bryce = new PortalDestination("terraforged:bryce", [-3483.54, 88, 3139.94], [0.44, 7.2])
let voidSpawn = new PortalDestination("minecraft:void", [0.5, 104.0, -127.0], [1.0, 2.0], "laughpack:void")

/** 
 * @this {CommandSource}
 * @param {ServerJS} server
 * @param {ServerPlayerEntity} player
**/
global.customCommands.tpbiome = function (server, player, id) {
	if (id !== undefined) {
		let dest = destinations[id]
		if (dest !== undefined) {
			let username = this.func_197037_c()
			server.runCommandSilent(dest.getTeleportCommand(username))
		}
	}
}

/** @type {Object.<number,Object.<number, Object.<number, PortalDestination>>>} */
let portalButtons = {}
/**
 * Links up a physical button with a portal destination.
 * @param {number} x 
 * @param {number} y 
 * @param {number} z 
 * @param {PortalDestination} portal 
 */
let addButton = function(x,y,z, portal)
{
	if (portalButtons[y] === undefined) {
		portalButtons[y] = {}
	}
	if (portalButtons[y][x] === undefined) {
		portalButtons[y][x] = {}
	}
	portalButtons[y][x][z] = portal
}
addButton(4,104,-117, plains)
addButton(3,104,-117, desert)
addButton(2,104,-117, bryce)

onEvent("block.right_click", e => {
	if (e.player.OP && e.block.id.indexOf("button") > -1) {
		let server = utils.getServer()
		let positionText = `${e.block.x},${e.block.y},${e.block.z}`
		let commandText = Text.of([
			Text.yellow("Position: "), 
			Text.green(`[${positionText}]`).click(`copy:${positionText}`).hover(Text.translate("chat.copy.click")),
		])
		server.tell(commandText)
	}
	let ylayer = portalButtons[e.block.y]
	if (ylayer && e.block.id.indexOf("button") > -1) {
		let xlayer = ylayer[e.block.x]
		if (xlayer) {
			let portal = xlayer[e.block.z]
			if (portal) {
				let username = e.player.name
				let server = utils.getServer()
				server.runCommandSilent(portal.getTeleportCommand(username))
			}
		}
	}
})