/**
 * 
 * @typedef EventJS
 * @type {object}
 * @prop {boolean} cancelled
 * @prop {object} class
 * @prop {function} canCancel
 * @prop {function} cancel
 * @prop {function} equals
 * @prop {function} getClass
 * @prop {function} hashCode
 * @prop {function} isCancelled
 * @prop {function} toString
 * @prop {function} wait
 * @prop {function(ScriptType,string,string):boolean} post
 **/

/**
 * 
 * @typedef WorldgenRemoveEventJSForge
 * @type {object}
 * @prop {(ConfiguredFeature<?, ?> feature) => ResourceLocation} getConfiguredFeatureKey
 * @prop {(filter:string[]) => boolean} isInBiomes Checks if the event contains any biomes in the list.
 * @prop {(filter:string[]) => boolean} isNotInBiomes Checks if the event does not contain any biomes in the list.
 * @prop {(decorationType: string = null) => Void} printFeatures Print biome features to the console.
 * @prop {(mobCategory: string = null) => Void} printSpawns Print biome mob spawns to the console.
 * @prop {(decorationType: string = null) => Void} removeAllFeatures
 * @prop {() => Void} removeAllSpawns
 * @prop {(decorationType: string, resourceIds:string[]) => Void} removeFeatureById Remove configured feature types with specific ids.
 * @prop {function} removeOres
 * @prop {function} removeSpawnsByCategory
 * @prop {function} removeSpawnsByID
 **/

/**
 * 
 * @typedef WorldgenAddEventJSForge
 * @type {object}
 * @prop {(filter:string[]) => boolean} isInBiomes Checks if the event contains any biomes in the list.
 * @prop {(filter:string[]) => boolean} isNotInBiomes Checks if the event does not contain any biomes in the list.
 * @prop {function} addLake
 * @prop {function} addOre
 * @prop {function} addSpawn
 **/

/**
 * 
 * @typedef SimpleWorldEventJS
 * @type {object}
 * @prop {() => WorldJS} getWorld
 * @prop {() => ServerJS} getServer
 * @prop {(id:string, sub:string = null) => boolean} post
 **/

/**
 * 
 * @typedef InformationJEIEventJS
 * @type {object}
 * @prop {function} add
 * @prop {function} addForType
 **/

/**
 * 
 * @typedef HideJEIEventJS
 * @type {object}
 * @prop {object} allIngredients
 * @prop {function} getAllIngredients
 * @prop {function} hide
 * @prop {function} hideAll
 **/

/**
 * 
 * @typedef HideCustomJEIEventJS
 * @type {object}
 * @prop {function} get
 * @prop {function} getClass
 **/

/**
 * 
 * @typedef YeetJEICategoriesEvent
 * @type {object}
 * @prop {object} categories
 * @prop {object} categoryIds
 * @prop {function} getCategories
 * @prop {function} getCategoryIds
 * @prop {function} yeet
 * @prop {function} yeetIf
 **/

/**
 * 
 * @typedef AddJEIEventJS
 * @type {object}
 * @prop {function} add
 **/

/**
 * 
 * @typedef CommandEventJS
 * @type {object}
 * @prop {object} exception
 * @prop {ParseResults<CommandSourceStack>} parseResults
 * @prop {ServerJS} server
 * @prop {function} getClass
 * @prop {function} getException
 * @prop {function} getParseResults
 * @prop {function} getServer
 * @prop {function} setException
 * @prop {function} setParseResults
 * 
 **/

/**
 * 
 * @typedef BlockPlaceEventJS
 * @type {object}
 * 
 **/

/**
 * Recipe filter using a json-like structure.
 * @typedef {object.<string, any>} RecipeFilter
 * 
**/

/**
 * Wrapper around recipe type accessors. May have mod integration keys like create.
 * @typedef {object} RecipesAccessor
 * @prop {function(...*):RecipeJS} blasting Recipe Type
 * @prop {function(...*):RecipeJS} campfireCooking Recipe Type
 * @prop {function(...*):RecipeJS} shaped Recipe Type
 * @prop {function(...*):RecipeJS} shapeless Recipe Type
 * @prop {function(...*):RecipeJS} smelting Recipe Type
 * @prop {function(...*):RecipeJS} smithing Recipe Type
 * @prop {function(...*):RecipeJS} smoking Recipe Type
 * @prop {function(...*):RecipeJS} stonecutting Recipe Type
 * @prop {function(...*):RecipeJS} custom Allows any other modded recipe types.
 * @prop {function(...*):RecipeJS} create Create mod recipe types.
 * 
**/

/**
 * @typedef RecipeEventJS
 * @type {object}
 * @prop {RecipesAccessor} recipes
 * @prop {undefined} itemErrors
 * @prop {undefined} recipeFunction
 * @prop {function(RecipeJS,RecipeTypeJS,ListJS):RecipeJS} addRecipe
 * @prop {function(RecipeFilter):RecipeFilter} customFilter
 * @prop {function(RecipeFilter):number} countRecipes
 * @prop {function(RecipeFilter):number} remove
 * @prop {function(RecipeFilter,function):Void} forEachRecipe
 * @prop {function(RecipeFilter,function):Void} forEachRecipeAsync
 * @prop {function(...*):RecipeJS} blasting Recipe Type
 * @prop {function(...*):RecipeJS} campfireCooking Recipe Type
 * @prop {function(...*):RecipeJS} shaped Recipe Type
 * @prop {function(...*):RecipeJS} shapeless Recipe Type
 * @prop {function(...*):RecipeJS} smelting Recipe Type
 * @prop {function(...*):RecipeJS} smithing Recipe Type
 * @prop {function(...*):RecipeJS} smoking Recipe Type
 * @prop {function(...*):RecipeJS} stonecutting Recipe Type
 * @prop {function(...*):RecipeJS} custom Allows any other modded recipe types.
 * @prop {function} getBlasting
 * @prop {function} getCampfireCooking
 * @prop {function} getRecipeFunction
 * @prop {function} getRecipes
 * @prop {function} getShaped
 * @prop {function} getShapeless
 * @prop {function} getSmelting
 * @prop {function} getSmithing
 * @prop {function} getSmoking
 * @prop {function} getStonecutting
 * @prop {function} printExamples
 * @prop {function} printTypes
 * @prop {function} replaceInput
 * @prop {function} replaceOutput
 * @prop {function} setItemErrors
 * @prop {function} stage
 * 
**/

/**
 * @template {EventJS} T
 * @arg {string} event KubeJS event name.
 * @arg {(e:T) => Void} callback Function called when a KubeJS event fires.
 * @see {@link STARTUP} {@link SERVER} {@link CLIENT}
 * @readonly
**/
var onEvent = function(event, callback) {}

/**
 * @global
 * @description Global object shared by all scripts.
**/
var global = {}