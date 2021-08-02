//priority: 100

/** 
 * @this {CommandSource}
 * @param {ServerJS} server
 * @param {ServerPlayerEntity} player
**/
global.customCommands.dump_recipes = function (server, player) {
	const filter = global.recipes.customFilter(r => { console.info(r); return true; })
	let recipes_dump = utils.newList()
	global.recipes.forEachRecipe(filter, r => {
		recipes_dump.add(r)
	})
	json.write("dumps/recipes.json", global.recipes_dump)
	console.info("Wrote dumps/recipes.json")
}

let trunc = function(num, digits) {
	digits = typeof digits !== "undefined" ? digits : 2;
    let numS = num.toString(),
        decPos = numS.indexOf("."),
        substrLength = decPos == -1 ? numS.length : 1 + decPos + digits,
        trimmedResult = numS.substr(0, substrLength),
        finalResult = isNaN(trimmedResult) ? 0 : trimmedResult;

    return parseFloat(finalResult);
}

let debugPrintCommandSource = function(commandSource) {
	let ignore_keys = {
		/*
		func_197010_l:true,
		func_197011_j:true,
		func_197012_k:true,
		func_197019_b:true,
		func_197022_f:true,
		func_197023_e:true,
		func_197027_g:true,
		func_197028_i:true,
		func_197031_a:true,
		func_197035_h:true,
		func_197036_d:true,
		func_199612_m:true,
		func_201004_i:true,
		func_217293_r:true,
		func_217294_q:true,
		func_230390_p_:true,
		func_241861_q:true,
		func_197030_a:true,
		*/
	}
	Object.keys(commandSource).forEach(key => {
		if (key.indexOf("func_") > -1 && ignore_keys[key] !== true) {
			try {
				//console.info(`${key}`)
				let result = commandSource[key]()
				console.info(`${key} = [${result.class}] ${result}`)
				//commandSource[key](displayname)
			} catch(err) {
				//console.info(`${err}`)
			}
		}
	})
}

/** 
 * @this {CommandSource}
 * @param {ServerJS} server
 * @param {ServerPlayerEntity} player
**/
global.customCommands.pos = function (server, player) {
	let positionVector = this.func_197036_d()
	let rotationVector = this.func_201004_i()
	let username = this.func_197037_c()

	let position = [
		//x,y,z
		trunc(positionVector.field_72450_a), trunc(positionVector.field_72448_b), trunc(positionVector.field_72449_c)
	]
	let rotation = [
		//x,z
		trunc(rotationVector.field_189983_j), trunc(rotationVector.field_189982_i)
	]

	let positionText = `${position.join(", ")}`
	let rotationText = `${rotation.join(", ")}`
	let tpCommand = `/tp ${username} ${position.join(" ")} ${rotation.join(" ")}`
	let copyText = Text.translate("chat.copy.click")
	let commandText = Text.of([
		Text.yellow("Position: "), 
		Text.green(`[${positionText}]`).click(`copy:${positionText}`).hover(copyText),
		Text.yellow(" Rotation: "),
		Text.green(`[${rotationText}]`).click(`copy:${rotationText}`).hover(copyText),
		Text.green(" [TP]").click(`copy:${tpCommand}`).hover("Click to copy teleport command to clipboard."),
	])

	//e.server.tell(commandText)
	//sendSuccess
	this.func_197030_a(commandText, true)
}
	//let world = e.server.getWorlds()[0]
	//let serverPlayerEntity = e.parseResults.context.source.func_197022_f()
	//let serverPlayerEntity = e.parseResults.context.source.func_197023_e()
	//let TextComponent = e.parseResults.context.source.func_197019_b()


/** 
 * @this {CommandSource}
 * @param {ServerJS} server
 * @param {ServerPlayerEntity} player
**/
global.customCommands.reloadalldebug = function (server, player) {
	// server.runCommand(`/kubejs reload startup_scripts`)
	// server.runCommand(`/kubejs reload server_scripts`)
	// server.runCommand(`/kubejs reload client_scripts`)
	// server.runCommand(`/reload`)
}

let tryGetPlayer = function(commandSource) {
	try {
		return commandSource.func_197035_h()
	} catch(err) {
		//console.error(err)
		return null
	}
}

/** @param {CommandEventJS} e **/
onEvent("command.run", function(e){
	if (!e.parseResults
	|| !e.parseResults.reader
	|| !e.parseResults.context
	|| !e.parseResults.context.source)
	return
		
	//getPlayerOrException()
	/** @type {CommandSource} */
	let commandSource = e.parseResults.context.source
	let player = tryGetPlayer(commandSource)
	if (player == null) {
		return
	}
	
	let rawCommand = e.parseResults.reader.getString()
	/** @type {string[]} **/
	let cmdParts = rawCommand.substr(1).split(" ")
	let commandName = cmdParts.shift()
	let callback = global.customCommands[commandName]

	if (callback !== undefined) {
		let isHandled = true
		//customCommands[command](e.server.getPlayer(player),cmdParts,e)
		try {
			// Command wanting to display command error text
			if (callback.apply(commandSource,[e.server,player].concat(cmdParts)) === false) {
				//Skip canceling
				isHandled = false
			}
		} catch (err) {
			console.error(`[LaughPack] Error invoking custom command (${commandName}):`)
			console.error(err)
		}
		if (isHandled) {
			e.cancel()
		}
	}
});

/*
onEvent("command.registry",function (e) {
	e.create("dump_recipes").execute(function(sender,args){
		sender.tell([ Text.lightPurple("[LaughPack]"), " Dumping recipes." ])
		json.write("config/recipes.json", global.recipes_dump)
		console.info("Wrote recipes.json")
	}).add()
	console.info("Registered custom command")
});
*/

console.info("commands.js loaded")