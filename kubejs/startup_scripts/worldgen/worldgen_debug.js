let inspected = {
	add: false,
	remove: false
}

/** @param {WorldGenRemoveEventJS} e **/
onEvent("worldgen.add", function(e){
	if (!inspected.add) {
		global.inspect(e, true)
		inspected.add = true
	}
	
	// e.addFeature("GenerationStage.Decoration.VEGETAL_DECORATION", [
	// 	"botania:mystical_flowers"
	// ])
})

/** @param {WorldGenRemoveEventJS} e **/
onEvent("worldgen.remove", function(e){
	if (!inspected.remove) {
		global.inspect(e, true)
		inspected.remove = true
	}
})