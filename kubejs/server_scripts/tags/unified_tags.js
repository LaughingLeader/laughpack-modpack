// priority: 80

let tags = [
	{
		// Additional blocks that can be used to build a conduit frame.
		Tag: "forge:supports_conduit",
		Entries: {
			"minecraft": [
				"minecraft:prismarine_bricks"
			],
			"quark": [
				"quark:elder_prismarine",
				"quark:elder_prismarine_slab",
				"quark:elder_prismarine_stairs",
				"quark:elder_prismarine_wall",
				"quark:elder_prismarine_bricks",
				"quark:elder_prismarine_bricks_slab",
				"quark:elder_prismarine_bricks_stairs",
				"quark:dark_elder_prismarine",
				"quark:dark_elder_prismarine_slab",
				"quark:dark_elder_prismarine_stairs",
				"quark:dark_prismarine_vertical_slab",
				"quark:prismarine_vertical_slab",
				"quark:prismarine_brick_vertical_slab",
				"quark:elder_prismarine_vertical_slab",
				"quark:elder_prismarine_bricks_vertical_slab",
				"quark:dark_elder_prismarine_vertical_slab",
			],
			"upgrade_aquatic": [
				"upgrade_aquatic:luminous_prismarine",
				"upgrade_aquatic:luminous_prismarine_stairs",
				"upgrade_aquatic:luminous_prismarine_slab",
				"upgrade_aquatic:luminous_prismarine_vertical_slab",
				"upgrade_aquatic:luminous_elder_prismarine",
				"upgrade_aquatic:luminous_elder_prismarine_stairs",
				"upgrade_aquatic:luminous_elder_prismarine_slab",
				"upgrade_aquatic:luminous_elder_prismarine_vertical_slab",
				"upgrade_aquatic:chiseled_prismarine_coralstone",
				"upgrade_aquatic:prismarine_coralstone_slab",
				"upgrade_aquatic:prismarine_coralstone_stairs",
				"upgrade_aquatic:prismarine_coralstone_wall",
				"upgrade_aquatic:prismarine_coralstone_vertical_slab",
				"upgrade_aquatic:chiseled_elder_prismarine_coralstone",
				"upgrade_aquatic:elder_prismarine_coralstone_slab",
				"upgrade_aquatic:elder_prismarine_coralstone_stairs",
				"upgrade_aquatic:elder_prismarine_coralstone_wall",
				"upgrade_aquatic:elder_prismarine_coralstone_vertical_slab"
			]
		}
	},
	{
		// Missing Stair Tags
		Tag: "minecraft:stairs",
		Entries: {
			"immersiveengineering": [
				"immersiveengineering:stairs_treated_wood_horizontal",
				"immersiveengineering:stairs_treated_wood_vertical",
				"immersiveengineering:stairs_treated_wood_packaged",
				"immersiveengineering:stairs_hempcrete",
				"immersiveengineering:stairs_concrete",
				"immersiveengineering:stairs_concrete_tile",
				"immersiveengineering:stairs_concrete_leaded"
			],
			"immersivepetroleum": [
				"immersivepetroleum:asphalt_stairs"
			],
			"astralsorcery": [
				"astralsorcery:infused_wood_slab",
				"astralsorcery:marble_slab",
				"astralsorcery:black_marble_slab"
			]
		}
	},
	{
		// Missing Stair Tags
		Tag: "minecraft:wooden_stairs",
		Entries: {
			"immersiveengineering": [
				"immersiveengineering:stairs_treated_wood_horizontal",
				"immersiveengineering:stairs_treated_wood_vertical",
				"immersiveengineering:stairs_treated_wood_packaged",
			],
			"astralsorcery": [
				"astralsorcery:infused_wood_slab"
			]
		}
	},
	{
		Tag: "minecraft:slabs",
		Entries: {
			"immersiveengineering": [
				"immersiveengineering:slab_treated_wood_horizontal",
				"immersiveengineering:slab_treated_wood_vertical",
				"immersiveengineering:slab_treated_wood_packaged",
				"immersiveengineering:slab_hempcrete",
				"immersiveengineering:slab_concrete",
				"immersiveengineering:slab_concrete_tile",
				"immersiveengineering:slab_concrete_leaded",
				"immersiveengineering:slab_insulating_glass",
			],
			"immersivepetroleum": [
				"immersivepetroleum:asphalt_slab"
			],
			"astralsorcery": [
				"astralsorcery:infused_wood_slab",
				"astralsorcery:marble_slab",
				"astralsorcery:black_marble_slab"
			]
		}
	},
	{
		Tag: "minecraft:wooden_slabs",
		Entries: {
			"immersiveengineering": [
				"immersiveengineering:slab_treated_wood_horizontal",
				"immersiveengineering:slab_treated_wood_vertical",
				"immersiveengineering:slab_treated_wood_packaged",
			],
			"astralsorcery": [
				"astralsorcery:infused_wood_slab"
			]
		}
	}
]

let addTags = function(e) {
	tags.forEach(data => {
		let tag = e.get(data.Tag)
		if (tag !== undefined) {
			for (let modId in data.Entries) {
				if (modId == "minecraft" || Platform.isLoaded(modId)) {
					tag.add(data.Entries[modId])
				}
			}
		}
	})

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

	// Sandstone Tags

	addTagsFromMod("forge:sandstone/arid", "atmospheric", [
		"atmospheric:arid_sandstone",
		"atmospheric:smooth_arid_sandstone",
		"atmospheric:cut_arid_sandstone",
		"atmospheric:chiseled_arid_sandstone",
		"atmospheric:arid_sandstone_bricks"
	])
	addTagsFromMod("forge:sandstone/red_arid", "atmospheric", [
		"atmospheric:red_arid_sandstone",
		"atmospheric:smooth_red_arid_sandstone",
		"atmospheric:cut_red_arid_sandstone",
		"atmospheric:chiseled_red_arid_sandstone",
		"atmospheric:red_arid_sandstone_bricks"
	])

	if (Platform.isLoaded("biomesoplenty")) {
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
	}

	if (Platform.isLoaded("quark")) {
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
	}

	if (Platform.isLoaded("atum")) {
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
	}
}

onEvent(global.EVENT.SERVER.BLOCK_TAGS, addTags)
onEvent(global.EVENT.SERVER.ITEM_TAGS, addTags)