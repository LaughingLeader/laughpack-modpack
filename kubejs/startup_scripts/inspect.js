global.printObject = function(obj)
{
	let names = []
	for (let key in obj) {
		//console.info(String(key))
		names.push(String(key))
	}
	names.sort()
	for (let name in names) {
		console.info(`* @property {${typeof(obj[names[name]])}} ${names[name]}`)
	}
}

let stripNamespace = function(input) {
	let lastDot = input.lastIndexOf(".")
	if (lastDot < 0) {
		return input
	}
	return input.substring(lastDot+1)
}

/**
 * Print out an object and it"s properties/functions.
 * @param {obj} output
 */
global.inspect = function(obj, forJSDoc) {
	if (typeof obj !== "undefined") {
		let resultArray = []
		resultArray.push("Inspecting: " + obj)
		
		let propertiesArray = []
		let functionsArray = []
		Object.keys(obj).forEach(key => {
			let keyType = typeof obj[key]
			if (keyType === "string" || keyType === "number" || keyType === "object") {
				if(forJSDoc == true) {
					propertiesArray.push(` * @property {${typeof(obj[key])}} ${key}`)
				} else {
					propertiesArray.push("  " + key + ": " + obj[key])
				}
			} else if (keyType === "function" && !key.startsWith("func_")) {
				if (obj[key] == null) return;
				let rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
				console.info(`rawString: ${rawString} ${String(obj[key])}`)
				if (rawString == null || rawString == undefined) {
					if(forJSDoc == true) {
						functionsArray.push(` * @property {function} ${key}`)
					} else {
						functionsArray.push("  " + key)
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
						propertiesArray.push(` * @property {function(${parameterTypes.join(", ")}):${returnType}} ${key}`)
					} else {
						functionsArray.push("  " + key + "(" + parameterTypes.join(", ") + ") : " + returnType)
					}
				}
			} else if (keyType === "undefined") {
				if(forJSDoc == true) {
					propertiesArray.push(` * @property {undefined} ${key}`)
				} else {
					propertiesArray.push("  " + key + ": undefined")
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