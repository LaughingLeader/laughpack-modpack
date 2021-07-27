// priority: 9

onEvent("recipes", event => {
	event.shaped("1x minecraft:book", ["AA ", "AB ", "   "], {
        A: "minecraft:paper",
        B: "kubejs:paper_vellum"
    })
	const multiSmelt = (output, input) => {
        event.smelting(output, input)
        event.blasting(output, input)
    }
	multiSmelt("1x kubejs:paper_vellum", "kubejs:bark_fiber")
	//event.shapeless("2x kubejs:bark_fiber", ["#minecraft:logs", {ingredient: "druidcraft:knife", type: "damage"}])
	event.recipes.create.milling("2x kubejs:bark_fiber", ["#minecraft:logs"])
})