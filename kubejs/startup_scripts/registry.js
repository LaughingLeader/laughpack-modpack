// priority: 0

onEvent("item.registry", event => {
	// Register new items here
	let items = [
        "bark_fiber",
        "paper_vellum",
        "dust_zinc",
        "worldedit_wand",
        "wood_converter"
    ];

	items.forEach((item) => {
        event.create(item).group("kubejs").texture(`kubejs:item/${item}`)
    });
})

onEvent("block.registry", event => {
	// Register new blocks here
	// event.create("example_block").material("wood").hardness(1.0).displayName("Example Block")
})