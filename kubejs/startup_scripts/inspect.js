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
	var lastDot = input.lastIndexOf(".")
	if (lastDot < 0) {
		return input
	}
	return input.substring(lastDot+1)
}

/**
 * Print out an object and it"s properties/functions.
 * @param {obj} output
 */
global.inspect = function(obj) {
	if (typeof obj !== "undefined") {
		var resultArray = []
		resultArray.push("Inspecting: " + obj)
		
		var propertiesArray = []
		var functionsArray = []
		Object.keys(obj).forEach(key => {
			var keyType = typeof obj[key]
			if (keyType === "string" || keyType === "number" || keyType === "object") {
				propertiesArray.push("  " + key + ": " + obj[key])
			} else if (keyType === "function" && !key.startsWith("func_")) {
				if (obj[key] == null) return;
				var rawString = obj[key].toString().match(/\/\*\n(.*) .*\((.*)\)/)
				if (rawString == undefined || rawString === "") return;
				var returnType = stripNamespace(rawString[1])
				var rawParameters = []
				if (rawString[2] !== "undefined") {
					rawParameters = rawString[2].split(",")
				}
				var parameterTypes = []
				var i
				for (i = 0; i < rawParameters.length; i++) {
					parameterTypes.push(stripNamespace(rawParameters[i]))
				}
				
				functionsArray.push("  " + key + "(" + parameterTypes.join(", ") + ") : " + returnType)
			} else if (keyType === "undefined") {
				propertiesArray.push("  " + key + ": undefined")
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