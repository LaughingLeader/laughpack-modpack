// priority: 0
let biome_feature_adding = [
	{
		biomes: ["terraforged:mystical_fields"],
		features: [
			{
				decoration: "vegetal_decoration",
				ids: [
					"laughpack:tree_ars_vexing",
					"laughpack:tree_ars_cascading",
					"laughpack:tree_ars_flourishing",
					"laughpack:tree_ars_blazing"
				],
				random: true,
				chance: 24
			}
		]
	}
]

/** @param {WorldgenAddEventJSForge} e **/
let addFeatures = function(e)
{
	biome_feature_adding.forEach(data => {
		if (e.isInBiomes(data.biomes)) {
			console.info(`"Adding features in biomes ${data.biomes.join(";")}"`)
			data.features.forEach(f => {
				if (f.random == true) {
					if (utils.getRandom().nextInt(f.chance) == 0) {
						let feature = f.ids[utils.getRandom().nextInt(f.ids.length)]
						if (feature !== null) {
							console.info(`"${f.decoration}: ${feature}"`)
							e.addFeature(f.decoration, feature)
						}
					}
				} else {
					console.info(`"${f.decoration}: ${f.ids.join(";")}"`)
					f.ids.forEach(id => {
						e.addFeature(f.decoration, id)
					})
				}
			})
		}
	})
}

//Disabled since addFeature is protected.
//onEvent(global.EVENT.STARTUP.WORLDGEN_ADD, addFeatures)