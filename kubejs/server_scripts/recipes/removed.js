onEvent(global.EVENT.SERVER.RECIPES,
/** @param {RecipeEventJS & EventJS} e */
e => {
	try {
		let helper = global.recipeHelpers(e)
		for(let mod in global.removals) {
			if (Platform.isLoaded(mod)) {
				let data = global.removals[mod]
				data.input.forEach(id => {
					e.remove({input: helper.getIgnoredItem(id)})
				})
				data.output.forEach(id => {
					e.remove({output: helper.getIgnoredItem(id)})
				})
				if (data.fluids !== undefined) {
					data.fluids.forEach(id => {
						e.remove({output: helper.getIgnoredFluid(id)})
					})
				}
			}
		}
	} catch (err) {
		console.error("[LaughPack] Failed to remove recipes.")
		console.error(err)
	}

})