onEvent("recipes",
/** @param {RecipeEventJS & EventJS} e */
e => {
	global.removals.forEach(mod => {
		if (Platform.isLoaded(mod)) {
			mod.input.forEach(item => {
				e.remove({input: item})
			})
			mod.output.forEach(item => {
				e.remove({output: item})
			})
		}
	})
	//global.inspect(e, true)
})