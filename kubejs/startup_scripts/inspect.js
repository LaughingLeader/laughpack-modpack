//priority: 999

global.printObject = function(obj)
{
	let names = []
	for (let key in obj) {
		//console.info(String(key))
		names.push(String(key))
	}
	names.sort()
	for (let name in names) {
		console.info(`* @prop {${typeof(obj[names[name]])}} ${names[name]}`)
	}
}

let stripNamespace = function(input) {
	let lastDot = input.lastIndexOf(".")
	if (lastDot < 0) {
		return input
	}
	return input.substring(lastDot+1)
}

let ignoredKeys = [
	"func_",
	"field_",
	//base class stuff
	"cancelled",
	"class",
	"canCancel",
	"cancel",
	"equals",
	"getClass",
	"hashCode",
	"isCancelled",
	"toString",
	"wait",
	"post",
	"notify",
	"notifyAll",
]

let tryGetFunctionValue = function(obj, key) {
	try{
		let value = obj[key]()
		return `[${typeof(value)}] = ${value}`
	} catch(ex) {
		return "unknown"
	}
}

/**
 * Print out an object and it"s properties/functions.
 * @param {object} obj
 * @param {boolean} forJSDoc
 * @param {boolean} getAll
 */
global.inspect = function(obj, forJSDoc, getAll) {
	if (typeof obj !== "undefined") {
		let resultArray = []
		resultArray.push("Inspecting: " + obj)
		
		let propertiesArray = []
		let functionsArray = []
		Object.keys(obj).forEach(key => {
			if(forJSDoc != true || (getAll == true || !ignoredKeys.some((x) => key.startsWith(x))))
			{
				let keyType = typeof obj[key]
				if (keyType !== "undefined" && keyType !== "function") {
					if (keyType == "object" && Array.isArray(obj[key])) {
						keyType = "Array"
					}
					if(forJSDoc == true) {
						propertiesArray.push(` * @prop {${keyType}} ${key}`)
					} else {
						propertiesArray.push("  " + key + ": " + obj[key])
					}
				} else if (keyType === "function") {
					if (obj[key] == null) return
					let rawString = undefined
					if (obj[key].toString !== undefined) {
						rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
					} 
					//console.info(`rawString: ${rawString} ${String(obj[key])}`)
					if (rawString == null || rawString == undefined) {
						if(forJSDoc == true) {
							functionsArray.push(` * @prop {function} ${key}`)
						} else {
							functionsArray.push(`  ${key}: ${tryGetFunctionValue(obj, key)}`)
						}
					} else {
						let returnType = stripNamespace(rawString[1])
						let rawParameters = []
						if (rawString[2] !== "undefined") {
							rawParameters = rawString[2].split(",")
						}
						let parameterTypes = []
						let i
						for (i = 0; i < rawParameters.length; i++) {
							parameterTypes.push(stripNamespace(rawParameters[i]))
						}
						
						if(forJSDoc == true) {
							propertiesArray.push(` * @prop {function(${parameterTypes.join(", ")}):${returnType}} ${key}`)
						} else {
							functionsArray.push("  " + key + "(" + parameterTypes.join(", ") + ") : " + returnType)
						}
					}
				} else if (keyType === "undefined") {
					if(forJSDoc == true) {
						propertiesArray.push(` * @prop {undefined} ${key}`)
					} else {
						propertiesArray.push("  " + key + ": undefined")
					}
				}
			}
		})
		
		propertiesArray.sort();
		propertiesArray.unshift("=== Properties ===")
		functionsArray.sort()
		functionsArray.unshift("=== functions ===")
		
		resultArray.push(propertiesArray.join("\n"))
		resultArray.push(functionsArray.join("\n"))
		console.info(resultArray.join("\n"))
	} else {
		console.info("inspected object is undefined")
	}
}