// priority: 0

onEvent("item.registry", e => {
	// Register new items here
	let items = [
        "bark_fiber",
        "paper_vellum",
        "dust_zinc",
        "worldedit_wand",
        "block_analyzer",
        "item_analyzer",
        "wood_converter"
    ];

	items.forEach((item) => {
        e.create(item).group("laughpack").texture(`kubejs:item/${item}`)
    });
})

onEvent("block.registry", e => {
    //new ChandelierBlock(Block.Properties.create(Material.MISCELLANEOUS).hardnessAndResistance(0.3F).sound(SoundType.WOOD).notSolid().setLightLevel(state -> 15), false));
    //e.create("chandelier").group("decorative_blocks")
    //e.create("chandelier").group("decorative_blocks").material("miscellaneous").hardnessAndResistance(0.3).sound("wood").notSolid().setLightLevel(15)
	// Register new blocks here
	// event.create("example_block").material("wood").hardness(1.0).displayName("Example Block")
})