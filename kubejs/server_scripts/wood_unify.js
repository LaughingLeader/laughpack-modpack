
let updateWood = function(event){
	
	//Removing all plank recipes
	event.remove({type: "crafting_shapeless", output: "#minecraft:planks"})
	event.remove({type: "immersiveengineering:sawmill", result: {item: "#minecraft:planks"}})
	event.remove({type: "create:cutting", output: "#minecraft:planks"})

	/**
	 * @param {string} namespace The mod namespace.
	 * @param {string} name Base block name (oak).
	 * @param {string} tag Oredict tag
	 */
	 const WoodEntry = function(namespace, name, tag) {
		let entry = {
			Log: `${namespace}:${name}_log`,
			Plank: `${namespace}:${name}_planks`,
			Wood: `${namespace}:${name}_wood`,
			StrippedWood: `${namespace}:stripped_${name}_wood`,
			StrippedLog: `${namespace}:stripped_${name}_log`,
			Tag: tag
		}
		return entry
	}


	const all_wood = [
		{Mod:"minecraft", Entries:[
			{Log:"minecraft:oak_log", Plank:"minecraft:oak_planks", Wood:"minecraft:oak_wood", StrippedWood:"minecraft:stripped_oak_wood", StrippedLog:"minecraft:stripped_oak_log", Tag:"#minecraft:oak_logs"},
			{Log:"minecraft:spruce_log", Plank:"minecraft:spruce_planks", Wood:"minecraft:spruce_wood", StrippedWood:"minecraft:stripped_spruce_wood", StrippedLog:"minecraft:stripped_spruce_log", Tag:"#minecraft:spruce_logs"},
			{Log:"minecraft:birch_log", Plank:"minecraft:birch_planks", Wood:"minecraft:birch_wood", StrippedWood:"minecraft:stripped_birch_wood", StrippedLog:"minecraft:stripped_birch_log", Tag:"#minecraft:birch_logs"},
			{Log:"minecraft:jungle_log", Plank:"minecraft:jungle_planks", Wood:"minecraft:jungle_wood", StrippedWood:"minecraft:stripped_jungle_wood", StrippedLog:"minecraft:stripped_jungle_log", Tag:"#minecraft:jungle_logs"},
			{Log:"minecraft:acacia_log", Plank:"minecraft:acacia_planks", Wood:"minecraft:acacia_wood", StrippedWood:"minecraft:stripped_acacia_wood", StrippedLog:"minecraft:stripped_acacia_log", Tag:"#minecraft:acacia_logs"},
			{Log:"minecraft:dark_oak_log", Plank:"minecraft:dark_oak_planks", Wood:"minecraft:dark_oak_wood", StrippedWood:"minecraft:stripped_dark_oak_wood", StrippedLog:"minecraft:stripped_dark_oak_log", Tag:"#minecraft:dark_oak_logs"},
			{Log:"minecraft:crimson_stem", Plank:"minecraft:crimson_planks", Wood:"minecraft:crimson_hyphae", StrippedWood:"minecraft:stripped_crimson_hyphae", StrippedLog:"minecraft:stripped_crimson_stem", Tag:"#minecraft:crimson_stems"},
			{Log:"minecraft:warped_stem", Plank:"minecraft:warped_planks", Wood:"minecraft:warped_hyphae", StrippedWood:"minecraft:stripped_warped_hyphae", StrippedLog:"minecraft:stripped_warped_stem", Tag:"#minecraft:warped_stems"},
		]},
		{Mod:"atum", Entries:[
			{Log:"atum:palm_log", Plank:"atum:palm_planks", Wood:"atum:palm_wood", StrippedWood:"atum:stripped_palm_wood", StrippedLog:"atum:stripped_palm_log", Tag:"#forge:palm_logs"},
			{Log:"atum:deadwood_log", Plank:"atum:deadwood_planks", Wood:"atum:deadwood_wood", StrippedWood:"atum:stripped_deadwood_wood", StrippedLog:"atum:stripped_deadwood_log", Tag:"#forge:deadwood_logs"},
		]},
		{Mod:"betterendforge", Entries:[
			{Log:"betterendforge:lucernia_log", Plank:"betterendforge:lucernia_planks", Wood:"betterendforge:lucernia_bark", StrippedWood:"betterendforge:lucernia_stripped_bark", StrippedLog:"betterendforge:lucernia_stripped_log", Tag:"#betterendforge:lucernia_logs"},
			{Log:"betterendforge:mossy_glowshroom_log", Plank:"betterendforge:mossy_glowshroom_planks", Wood:"betterendforge:mossy_glowshroom_bark", StrippedWood:"betterendforge:mossy_glowshroom_stripped_bark", StrippedLog:"betterendforge:mossy_glowshroom_stripped_log", Tag:"#betterendforge:mossy_glowshroom_logs"},
			{Log:"betterendforge:lacugrove_log", Plank:"betterendforge:lacugrove_planks", Wood:"betterendforge:lacugrove_bark", StrippedWood:"betterendforge:lacugrove_stripped_bark", StrippedLog:"betterendforge:lacugrove_stripped_log", Tag:"#betterendforge:lacugrove_logs"},
			{Log:"betterendforge:end_lotus_log", Plank:"betterendforge:end_lotus_planks", Wood:"betterendforge:end_lotus_bark", StrippedWood:"betterendforge:end_lotus_stripped_bark", StrippedLog:"betterendforge:end_lotus_stripped_log", Tag:"#betterendforge:end_lotus_logs"},
			{Log:"betterendforge:pythadendron_log", Plank:"betterendforge:pythadendron_planks", Wood:"betterendforge:pythadendron_bark", StrippedWood:"betterendforge:pythadendron_stripped_bark", StrippedLog:"betterendforge:pythadendron_stripped_log", Tag:"#betterendforge:pythadendron_logs"},
			{Log:"betterendforge:dragon_tree_log", Plank:"betterendforge:dragon_tree_planks", Wood:"betterendforge:dragon_tree_bark", StrippedWood:"betterendforge:dragon_tree_stripped_bark", StrippedLog:"betterendforge:dragon_tree_stripped_log", Tag:"#betterendforge:dragon_tree_logs"},
			{Log:"betterendforge:tenanea_log", Plank:"betterendforge:tenanea_planks", Wood:"betterendforge:tenanea_bark", StrippedWood:"betterendforge:tenanea_stripped_bark", StrippedLog:"betterendforge:tenanea_stripped_log", Tag:"#betterendforge:tenanea_logs"},
			{Log:"betterendforge:helix_tree_log", Plank:"betterendforge:helix_tree_planks", Wood:"betterendforge:helix_tree_bark", StrippedWood:"betterendforge:helix_tree_stripped_bark", StrippedLog:"betterendforge:helix_tree_stripped_log", Tag:"#betterendforge:helix_tree_logs"},
			{Log:"betterendforge:umbrella_tree_log", Plank:"betterendforge:umbrella_tree_planks", Wood:"betterendforge:umbrella_tree_bark", StrippedWood:"betterendforge:umbrella_tree_stripped_bark", StrippedLog:"betterendforge:umbrella_tree_stripped_log", Tag:"#betterendforge:umbrella_tree_logs"},
			{Log:"betterendforge:jellyshroom_log", Plank:"betterendforge:jellyshroom_planks", Wood:"betterendforge:jellyshroom_bark", StrippedWood:"betterendforge:jellyshroom_stripped_bark", StrippedLog:"betterendforge:jellyshroom_stripped_log", Tag:"#betterendforge:jellyshroom_log"}
		]},
		{Mod:"ars_nouveau", Entries:[
			{Log:"ars_nouveau:blue_archwood_log", Plank:"ars_nouveau:archwood_planks", Wood:"ars_nouveau:blue_archwood_wood", StrippedWood:"ars_nouveau:stripped_blue_archwood_wood", StrippedLog:"ars_nouveau:stripped_blue_archwood_log", Tag:"#betterendforge:jellyshroom_logs"},
			{Log:"ars_nouveau:green_archwood_log", Plank:"ars_nouveau:archwood_planks", Wood:"ars_nouveau:green_archwood_wood", StrippedWood:"ars_nouveau:stripped_green_archwood_wood", StrippedLog:"ars_nouveau:stripped_green_archwood_log", Tag:"#minecraft:logs/archwood"},
			{Log:"ars_nouveau:red_archwood_log", Plank:"ars_nouveau:archwood_planks", Wood:"ars_nouveau:red_archwood_wood", StrippedWood:"ars_nouveau:stripped_red_archwood_wood", StrippedLog:"ars_nouveau:stripped_red_archwood_log", Tag:"#minecraft:logs/archwood"},
			{Log:"ars_nouveau:purple_archwood_log", Plank:"ars_nouveau:archwood_planks", Wood:"ars_nouveau:purple_archwood_wood", StrippedWood:"ars_nouveau:stripped_purple_archwood_wood", StrippedLog:"ars_nouveau:stripped_purple_archwood_log", Tag:"#minecraft:logs/archwood"},
		]},
		{Mod:"atmospheric", Entries:[
			WoodEntry("atmospheric", "aspen", "#atmospheric:aspen_logs"),
			//Doesn't have stripped versions or planks. The tag was added via script.
			{ Log: "atmospheric:crustose_log", Wood: "atmospheric:crustose_wood", Plank: "atmospheric:aspen_planks", StrippedLog: "atmospheric:stripped_aspen_log", StrippedWood: "atmospheric:stripped_aspen_wood", Tag: "#atmospheric:aspen_logs"},
			{ Log: "atmospheric:grimwood_log", Wood: "atmospheric:grimwood", Plank: "atmospheric:grimwood_planks", StrippedLog: "atmospheric:stripped_grimwood_log", Tag: "#atmospheric:grimwood_logs"},
			WoodEntry("atmospheric", "kousa", "#atmospheric:kousa_logs"),
			WoodEntry("atmospheric", "morado", "#atmospheric:morado_logs"),
			//WoodEntry("atmospheric", "rosewood", "#atmospheric:rosewood_logs"),
			{ Log: "atmospheric:rosewood_log", Wood: "atmospheric:rosewood", Plank: "atmospheric:rosewood_planks", StrippedWood:"atmospheric:stripped_rosewood", StrippedLog: "atmospheric:stripped_rosewood_log", Tag: "#atmospheric:rosewood_logs"},
			{ Log: "atmospheric:watchful_aspen_log", Wood: "atmospheric:watchful_aspen_wood", Plank: "atmospheric:aspen_planks", StrippedLog: "atmospheric:stripped_aspen_log", StrippedWood: "atmospheric:stripped_aspen_wood", Tag: "#atmospheric:aspen_logs"},
			WoodEntry("atmospheric", "yucca", "#atmospheric:yucca_logs"),
		]},
		{Mod:"autumnity", Entries:[
			//{ Log: "autumnity:maple_log", Wood: "autumnity:maple_wood", Tag: "#autumnity:maple_logs"},
			WoodEntry("autumnity", "maple", "#autumnity:maple_logs"),
			{ Log: "autumnity:sappy_maple_log", Wood: "autumnity:sappy_maple_wood", Tag: "#autumnity:maple_logs"},
		]},
		{Mod:"bayou_blues", Entries:[
			WoodEntry("bayou_blues", "cypress", "#bayou_blues:cypress_logs"),
		]},
		{Mod:"biomesoplenty", Entries:[
			WoodEntry("biomesoplenty", "cherry", "#biomesoplenty:cherry_logs"),
			WoodEntry("biomesoplenty", "dead", "#biomesoplenty:dead_logs"),
			WoodEntry("biomesoplenty", "fir", "#biomesoplenty:fir_logs"),
			WoodEntry("biomesoplenty", "hellbark", "#biomesoplenty:hellbark_logs"),
			WoodEntry("biomesoplenty", "jacaranda", "#biomesoplenty:jacaranda_logs"),
			WoodEntry("biomesoplenty", "magic", "#biomesoplenty:magic_logs"),
			WoodEntry("biomesoplenty", "mahogany", "#biomesoplenty:mahogany_logs"),
			WoodEntry("biomesoplenty", "palm", "#biomesoplenty:palm_logs"),
			WoodEntry("biomesoplenty", "redwood", "#biomesoplenty:redwood_logs"),
			WoodEntry("biomesoplenty", "umbran", "#biomesoplenty:umbran_logs"),
			WoodEntry("biomesoplenty", "willow", "#biomesoplenty:willow_logs"),
		]},
		{Mod:"druidcraft", Entries:[
			WoodEntry("druidcraft", "darkwood", "#druidcraft:darkwood_logs"),
			WoodEntry("druidcraft", "elder", "#druidcraft:elder_logs"),
		]},
		{Mod:"environmental", Entries:[
			WoodEntry("environmental", "cherry", "#environmental:cherry_logs"),
			WoodEntry("environmental", "willow", "#environmental:willow_logs"),
			WoodEntry("environmental", "wisteria", "#environmental:wisteria_logs"),
		]},
		{Mod:"naturesaura", Entries:[
			{Log: "naturesaura:ancient_log", Plank: "naturesaura:ancient_planks", Wood: "naturesaura:ancient_bark"},
		]},
		{Mod:"upgrade_aquatic", Entries:[
			{ Log: "upgrade_aquatic:driftwood_log", Plank: "upgrade_aquatic:driftwood_planks", Wood: "upgrade_aquatic:driftwood", StrippedLog: "upgrade_aquatic:stripped_driftwood_log", StrippedWood: "upgrade_aquatic:stripped_driftwood", Tag: "#upgrade_aquatic:driftwood_logs"},
			WoodEntry("upgrade_aquatic", "river", "#upgrade_aquatic:river_logs"),
		]},
		{Mod:"twilightforest", Entries:[
			WoodEntry("twilightforest", "canopy", "#twilightforest:canopy_logs"),
			//{Log: "twilightforest:cinder_log", Wood: "twilightforest:cinder_wood"},
			WoodEntry("twilightforest", "dark", "#twilightforest:dark_logs"),
			{Log: "twilightforest:giant_log", Plank:"minecraft:oak_planks", Amount:64},
			WoodEntry("twilightforest", "mangrove", "#twilightforest:mangrove_logs"),
			WoodEntry("twilightforest", "time", "#twilightforest:time_logs"),
			WoodEntry("twilightforest", "twilight_oak", "#twilightforest:twilight_oak_logs"),
			{Log: "twilightforest:transformation_log", Plank: "twilightforest:trans_planks", Wood: "twilightforest:transformation_wood", StrippedLog: "twilightforest:stripped_transformation_log", StrippedWood: "twilightforest:stripped_transformation_wood", Tag: "#twilightforest:transwood_logs"},
			{Log: "twilightforest:mining_log", Plank: "twilightforest:mine_planks", Wood: "twilightforest:mining_wood", StrippedLog: "twilightforest:stripped_mining_log", StrippedWood: "twilightforest:stripped_mining_wood", Tag: "#twilightforest:mining_logs"},
			{Log: "twilightforest:sorting_log", Plank: "twilightforest:sort_planks", Wood: "twilightforest:sorting_wood", StrippedLog: "twilightforest:stripped_sorting_log", StrippedWood: "twilightforest:stripped_sorting_wood", Tag: "#twilightforest:sortwood_logs"},
		]}
	]

	let addedPlankTags = {}
	
	for (let i = 0; i < all_wood.length; i++) {
		let mod_entry = all_wood[i]
		if (Platform.isLoaded(mod_entry.Mod)) {
			for (let j=0; j < mod_entry.Entries.length; j++) {
				let entry = mod_entry.Entries[j]
		
				if(entry.Plank !== undefined) {
					if(entry.Tag !== undefined && entry.Tag !== "") {
						if(addedPlankTags[entry.Tag] !== entry.Plank) {
							event.shapeless(Item.of(entry.Plank, entry.Amount || 4), entry.Tag)
							addedPlankTags[entry.Tag] = entry.Plank
						}
					} else {
						event.shapeless(Item.of(entry.Plank, entry.Amount || 4), entry.Log)
					}
					if (entry.StrippedLog !== undefined) {
						event.recipes.create.cutting(entry.StrippedLog, entry.Log)
						event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.StrippedLog)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Log, [{ stripping: false, output: "1x immersiveengineering:dust_wood" },{ stripping: true, output: "1x immersiveengineering:dust_wood" }], entry.StrippedLog)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.StrippedLog, [{ stripping: false, output: "immersiveengineering:dust_wood" }])

					} else if (entry.Log !== undefined) {
						event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.Log)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Log, [{stripping: false, output: "1x immersiveengineering:dust_wood" }])
					}
			
					if (entry.StrippedWood !== undefined) {
						event.recipes.create.cutting(entry.StrippedWood, entry.Wood)
						event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.StrippedWood)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Wood, [{ stripping: false, output: "1x immersiveengineering:dust_wood" },{ stripping: true, output: "1x immersiveengineering:dust_wood" }], entry.StrippedWood)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.StrippedWood, [{ stripping: false, output: "immersiveengineering:dust_wood" }])
					} else if (entry.Wood !== undefined) {
						event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.Wood)
						event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Wood, [{stripping: false, output: "1x immersiveengineering:dust_wood" }])
					}
				}
			}
		}
	}
}

onEvent("recipes", event => {
	updateWood(event)
})