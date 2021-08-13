
/**
 * @typedef {Object} ModInfo
 * @prop {function():string} getId
 * @prop {function():string} getName
 * @prop {function():string} getVersion
**/

/**
 * Check if a mod is loaded.
 * @callback PlatformIsLoadedFunction
 * @param {string} namespace The mod namespace.
 * @return {boolean}
**/

/**
 * Wrapper around recipe type accessors. May have mod integration keys like create.
 * @typedef {Object} PlatformWrapper
 * @prop {boolean} clientEnvironment
 * @prop {boolean} developmentEnvironment
 * @prop {boolean} fabric
 * @prop {boolean} forge
 * @prop {object} list
 * @prop {object} mcVersion
 * @prop {object} modVersion
 * @prop {Object.<string, ModInfo>} mods Dictionary of all loaded mods.
 * @prop {object} name
 * @prop {undefined} info
 * @prop {undefined} loaded
 * @prop {PlatformIsLoadedFunction} isLoaded Check if a mod is loaded.
 * @prop {function} getInfo
 * @prop {function} getList
 * @prop {function} getMcVersion
 * @prop {function} getModVersion
 * @prop {function} getMods
 * @prop {function} getName
 * @prop {function():boolean} isClientEnvironment
 * @prop {function():boolean} isDevelopmentEnvironment
 * @prop {function():boolean} isFabric
 * @prop {function():boolean} isForge
**/

/**
 * @global
 * @type {PlatformWrapper}
**/
var Platform = {}