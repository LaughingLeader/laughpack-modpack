
/**
 * @typedef {Object} ModInfo
 * @property {function():string} getId
 * @property {function():string} getName
 * @property {function():string} getVersion
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
 * @property {boolean} clientEnvironment
 * @property {boolean} developmentEnvironment
 * @property {boolean} fabric
 * @property {boolean} forge
 * @property {object} list
 * @property {object} mcVersion
 * @property {object} modVersion
 * @property {Object.<string, ModInfo>} mods Dictionary of all loaded mods.
 * @property {object} name
 * @property {undefined} info
 * @property {undefined} loaded
 * @property {PlatformIsLoadedFunction} isLoaded Check if a mod is loaded.
 * @property {function} getInfo
 * @property {function} getList
 * @property {function} getMcVersion
 * @property {function} getModVersion
 * @property {function} getMods
 * @property {function} getName
 * @property {function():boolean} isClientEnvironment
 * @property {function():boolean} isDevelopmentEnvironment
 * @property {function():boolean} isFabric
 * @property {function():boolean} isForge
**/

/**
 * @global
 * @type {PlatformWrapper}
**/
var Platform = {}