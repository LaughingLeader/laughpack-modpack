onEvent(global.EVENT.SERVER.BLOCK_TAGS, e => {
	if (Platform.isLoaded("car")) {
		let road_blocks = []
		if (Platform.isLoaded("immersivepetroleum")) {
			road_blocks.push([
				"immersivepetroleum:asphalt",
				"immersivepetroleum:asphalt_slab",
				"immersivepetroleum:asphalt_stairs",
			])
		}
		if (Platform.isLoaded("chisel")) {
			road_blocks.push([
				"chisel:andesite/road",
				"chisel:basalt/road",
				"chisel:bricks/road",
				"chisel:charcoal/road",
				"chisel:coal/road",
				"chisel:cobblestone/road",
				"chisel:concrete/black/road",
				"chisel:concrete/blue/road",
				"chisel:concrete/brown/road",
				"chisel:concrete/cyan/road",
				"chisel:concrete/gray/road",
				"chisel:concrete/green/road",
				"chisel:concrete/light_blue/road",
				"chisel:concrete/light_gray/road",
				"chisel:concrete/lime/road",
				"chisel:concrete/magenta/road",
				"chisel:concrete/orange/road",
				"chisel:concrete/pink/road",
				"chisel:concrete/purple/road",
				"chisel:concrete/red/road",
				"chisel:concrete/white/road",
				"chisel:concrete/yellow/road",
				"chisel:diorite/road",
				"chisel:end_stone/road",
				"chisel:glowstone/road",
				"chisel:granite/road",
				"chisel:limestone/road",
				"chisel:marble/road",
				"chisel:mossy_cobblestone/road",
				"chisel:prismarine/road",
				"chisel:purpur/road",
				"chisel:quartz/road",
				"chisel:red_sandstone/road",
				"chisel:redstone/road",
				"chisel:sandstone/road",
				"chisel:stone_bricks/road",
				"chisel:terracotta/road"
			])
		}
		if (road_blocks.length > 0) {
			e.add("car:drivable_blocks", road_blocks)
		}
	}
})

onEvent(global.EVENT.SERVER.FLUID_TAGS, e => {
	if (Platform.isLoaded("car")) {
		// Immersive Petroleum support for Ultimate Cars
		let fuel = [
			"minecraft:lava",
		]
		if (Platform.isLoaded("immersivepetroleum")) {
			fuel.push([
				"immersivepetroleum:diesel",
				"immersivepetroleum:diesel_sulfur",
				"immersivepetroleum:oil",
				"immersivepetroleum:gasoline",
			])
		}
		if (Platform.isLoaded("immersiveengineering")) {
			fuel.push("immersiveengineering:biodiesel")
			fuel.push("immersiveengineering:creosote")
		}
		e.add("car:gas_station", fuel)
		e.add("car:generator", fuel)
	}
})