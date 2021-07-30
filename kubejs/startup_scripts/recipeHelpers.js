// priority: 99

/**
 * Makes an output result chance-based. Typically used for crushing/washing.
 *
 * @callback WithChanceFunction
 * @param {number} chance
 * @returns {RecipeJS}
 */

/**
 * @typedef RecipeJS
 * @type {Object}
 * @property {function(number):RecipeJS} withChance Make the recipe output affected by random chance.
 * @property {function(string):RecipeJS} id Set the id for the resulting recipe.
 * 
 * @typedef MixingRecipeJS
 * @type {Object}
 * @property {function():RecipeJS} heated Requires a Blaze Burner to melt the ingredients.
 * @property {function():RecipeJS} superHeated Requires a Blaze Burner empowered with a Blaze Cake to melt the ingredients.
 */

/**
 * Wraps the helper table around a recipe event.
 * @param {RecipeEventJS} e
 */
global.recipeHelpers = function(e) {
	/** RecipeHelpers */
	let helperTable = {
		/**
		 * Mixing recipe for the Create mod Mixer.
		 * @param {string} output The item the recipe creates.
		 * @param {string[]} input Array of ingredients.
		 * @return {MixingRecipeJS & RecipeJS}
		 */
		mixing: function(output, input) {
			return e.recipes.create.mixing(output, input)
		},
		/**
		 * Milling recipe for the Create mod Millstone.
		 * @param {string|string[]} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeJS}
		 */
		milling: function(output, input) {
			return e.recipes.create.milling(output, input)
		},
		/**
		 * Crushing recipe for the Create mod Crushing Wheel.
		 * @param {string[]} output The item(s) the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeJS}
		 */
		crushing: function(output, input) {
			return e.recipes.create.crushing(output, input)
		},
		/**
		 * Washing recipe for the Create mod Encased Fan + Water.
		 * @param {string[]} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeJS}
		 */
		splashing: function(output, input) {
			//event.recipes.create.splashing([Item.of("mekanism:nugget_copper", 10), Item.of("mekanism:nugget_copper", 5).withChance(0.5)], "create:crushed_copper_ore")
			return e.recipes.create.splashing(output, input)
		},
		/**
		 * Washing recipe for the Create mod Encased Fan + Water, but with bonus outputs at 35% and 10% chances.
		 * @param {string} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeJS}
		 */
		splashingWithBonus: function(output, input) {
			//event.recipes.create.splashing([Item.of("mekanism:nugget_copper", 10), Item.of("mekanism:nugget_copper", 5).withChance(0.5)], "create:crushed_copper_ore")
			return e.recipes.create.splashing([Item.of(output, 1), Item.of(output, 1).withChance(0.35), Item.of(output, 1).withChance(0.10)], input)
		},
		/**
		 * Minecraft smelting/blasting recipe.
		 * @param {string} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @param {string} name Recipe name when creating the output id.
		 * @param {string} xp Optional amount of experience this recipe should grant.
		 * @return {RecipeJS}
		 */
		smelting: function(output, input, name, xp) {
			if (xp != undefined && xp > 0) {
				e.recipes.minecraft.smelting(output, input).xp(xp).id("kubejs:minecraft/smelting/" + name)
				e.recipes.minecraft.blasting(output, input).xp(xp).id("kubejs:minecraft/blasting/" + name)
			} else {
				e.recipes.minecraft.smelting(output, input).id("kubejs:minecraft/smelting/" + name)
				e.recipes.minecraft.blasting(output, input).id("kubejs:minecraft/blasting/" + name)
			}
		},
		/**
		 * Minecraft shaped crafting recipe.
		 * @param {string} output The item the recipe creates.
		 * @param {string[]} pattern 3-rowed pattern, such as ["A A", " B ", "AAA"]. Use a space for an empty square.
		 * @param {Object.<string,string>} patternMap Item definitions for pattern entries, such as A: "#forge:ingots/iron"
		 * @return {RecipeJS}
		 */
		shaped: function(output, pattern, patternMap) {
			e.shaped(output, pattern, patternMap)
		},

		/**
		 * Minecraft shapeless crafting recipe.
		 * @param {string} output The item the recipe creates.
		 * @param {string|string[]} input Single item, or an array of input items.
		 * @return {RecipeJS}
		 */
		shapeless: function(output, input) {
			e.shapeless(output, input)
		},
		/**
		 * Shapeless crafting recipe using Engineer's Tools.
		 * @param {Object} output Resulting item.
		 * @param {Object[]} ingredients Array of objects to use for ingredients.
		 * @param {Object} aspects Damage to a tool.
		 * @return {RecipeJS}
		 */
		crafting_extended_shapeless: function(output, ingredients, aspects) {
			e.custom({
				type: "engineerstools:crafting_extended_shapeless",
				ingredients: ingredients,
				result: output,
				aspects: aspects
			})
		},
		/**
		 * Tries to return an Item.of(id).ignoreNBT(). Falls back to the id if that doesn't pan out.
		 * @param {id} id Ingredient id
		 * @return {IgnoreNBTIngredientJS|ItemStackJS|string}
		 */
		getIgnoredItem: function(id) {
			let item = id
			if (typeof(id) == "string") {
				item = Item.of(id)
			}
			if (item !== null && typeof(fluid) === "object") {
				if (item.ignoreNBT !== null) {
					return item.ignoreNBT()
				}
				return item
			}
			return id
		},
		/**
		 * Tries to return an Fluid.of(id).ignoreNBT(). Falls back to the id if that doesn't pan out.
		 * @param {id} id Ingredient id
		 * @return {IgnoreNBTIngredientJS|FluidStackJS|string}
		 */
		getIgnoredFluid: function(id) {
			let fluid = id
			if (typeof(id) == "string") {
				item = Fluid.of(id)
			}
			if (fluid !== null && typeof(fluid) === "object") {
				if (fluid.ignoreNBT !== null) {
					return fluid.ignoreNBT()
				}
				return fluid
			}
			return id
		}
	}
	return helperTable
}