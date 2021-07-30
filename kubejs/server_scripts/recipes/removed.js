onEvent(global.EVENT.SERVER.RECIPES,
/** @param {RecipeEventJS & EventJS} e */
e => {
	for(let mod in global.removals) {
		if (Platform.isLoaded(mod)) {
			let data = global.removals[mod]
			data.input.forEach(id => {
				e.remove({input: id})
			})
			data.output.forEach(id => {
				e.remove({output: id})
			})
			if (data.fluids !== undefined) {
				data.fluids.forEach(id => {
					e.remove({output: id})
				})
			}
		}
	}
	//global.inspect(e, true)
})