// priority: 10

onEvent("recipes", e => {
	console.info("===[LaughPack] KubeJS Recipe Tweaks===")

	const disabled_recipes = [
		"immersiveengineering:crafting/plate_aluminum_hammering",
		"immersiveengineering:crafting/plate_constantan_hammering",
		"immersiveengineering:crafting/plate_copper_hammering",
		"immersiveengineering:crafting/plate_electrum_hammering",
		"immersiveengineering:crafting/plate_gold_hammering",
		"immersiveengineering:crafting/plate_iron_hammering",
		"immersiveengineering:crafting/plate_lead_hammering",
		"immersiveengineering:crafting/plate_nickel_hammering",
		"immersiveengineering:crafting/plate_silver_hammering",
		"immersiveengineering:crafting/plate_steel_hammering",
		"immersiveengineering:crafting/plate_uranium_hammering",
		"immersiveengineering:crafting/hammercrushing_aluminum",
		"immersiveengineering:crafting/hammercrushing_ardite",
		"immersiveengineering:crafting/hammercrushing_cobalt",
		"immersiveengineering:crafting/hammercrushing_copper",
		"immersiveengineering:crafting/hammercrushing_gold",
		"immersiveengineering:crafting/hammercrushing_iron",
		"immersiveengineering:crafting/hammercrushing_lead",
		"immersiveengineering:crafting/hammercrushing_nickel",
		"immersiveengineering:crafting/hammercrushing_osmium",
		"immersiveengineering:crafting/hammercrushing_platinum",
		"immersiveengineering:crafting/hammercrushing_silver",
		"immersiveengineering:crafting/hammercrushing_tin",
		"immersiveengineering:crafting/hammercrushing_tungsten",
		"immersiveengineering:crafting/hammercrushing_uranium",
		"immersiveengineering:crafting/hammercrushing_zinc",
		//Removing early game Immersive Engineering power generation
		"immersiveengineering:crafting/waterwheel_segment",
		"immersiveengineering:crafting/waterwheel",
		"immersiveengineering:crafting/watermill",
		"immersiveengineering:blueprint/banner_windmill",
		"immersiveengineering:crafting/windmill",
		"immersiveengineering:crafting/windmill_blade",
		"immersiveengineering:crafting/windmill_sail",
		"immersiveengineering:crafting/hammer",
		//Engineer"s Tools Ore Crushing Hammer is too easy
		"engineerstools:independent/crushing_hammer_recipe",
		"engineerstools:crushing/aluminium_grit_crushing_recipe",
		"engineerstools:crushing/copper_grit_crushing_recipe",
		"engineerstools:crushing/gold_grit_crushing_recipe",
		"engineerstools:crushing/iron_grit_crushing_recipe",
		"engineerstools:crushing/lead_grit_crushing_recipe",
		"engineerstools:crushing/nickel_grit_crushing_recipe",
		"engineerstools:crushing/osmium_grit_crushing_recipe",
		"engineerstools:crushing/silver_grit_crushing_recipe",
		"engineerstools:crushing/tin_grit_crushing_recipe",
		"engineerstools:crushing/uranium_grit_crushing_recipe",
		//Create Washing replacement, since we"re making this output dust instead
		"create:splashing/crushed_iron_ore",
		"create:splashing/crushed_gold_ore",
		"create:splashing/crushed_copper_ore",
		"create:splashing/crushed_zinc_ore",
		//"create:splashing/crushed_brass",
	]
	
	const plates_support = new Map()
	//plates_support.set("#forge:ingots/iron", "immersiveengineering:plate_iron")
	plates_support.set("#forge:ingots/aluminum", "immersiveengineering:plate_aluminum")
	plates_support.set("#forge:ingots/constantan", "immersiveengineering:plate_constantan")
	plates_support.set("#forge:ingots/copper", "immersiveengineering:plate_copper")
	plates_support.set("#forge:ingots/electrum", "immersiveengineering:plate_electrum")
	plates_support.set("#forge:ingots/gold", "immersiveengineering:plate_gold")
	plates_support.set("#forge:ingots/lead", "immersiveengineering:plate_lead")
	plates_support.set("#forge:ingots/nickel", "immersiveengineering:plate_nickel")
	plates_support.set("#forge:ingots/silver", "immersiveengineering:plate_silver")
	plates_support.set("#forge:ingots/steel", "immersiveengineering:plate_steel")
	plates_support.set("#forge:ingots/uranium", "immersiveengineering:plate_uranium")

	disabled_recipes.forEach(remove_id => e.remove({id:remove_id}))
	
	//event.remove({id:"immersiveengineering:crafting/plate_silver_hammering"})

	plates_support.forEach(function(plate, ingot) {
		e.recipes.create.pressing(plate, ingot)
		e.recipes.immersiveengineering.metal_press(plate, ingot, "immersiveengineering:mold_plate")
	})

	let recipe = global.recipeHelpers(e)

	recipe.mixing("1x #forge:dusts/steel", ["#forge:dusts/coal_coke", "#forge:dusts/iron"]).heated()
	recipe.milling("1x #forge:dusts/coal_coke", ["#forge:coal_coke"])
	recipe.milling("9x #forge:dusts/coal_coke", ["#forge:storage_blocks/coal_coke"])
	recipe.crushing(["1x #forge:dusts/coal_coke"], "#forge:coal_coke")
	recipe.crushing(["9x #forge:dusts/coal_coke"], "#forge:storage_blocks/coal_coke")
	
	recipe.crushing(["1x kubejs:dust_zinc"], "#forge:ingots/zinc")
	recipe.smelting("create:zinc_ingot", "#forge:dusts/zinc", "dust_zinc")

	//Replacing nugget output with dust that has to be smelted, but has more chances for bonus dust.
	recipe.splashingWithBonus("#forge:dusts/iron", "create:crushed_iron_ore")
	recipe.splashingWithBonus("#forge:dusts/gold", "create:crushed_gold_ore")
	recipe.splashingWithBonus("#forge:dusts/copper", "create:crushed_copper_ore")
	recipe.splashingWithBonus("#forge:dusts/zinc", "create:crushed_zinc_ore")
	//splashing(["1x #forge:dusts/brass", Item.of("#forge:dusts/brass", 1).withChance(0.35)], "create:splashing/crushed_brass",)

	// Disabling the Crude Blast Furnace
	let restrictedHammer = Item.of("1x immersiveengineering:hammer").withNBT({multiblockInterdiction: ["immersiveengineering:multiblocks/blast_furnace"]})
	recipe.shaped(restrictedHammer,
		[" if", " si", "s  "], {
        s: "#forge:rods/wooden",
        i: "#forge:ingots/iron",
        f: "#forge:string"
    })
	
	//console.info("[LaughPack] Plate Recipes")
	//"type:": "minecraft:crafting_shapeless"
	// event.forEachRecipeAsync({"id": "immersiveengineering:crafting/plate.*_hammering"}, recipe => {
	// 	//console.info(`${recipe} type(${recipe.type}) ingredients(${recipe.inputItems})`)
	// 	console.info(`${recipe} ingredients(${recipe.inputItems}) id(${recipe.id})`)
	// })
})