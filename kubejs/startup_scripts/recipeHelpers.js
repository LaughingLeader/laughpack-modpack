// priority: 99

/**
 * Makes an output result chance-based. Typically used for crushing/washing.
 *
 * @callback WithChanceFunction
 * @param {number} chance
 * @returns {RecipeFunction}
 */

/**
 * @typedef RecipeFunction
 * @type {Object}
 * @property {function(number):RecipeFunction} withChance Make the recipe output affected by random chance.
 * @property {function(string):RecipeFunction} id Set the id for the resulting recipe.
 * 
 * @typedef MixingRecipeFunction
 * @type {Object}
 * @property {function():RecipeFunction} heated Requires a Blaze Burner to melt the ingredients.
 * @property {function():RecipeFunction} superHeated Requires a Blaze Burner empowered with a Blaze Cake to melt the ingredients.
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
		 * @return {MixingRecipeFunction & RecipeFunction}
		 */
		mixing: function(output, input) {
			return e.recipes.create.mixing(output, input)
		},
		/**
		 * Milling recipe for the Create mod Millstone.
		 * @param {string|string[]} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeFunction}
		 */
		milling: function(output, input) {
			return e.recipes.create.milling(output, input)
		},
		/**
		 * Crushing recipe for the Create mod Crushing Wheel.
		 * @param {string[]} output The item(s) the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeFunction}
		 */
		crushing: function(output, input) {
			return e.recipes.create.crushing(output, input)
		},
		/**
		 * Washing recipe for the Create mod Encased Fan + Water.
		 * @param {string[]} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeFunction}
		 */
		splashing: function(output, input) {
			//event.recipes.create.splashing([Item.of("mekanism:nugget_copper", 10), Item.of("mekanism:nugget_copper", 5).withChance(0.5)], "create:crushed_copper_ore")
			return e.recipes.create.splashing(output, input)
		},
		/**
		 * Washing recipe for the Create mod Encased Fan + Water, but with bonus outputs at 35% and 10% chances.
		 * @param {string} output The item the recipe creates.
		 * @param {string} input Item ingredient.
		 * @return {RecipeFunction}
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
		 * @return {RecipeFunction}
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
		 * @return {RecipeFunction}
		 */
		shaped: function(output, pattern, patternMap) {
			e.shaped(output, pattern, patternMap)
		}
	}
	return helperTable
}