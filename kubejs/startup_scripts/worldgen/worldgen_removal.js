// priority: 0

let lavender = ["druidcraft:lavender", "minecraft:lavender"]
//Doesn't seem to generate anything, and for some reason these end up under the minecraft namespace
let druidcraft_broken = [
	"minecraft:blueberry_bush",
	//"minecraft:plains_river_elder_tree",
	//"minecraft:forest_elder_tree"
]
let bush_removal = ["terraforged:mystical_fields"]
let biome_feature_removal = [
	{
		biomes: ["terraforged:mystical_fields"],
		features: [
			{
				decoration: "vegetal_decoration",
				ids: [
					"environmental:patch_giant_tall_grass_plains",
					"quark:deferred_feature_vegetal_decoration",
					"minecraft:plains_river_elder_tree",
					//"dynamictrees:dynamic_tree",
				]
			}
		]
	}
]

let dimension_feature_removal = [
	{
		dimension: "minecraft:overworld",
		features: [
			{
				decoration: "surface_structures",
				ids: ["progressiveperipherals:reality_breakthrough_point"]
			}
		]
	}
]

let inspected = {}

onEvent(global.EVENT.STARTUP.WORLDGEN_REMOVE, /** @param {WorldgenRemoveEventJSForge} e **/ e => {
	/* try {
		let t = e.getConfiguredFeatureKey("lavender")
		console.info(`lavender key ? ${t}`)
		t = e.getConfiguredFeatureKey("druidcraft:lavender")
		console.info(`druidcraft lavender ? ${t}`)
	} catch (ex) {
		console.error(ex)
	} */
	//console.info("Removing lavender from biome features.")

	//Removing hardcoded Druidcraft lavender.
	e.removeFeatureById("vegetal_decoration", lavender)
	//Blueberries don't work
	e.removeFeatureById("vegetal_decoration", druidcraft_broken)

	//TODO Figure out how to check what dimension a biome is in.
	let dimension = "minecraft:overworld"
	dimension_feature_removal.forEach(data => {
		if (data.dimension == dimension) {
			data.features.forEach(f => {
				e.removeFeatureById(f.decoration, f.ids)
			})
		}
	})

	biome_feature_removal.forEach(data => {
		if (e.isInBiomes(data.biomes)) {
			console.info(`"Removing features in biomes ${data.biomes.join(";")}"`)
			data.features.forEach(f => {
				console.info(`"${f.decoration} ${f.ids.join(";")}"`)
				e.removeFeatureById(f.decoration, f.ids)
			})
			/* if (!inspected[data.biomes[1]]) {
				console.info("=====FEATURES======")
				e.printFeatures()
				inspected[data.biomes[1]] = true
			} */
		}
	})
})