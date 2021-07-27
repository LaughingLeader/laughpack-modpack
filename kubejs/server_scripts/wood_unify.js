
onEvent("recipes", event => {
	
	//Removing all plank recipes
	event.remove({output: "#minecraft:planks"})

	/**
	 * @param {string} namespace The mod namespace.
	 * @param {string} name Base block name (oak).
	 * @param {string} tag Oredict tag
	 */
	const WoodEntry = function(namespace, name, tag) {
		let entry = {
			Mod: namespace,
			Log: `${namespace}:${name}_log`,
			Plank: `${namespace}:${name}_planks`,
			Wood: `${namespace}:${name}_wood`,
			StrippedWood: `${namespace}:stripped_${name}_wood`,
			StrippedLog: `${namespace}:stripped_${name}_log`,
			Tag: tag ||= ""
		}
		return entry
	}

	const all_wood = [
		WoodEntry("minecraft", "acacia", "#minecraft:acacia_logs"),
		WoodEntry("minecraft", "birch", "#minecraft:birch_logs"),
		WoodEntry("minecraft", "dark_oak", "#minecraft:dark_oak_logs"),
		WoodEntry("minecraft", "jungle", "#minecraft:jungle_logs"),
		WoodEntry("minecraft", "oak", "#minecraft:oak_logs"),
		WoodEntry("minecraft", "spruce", "#minecraft:spruce_logs"),
		WoodEntry("minecraft", "crimson", "#minecraft:crimson_stems"),
		WoodEntry("minecraft", "warped", "#minecraft:warped_stems"),
		WoodEntry("abundance", "flowering_redbud", "#abundance:redbud_logs"),
		WoodEntry("abundance", "jacaranda", "#abundance:jacaranda_logs"),
		WoodEntry("abundance", "redbud", "#abundance:redbud_logs"),
		WoodEntry("ars_nouveau", "blue_archwood", "#minecraft:logs/archwood"),
		WoodEntry("ars_nouveau", "green_archwood", "#minecraft:logs/archwood"),
		WoodEntry("ars_nouveau", "purple_archwood", "#minecraft:logs/archwood"),
		WoodEntry("ars_nouveau", "red_archwood", "#minecraft:logs/archwood"),
		WoodEntry("atmospheric", "aspen", "#atmospheric:aspen_logs"),
		//Doesn't have stripped versions or planks. The tag was added via script.
		{ Mod:"atmospheric", Log: "atmospheric:crustose_log", Wood: "atmospheric:crustose_wood", Tag: "#atmospheric:crustose_logs"},
		//WoodEntry("atmospheric", "crustose", "#atmospheric:crustose_logs"),
		WoodEntry("atmospheric", "grimwood", "#atmospheric:grimwood_logs"),
		WoodEntry("atmospheric", "kousa", "#atmospheric:kousa_logs"),
		WoodEntry("atmospheric", "morado", "#atmospheric:morado_logs"),
		WoodEntry("atmospheric", "rosewood", "#atmospheric:rosewood_logs"),
		WoodEntry("atmospheric", "watchful_aspen", "#atmospheric:aspen_logs"),
		WoodEntry("atmospheric", "yucca", "#atmospheric:yucca_logs"),
		WoodEntry("atum", "palm", "#forge:palm_logs"),
		WoodEntry("atum", "deadwood", "#forge:deadwood_logs"),
		WoodEntry("autumnity", "maple", "#autumnity:maple_logs"),
		WoodEntry("autumnity", "sappy_maple", "#autumnity:maple_logs"),
		WoodEntry("bayou_blues", "cypress", "#bayou_blues:cypress_logs"),
		WoodEntry("betterendforge", "dragon_tree", "#betterendforge:dragon_tree_logs"),
		WoodEntry("betterendforge", "end_lotus", "#betterendforge:end_lotus_logs"),
		WoodEntry("betterendforge", "helix_tree", "#betterendforge:helix_tree_logs"),
		WoodEntry("betterendforge", "jellyshroom", "#betterendforge:jellyshroom_logs"),
		WoodEntry("betterendforge", "lacugrove", "#betterendforge:lacugrove_logs"),
		WoodEntry("betterendforge", "lucernia", "#betterendforge:lucernia_logs"),
		WoodEntry("betterendforge", "mossy_glowshroom", "#betterendforge:mossy_glowshroom_logs"),
		WoodEntry("betterendforge", "pythadendron", "#betterendforge:pythadendron_logs"),
		WoodEntry("betterendforge", "tenanea", "#betterendforge:tenanea_logs"),
		WoodEntry("betterendforge", "umbrella_tree", "#betterendforge:umbrella_tree_logs"),
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
		WoodEntry("druidcraft", "darkwood", "#druidcraft:darkwood_logs"),
		WoodEntry("druidcraft", "elder", "#druidcraft:elder_logs"),
		WoodEntry("environmental", "cherry", "#environmental:cherry_logs"),
		WoodEntry("environmental", "willow", "#environmental:willow_logs"),
		WoodEntry("environmental", "wisteria", "#environmental:wisteria_logs"),
		WoodEntry("securitycraft", "reinforced_acacia", "#securitycraft:reinforced/acacia_logs"),
		WoodEntry("securitycraft", "reinforced_birch", "#securitycraft:reinforced/birch_logs"),
		WoodEntry("securitycraft", "reinforced_dark_oak", "#securitycraft:reinforced/dark_oak_logs"),
		WoodEntry("securitycraft", "reinforced_jungle", "#securitycraft:reinforced/jungle_logs"),
		WoodEntry("securitycraft", "reinforced_oak", "#securitycraft:reinforced/oak_logs"),
		WoodEntry("securitycraft", "reinforced_spruce", "#securitycraft:reinforced/spruce_logs"),
		WoodEntry("upgrade_aquatic", "driftwood", "#upgrade_aquatic:driftwood_logs"),
		WoodEntry("upgrade_aquatic", "river", "#upgrade_aquatic:river_logs"),
	]
	
	for (let i = 0; i < all_wood.length; i++) {
		let entry = all_wood[i]

		if (!mod.isLoaded(entry.Mod)) {
			console.info(`[LaughPack:wood_unify.js] Mod (${entry.Mod}) is not loaded. Skipping.`)
			continue;
		}
		
		event.shapeless(Item.of(entry.Plank, 2), entry.Tag)

		if(entry.Plank !== undefined) {
			if (entry.StrippedLog !== undefined) {
				event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.StrippedLog)
				event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Log, [{ stripping: false, output: "1x immersiveengineering:dust_wood" },{ stripping: true, output: "1x immersiveengineering:dust_wood" }], entry.StrippedLog)
				event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.StrippedLog, [{ stripping: false, output: "immersiveengineering:dust_wood" }])

				if (entry.Mod !== "minecraft") {
					event.recipes.create.cutting(entry.StrippedLog, entry.Log)
				}
			}
	
			if (entry.StrippedWood !== undefined) {
				event.recipes.create.cutting(Item.of(entry.Plank, 4), entry.StrippedWood)
				event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.Wood, [{ stripping: false, output: "1x immersiveengineering:dust_wood" },{ stripping: true, output: "1x immersiveengineering:dust_wood" }], entry.StrippedWood)
				event.recipes.immersiveengineering.sawmill(Item.of(entry.Plank, 6), entry.StrippedWood, [{ stripping: false, output: "immersiveengineering:dust_wood" }])

				if (entry.Mod !== "minecraft") {
					event.recipes.create.cutting(entry.StrippedWood, entry.Wood)
				}
			}
		}
	}
})