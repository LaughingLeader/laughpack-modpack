// priority: 1

/** @param {WorldGenAddEventJS} e **/
onEvent("worldgen.add", function(e){
	e.addOre(ore => {
		ore.block = "minecraft:emerald_ore" // Block ID (Use [] syntax for properties)
		ore.spawnsIn.blacklist = false // Inverts spawn whitelist
		ore.spawnsIn.values = [ // List of valid block IDs or tags that the ore can spawn in
		  "#minecraft:base_stone_overworld" // Default behavior - ores spawn in all stone types
		]
		
		ore.biomes.blacklist = true // Inverts biome whitelist
		ore.biomes.values = [ // Biomes this ore can spawn in
		  //"minecraft:plains", // Biome ID
		  "#nether", // OR #category, see list of categories below
		  "#end" // OR #category, see list of categories below
		]
		
		ore.clusterMinSize = 1 // Min blocks per cluster (currently ignored, will be implemented later, it"s always 1)
		ore.clusterMaxSize = 1 // Max blocks per cluster
		ore.clusterCount = 1 // Clusters per chunk
		ore.minHeight = 0 // Min Y ore spawns in
		ore.maxHeight = 20 // Max Y ore spawns in
		ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
		ore.chance = 3 // Spawns the ore every ~4 chunks. You usually combine this with clusterCount = 1 for rare ores
	  })
})