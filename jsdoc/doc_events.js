/**
 * 
 * @typedef EventJS
 * @type {Object}
 * @property {boolean} cancelled
 * @property {Object} class
 * @property {function} canCancel
 * @property {function} cancel
 * @property {function} equals
 * @property {function} getClass
 * @property {function} hashCode
 * @property {function} isCancelled
 * @property {function} toString
 * @property {function} wait
 * @property {function(ScriptType,string,string):boolean} post
 * 
 * 
 * @typedef AddJEISubtypesEventJS
 * @type {Object}
 * @property {function} registerInterpreter
 * @property {function} useNBT
 * @property {function} useNBTKey
 * 
 * 
 * @typedef InformationJEIEventJS
 * @type {Object}
 * @property {function} add
 * @property {function} addForType
 * 
 * 
 * @typedef HideJEIEventJS
 * @type {Object}
 * @property {Object} allIngredients
 * @property {function} getAllIngredients
 * @property {function} hide
 * @property {function} hideAll
 * @property {function} notify
 * @property {function} notifyAll
 * 
 * 
 * @typedef HideCustomJEIEventJS
 * @type {Object}
 * @property {function} get
 * @property {function} getClass
 * @property {function} notify
 * @property {function} notifyAll
 * 
 * 
 * @typedef YeetJEICategoriesEvent
 * @type {Object}
 * @property {Object} categories
 * @property {Object} categoryIds
 * @property {function} getCategories
 * @property {function} getCategoryIds
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} yeet
 * @property {function} yeetIf
 * 
 * 
 * @typedef AddJEIEventJS
 * @type {Object}
 * @property {function} add
 * @property {function} notify
 * @property {function} notifyAll
 * 
 * 
 * @typedef CommandEventJS
 * @type {Object}
 * @property {Object} exception
 * @property {Object} parseResults
 * @property {ServerJS} server
 * @property {function} getClass
 * @property {function} getException
 * @property {function} getParseResults
 * @property {function} getServer
 * @property {function} notify
 * @property {function} notifyAll
 * @property {function} setException
 * @property {function} setParseResults
 * 
 * 
**/

/**
 * Function called when a KubeJS event fires.
 * @callback KubeJSEventCallback
 * @param {any} e
 * @return {Void}
**/

/**
 * KubeJS event subscription.
 * @global
 * @param {string} event
 * @param {KubeJSEventCallback} callback
 */
var onEvent = function(event, callback) {}