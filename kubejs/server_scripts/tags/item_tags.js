events.listen("item.tags", (e) => {
	e.add("curios:createplus.goggle_slot", [
		"botania:cosmetic_engineer_goggles",
		"botania:monocle",
		"advancedperipherals:ar_goggles"
	]);
	e.add("forge:dusts/zinc", [
		"kubejs:dust_zinc"
	]);

	//Credit to Valhelsia again for mmost of these
	//https://github.com/ValhelsiaTeam/Valhelsia/blob/master/kubejs/server_scripts/tags/block_tags.js

	// Allows Autumnity snail slime to be used in a few more recipes.
	e.add("forge:slime", "autumnity:snail_slime")
	e.add("forge:slimeballs", "autumnity:snail_slime")
	e.add("forge:storageblocks/slime", "autumnity:snail_slime_block")
	
	// Missing #forge:seed item tags.
	e.get("forge:seeds").add([
		"environmental:cattail_seeds"
	])
	
	// Missing #forge:fruits item tags.
	e.get("forge:fruits").add([
		"atmospheric:passionfruit",
		"autumnity:foul_berries",
		"minecraft:sweet_berries",
		//"neapolitan:white_strawberries"
	])
	
	// Missing #forge:sapling item tags.
	let saplings = [
		"quark:yellow_blossom_sapling",
		"quark:lavender_blossom_sapling",
		"quark:pink_blossom_sapling",
		"quark:blue_blossom_sapling",
		"quark:orange_blossom_sapling",
		"quark:red_blossom_sapling",
		"autumnity:red_maple_sapling",
		"autumnity:orange_maple_sapling",
		"autumnity:yellow_maple_sapling",
		"autumnity:maple_sapling",
		"upgrade_aquatic:river_sapling",
		"atmospheric:rosewood_sapling",
		"atmospheric:morado_sapling",
		"atmospheric:yucca_sapling",
		"atmospheric:kousa_sapling",
		"atmospheric:aspen_sapling",
		"atmospheric:grimwood_sapling",
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
		"druidcraft:darkwood_sapling",
		"druidcraft:elder_sapling",
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
	]
	
	e.get("forge:sapling").add(saplings)
	
	// Missing #minecraft:logs_that_burn item tags.
	e.get("minecraft:logs_that_burn").add([
		"druidcraft:darkwood_log",
		"druidcraft:stripped_darkwood_log",
		"druidcraft:darkwood_wood",
		"druidcraft:stripped_darkwood_wood",
		"druidcraft:elder_log",
		"druidcraft:stripped_elder_log",
		"druidcraft:elder_wood",
		"druidcraft:stripped_elder_wood"
	])
	
	e.get("minecraft:walls").add([
		"bloodmagic:dungeon_brick_wall",
		"bloodmagic:dungeon_polished_wall"
	])
	
	// Missing Stair Tags
	let woodenStairs = [
		//"astralsorcery:infused_wood_stairs",
		"immersiveengineering:stairs_treated_wood_horizontal",
		"immersiveengineering:stairs_treated_wood_vertical",
		"immersiveengineering:stairs_treated_wood_packaged"
	]
	
	e.get("minecraft:stairs").add([
		//"astralsorcery:marble_stairs",
		//"astralsorcery:black_marble_stairs",
		"immersiveengineering:stairs_concrete",
		"immersiveengineering:stairs_concrete_tile",
		"immersiveengineering:stairs_concrete_leaded",
		"immersivepetroleum:asphalt_stairs"
	]).add(woodenStairs)
	
	e.get("minecraft:wooden_stairs").add(woodenStairs)
	
	// Missing Slab Tags
	let woodenSlabs = [
		//"astralsorcery:infused_wood_slab",
		"immersiveengineering:slab_treated_wood_horizontal",
		"immersiveengineering:slab_treated_wood_vertical",
		"immersiveengineering:slab_treated_wood_packaged"
	]
	
	e.get("minecraft:slabs").add([
		"immersivepetroleum:asphalt_slab",
		"immersiveengineering:slab_insulating_glass",
		"immersiveengineering:slab_hempcrete",
		"immersiveengineering:slab_concrete",
		"immersiveengineering:slab_concrete_tile",
		"immersiveengineering:slab_concrete_leaded",
		"astralsorcery:marble_slab",
		"astralsorcery:black_marble_slab",
	]).add(woodenSlabs)
	
	e.get("minecraft:wooden_slabs").add(woodenSlabs)
	
	// Sandstone Tags
	let aridSandstones = [
		"atmospheric:arid_sandstone",
		"atmospheric:smooth_arid_sandstone",
		"atmospheric:cut_arid_sandstone",
		"atmospheric:chiseled_arid_sandstone",
		"atmospheric:arid_sandstone_bricks"
	]
	
	e.get("forge:sandstone/arid").add(aridSandstones)
	
	let redAridSandstones = [
		"atmospheric:red_arid_sandstone",
		"atmospheric:smooth_red_arid_sandstone",
		"atmospheric:cut_red_arid_sandstone",
		"atmospheric:chiseled_red_arid_sandstone",
		"atmospheric:red_arid_sandstone_bricks"
	]
	
	e.get("forge:sandstone/red_arid").add(redAridSandstones)
	
	let orangeSandstones = [
		"biomesoplenty:orange_sandstone",
		"biomesoplenty:smooth_orange_sandstone",
		"biomesoplenty:cut_orange_sandstone",
		"biomesoplenty:chiseled_orange_sandstone"
	]
	
	e.get("forge:sandstone/orange").add(orangeSandstones)
	
	let whiteSandstones = [
		"biomesoplenty:white_sandstone",
		"biomesoplenty:smooth_white_sandstone",
		"biomesoplenty:cut_white_sandstone",
		"biomesoplenty:chiseled_white_sandstone"
	]
	
	e.get("forge:sandstone/white").add(whiteSandstones)
	
	let blackSandstones = [
		"biomesoplenty:black_sandstone",
		"biomesoplenty:smooth_black_sandstone",
		"biomesoplenty:cut_black_sandstone",
		"biomesoplenty:chiseled_black_sandstone"
	]
	
	e.get("forge:sandstone/black").add(blackSandstones)
	
	let soulSandstones = [
		"quark:soul_sandstone",
		"quark:soul_sandstone_bricks",
		"quark:smooth_soul_sandstone",
		"quark:cut_soul_sandstone",
		"quark:chiseled_soul_sandstone"
	]
	
	e.get("forge:sandstone/soul").add(soulSandstones)
	
	e.add("forge:sandstone/colorless", "quark:sandstone_bricks")
	e.add("forge:sandstone/red", "quark:red_sandstone_bricks")
	
	// Industrial Foregoing Enchantment Extractor Blacklist
	let enchantmentExtractorBlacklist = [
		"tetra:modular_sword",
		"tetra:modular_single",
		"tetra:modular_double",
		"tetra:modular_bow",
		"tetra:modular_crossbow",
		"tetra:modular_shield"
	]
	
	//e.get("industrialforegoing:enchantment_extractor_blacklist").add(enchantmentExtractorBlacklist)
	
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
	
	// Supplementaries Throwable Bricks
	e.add("supplementaries:throwable_bricks", "environmental:mud_brick")
	
	// Missing Mud Brick Tags
	e.add("forge:ingots/mud_brick", "environmental:mud_brick")
	e.add("forge:ingots/mud_brick", "biomesoplenty:mud_brick")
	e.add("engineersdecor:brick_ingots", "environmental:mud_brick")
	e.add("engineersdecor:brick_ingots", "biomesoplenty:mud_brick")
	
	// Missing Glass Panes Tags
	e.get("forge:glass_panes").add([
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
	
	// Beacon Payment Items
	let beaconPaymentItems = [
		"aquaculture:neptunium_ingot",
		"botania:manasteel_ingot",
		"botania:terrasteel_ingot",
		"botania:elementium_ingot",
		"create:brass_ingot",
		"create:zinc_ingot",
		"immersiveengineering:ingot_aluminum",
		"immersiveengineering:ingot_silver",
		"immersiveengineering:ingot_nickel",
		"immersiveengineering:ingot_constantan",
		"immersiveengineering:ingot_electrum",
		"twilightforest:ironwood_ingot",
		"twilightforest:fiery_ingot",
		"twilightforest:knightmetal_ingot"
	]
	
	e.get("minecraft:beacon_payment_items").add(beaconPaymentItems)

	// Curios Charms
	e.get("curios:charm").add([
		"twilightforest:charm_of_life_1",
		"twilightforest:charm_of_life_2",
		"twilightforest:charm_of_keeping_1",
		"twilightforest:charm_of_keeping_2",
		"twilightforest:charm_of_keeping_3"
	]);
	
	// Misc Missing Item Tags
	e.add("forge:seeds/cattail", "environmental:cattail_seeds")
	//e.add("forge:fruits/strawberry", "neapolitan:white_strawberries")
	e.add("forge:dusts/obsidian", "create:powdered_obsidian")
	e.add("forge:dragon_scales", "quark:dragon_scale")
})