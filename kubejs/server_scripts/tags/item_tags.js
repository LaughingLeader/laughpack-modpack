// priority: 80
onEvent("item.tags", (e) => {
	let loadedTags = {}

	/**
	 * 
	 * @param {string} targetTag 
	 * @param {string} modId 
	 * @param {string[]} modTags 
	 */
	 let addTagsFromMod = function(targetTag, modId, modTags) {
		if (modId == "minecraft" || Platform.isLoaded(modId)) {
			let tag = loadedTags[targetTag] || e.get(targetTag)
			if (tag !== undefined) {
				loadedTags[targetTag] = tag
				tag.add(modTags)
			}
		}
	}

	e.add("curios:createplus.goggle_slot", [
		"botania:cosmetic_engineer_goggles",
		"botania:monocle",
		"advancedperipherals:ar_goggles"
	]);
	e.add("forge:dusts/zinc", [
		"kubejs:dust_zinc"
	]);
	e.add("forge:dusts", [
		"kubejs:dust_zinc"
	]);

	//Credit to Valhelsia again for most of these
	//https://github.com/ValhelsiaTeam/Valhelsia/blob/master/kubejs/server_scripts/tags/block_tags.js

	if (Platform.isLoaded("autumnity")) {
		// Allows Autumnity snail slime to be used in a few more recipes.
		e.add("forge:slime", "autumnity:snail_slime")
		e.add("forge:slimeballs", "autumnity:snail_slime")
		e.add("forge:storageblocks/slime", "autumnity:snail_slime_block")

		e.get("forge:fruits").add(["autumnity:foul_berries"])
	}

	addTagsFromMod("forge:fruits", "atmospheric", ["atmospheric:passionfruit"])
	
	// Missing #forge:fruits item tags.
	e.get("forge:fruits").add(["minecraft:sweet_berries"])

	addTagsFromMod("forge:dragon_scales", "quark", [
		"quark:dragon_scale"
	])
	addTagsFromMod("forge:sapling", "quark", [
		"quark:yellow_blossom_sapling",
		"quark:lavender_blossom_sapling",
		"quark:pink_blossom_sapling",
		"quark:blue_blossom_sapling",
		"quark:orange_blossom_sapling",
		"quark:red_blossom_sapling",
	])
	addTagsFromMod("forge:sapling", "autumnity", [
		"autumnity:red_maple_sapling",
		"autumnity:orange_maple_sapling",
		"autumnity:yellow_maple_sapling",
		"autumnity:maple_sapling",
	])
	addTagsFromMod("forge:sapling", "upgrade_aquatic", [
		"upgrade_aquatic:river_sapling",
	])
	addTagsFromMod("forge:sapling", "atmospheric", [
		"atmospheric:rosewood_sapling",
		"atmospheric:morado_sapling",
		"atmospheric:yucca_sapling",
		"atmospheric:kousa_sapling",
		"atmospheric:aspen_sapling",
		"atmospheric:grimwood_sapling",
	])

	addTagsFromMod("forge:sapling", "biomesoplenty", [
		"biomesoplenty:origin_sapling",
		"biomesoplenty:flowering_oak_sapling",
		"biomesoplenty:rainbow_birch_sapling",
		"biomesoplenty:yellow_autumn_sapling",
		"biomesoplenty:orange_autumn_sapling",
		"biomesoplenty:maple_sapling",
		"biomesoplenty:fir_sapling",
		"biomesoplenty:redwood_sapling",
		"biomesoplenty:white_cherry_sapling",
		"biomesoplenty:pink_cherry_sapling",
		"biomesoplenty:mahogany_sapling",
		"biomesoplenty:jacaranda_sapling",
		"biomesoplenty:palm_sapling",
		"biomesoplenty:willow_sapling",
		"biomesoplenty:dead_sapling",
		"biomesoplenty:magic_sapling",
		"biomesoplenty:umbran_sapling",
		"biomesoplenty:hellbark_sapling",
	])

	addTagsFromMod("forge:sapling", "druidcraft", [
		"druidcraft:darkwood_sapling",
		"druidcraft:elder_sapling",
	])

	addTagsFromMod("forge:sapling", "twilightforest", [
		"twilightforest:rainboak_sapling",
		"twilightforest:twilight_oak_sapling",
		"twilightforest:canopy_sapling",
		"twilightforest:mangrove_sapling",
		"twilightforest:darkwood_sapling",
		"twilightforest:hollow_oak_sapling",
		"twilightforest:time_sapling",
		"twilightforest:transformation_sapling",
		"twilightforest:mining_sapling",
		"twilightforest:sorting_sapling"
	])

	addTagsFromMod("minecraft:logs_that_burn", "druidcraft", [
		"druidcraft:darkwood_log",
		"druidcraft:stripped_darkwood_log",
		"druidcraft:darkwood_wood",
		"druidcraft:stripped_darkwood_wood",
		"druidcraft:elder_log",
		"druidcraft:stripped_elder_log",
		"druidcraft:elder_wood",
		"druidcraft:stripped_elder_wood"
	])

	addTagsFromMod("minecraft:walls", "bloodmagic", [
		"bloodmagic:dungeon_brick_wall",
		"bloodmagic:dungeon_polished_wall"
	])
	
	if(Platform.isLoaded("tetra") && Platform.isLoaded("industrialforegoing")) {
		// Industrial Foregoing Enchantment Extractor Blacklist
		let enchantmentExtractorBlacklist = [
			"tetra:modular_sword",
			"tetra:modular_single",
			"tetra:modular_double",
			"tetra:modular_bow",
			"tetra:modular_crossbow",
			"tetra:modular_shield"
		]
		
		e.get("industrialforegoing:enchantment_extractor_blacklist").add(enchantmentExtractorBlacklist)
	}

	// Missing Create Crushed Ore Tags (for JAOPCA compatibility in recipes)
	e.add("create:crushed_ores/iron", "create:crushed_iron_ore")
	e.add("create:crushed_ores/gold", "create:crushed_gold_ore")
	e.add("create:crushed_ores/copper", "create:crushed_copper_ore")
	e.add("create:crushed_ores/zinc", "create:crushed_zinc_ore")
	e.add("create:crushed_ores/brass", "create:crushed_brass")
	e.add("create:crushed_ores/osmium", "create:crushed_osmium_ore")
	e.add("create:crushed_ores/silver", "create:crushed_silver_ore")
	e.add("create:crushed_ores/tin", "create:crushed_tin_ore")
	e.add("create:crushed_ores/lead", "create:crushed_lead_ore")
	e.add("create:crushed_ores/quicksilver", "create:crushed_quicksilver_ore")
	e.add("create:crushed_ores/aluminum", "create:crushed_aluminum_ore")
	e.add("create:crushed_ores/bauxite", "create:crushed_aluminum_ore")
	e.add("create:crushed_ores/uranium", "create:crushed_uranium_ore")
	e.add("create:crushed_ores/nickel", "create:crushed_nickel_ore")
	
	if(Platform.isLoaded("supplementaries") && Platform.isLoaded("environmental")) {
		// Supplementaries Throwable Bricks
		e.add("supplementaries:throwable_bricks", "environmental:mud_brick")
	}

	if(Platform.isLoaded("environmental")) {
		// Missing Mud Brick Tags
		e.add("forge:ingots/mud_brick", "environmental:mud_brick")
		addTagsFromMod("engineersdecor:brick_ingots", "engineersdecor", [
			"environmental:mud_brick"
		])

		e.add("forge:seeds", "environmental:cattail_seeds")
		e.add("forge:seeds/cattail", "environmental:cattail_seeds")
	}

	if(Platform.isLoaded("biomesoplenty")) {
		// Missing Mud Brick Tags
		e.add("forge:ingots/mud_brick", "environmental:mud_brick")
		addTagsFromMod("engineersdecor:brick_ingots", "engineersdecor", [
			"biomesoplenty:mud_brick"
		])
	}

	addTagsFromMod("forge:glass_panes", "atum", [
		"atum:white_stained_crystal_glass_pane",
		"atum:orange_stained_crystal_glass_pane",
		"atum:magenta_stained_crystal_glass_pane",
		"atum:light_blue_stained_crystal_glass_pane",
		"atum:yellow_stained_crystal_glass_pane",
		"atum:lime_stained_crystal_glass_pane",
		"atum:pink_stained_crystal_glass_pane",
		"atum:pink_stained_crystal_glass_pane",
		"atum:gray_stained_crystal_glass_pane",
		"atum:light_gray_stained_crystal_glass_pane",
		"atum:cyan_stained_crystal_glass_pane",
		"atum:purple_stained_crystal_glass_pane",
		"atum:blue_stained_crystal_glass_pane",
		"atum:brown_stained_crystal_glass_pane",
		"atum:green_stained_crystal_glass_pane",
		"atum:red_stained_crystal_glass_pane",
		"atum:black_stained_crystal_glass_pane",
		"atum:white_stained_palm_framed_crystal_glass_pane",
		"atum:orange_stained_palm_framed_crystal_glass_pane",
		"atum:magenta_stained_palm_framed_crystal_glass_pane",
		"atum:light_blue_stained_palm_framed_crystal_glass_pane",
		"atum:yellow_stained_palm_framed_crystal_glass_pane",
		"atum:lime_stained_palm_framed_crystal_glass_pane",
		"atum:pink_stained_palm_framed_crystal_glass_pane",
		"atum:pink_stained_palm_framed_crystal_glass_pane",
		"atum:gray_stained_palm_framed_crystal_glass_pane",
		"atum:light_gray_stained_palm_framed_crystal_glass_pane",
		"atum:cyan_stained_palm_framed_crystal_glass_pane",
		"atum:purple_stained_palm_framed_crystal_glass_pane",
		"atum:blue_stained_palm_framed_crystal_glass_pane",
		"atum:brown_stained_palm_framed_crystal_glass_pane",
		"atum:green_stained_palm_framed_crystal_glass_pane",
		"atum:red_stained_palm_framed_crystal_glass_pane",
		"atum:black_stained_palm_framed_crystal_glass_pane",
		"atum:white_stained_deadwood_framed_crystal_glass_pane",
		"atum:orange_stained_deadwood_framed_crystal_glass_pane",
		"atum:magenta_stained_deadwood_framed_crystal_glass_pane",
		"atum:light_blue_stained_deadwood_framed_crystal_glass_pane",
		"atum:yellow_stained_deadwood_framed_crystal_glass_pane",
		"atum:lime_stained_deadwood_framed_crystal_glass_pane",
		"atum:pink_stained_deadwood_framed_crystal_glass_pane",
		"atum:pink_stained_deadwood_framed_crystal_glass_pane",
		"atum:gray_stained_deadwood_framed_crystal_glass_pane",
		"atum:light_gray_stained_deadwood_framed_crystal_glass_pane",
		"atum:cyan_stained_deadwood_framed_crystal_glass_pane",
		"atum:purple_stained_deadwood_framed_crystal_glass_pane",
		"atum:blue_stained_deadwood_framed_crystal_glass_pane",
		"atum:brown_stained_deadwood_framed_crystal_glass_pane",
		"atum:green_stained_deadwood_framed_crystal_glass_pane",
		"atum:red_stained_deadwood_framed_crystal_glass_pane",
		"atum:black_stained_deadwood_framed_crystal_glass_pane"
	])

	addTagsFromMod("minecraft:beacon_payment_items", "immersiveengineering", [
		"immersiveengineering:ingot_aluminum",
		"immersiveengineering:ingot_silver",
		"immersiveengineering:ingot_nickel",
		"immersiveengineering:ingot_constantan",
		"immersiveengineering:ingot_electrum",
	])

	addTagsFromMod("minecraft:beacon_payment_items", "botania", [
		"botania:manasteel_ingot",
		"botania:terrasteel_ingot",
		"botania:elementium_ingot",
	])

	addTagsFromMod("minecraft:beacon_payment_items", "create", [
		"create:brass_ingot",
		"create:zinc_ingot",
	])

	addTagsFromMod("minecraft:beacon_payment_items", "aquaculture", [
		"aquaculture:neptunium_ingot",
	])

	addTagsFromMod("minecraft:beacon_payment_items", "twilightforest", [
		"twilightforest:ironwood_ingot",
		"twilightforest:fiery_ingot",
		"twilightforest:knightmetal_ingot"
	])

	// Curios Charms
	if(Platform.isLoaded("curios")) {
		addTagsFromMod("curios:charm", "twilightforest", [
			"twilightforest:charm_of_life_1",
			"twilightforest:charm_of_life_2",
			"twilightforest:charm_of_keeping_1",
			"twilightforest:charm_of_keeping_2",
			"twilightforest:charm_of_keeping_3"
		])
	}

	e.add("forge:dusts/obsidian", "create:powdered_obsidian")
})