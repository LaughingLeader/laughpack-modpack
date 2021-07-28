function printObject(obj)
{
	let names = []
	for (let key in obj) {
		//console.info(String(key))
		names.push(String(key))
	}
	names.sort()
	for (let name in names) {
		console.info(names[name])
	}
}

var customCommands = {
	"dump_recipes": function (player, cmdParts, event) {
		const filter = global.recipes.customFilter(r => { console.info(r); return true; })
		let recipes_dump = utils.newList()
		global.recipes.forEachRecipe(filter, r => {
			recipes_dump.add(r)
		})
		json.write("dumps/recipes.json", global.recipes_dump)
		//printObject(utils.server.instance)
		//printObject(global.recipes_dump)
		console.info("Wrote dumps/recipes.json")
		event.cancel()
	}
};

/* events.listen("command.run",function(e){
	if (!e.parseResults
	|| !e.parseResults.reader
	|| !e.parseResults.context
	|| !e.parseResults.context.source)
	return
		
	// let player = e.parseResults.context.source.func_197022_f()
	// if (!player) return
	
	var command = e.parseResults.reader.getString()
	var cmdParts = command.substr(1).split(" ")
	// console.info(player)
	// printObject(player)
	if (customCommands[cmdParts[0]]) 
		//customCommands[cmdParts[0]](e.server.getPlayer(player),cmdParts,e)
		customCommands[cmdParts[0]](e.player,cmdParts,e)
}); */

/*
events.listen("command.registry",function (e) {
	e.create("dump_recipes").execute(function(sender,args){
		sender.tell([ Text.lightPurple("[LaughPack]"), " Dumping recipes." ])
		json.write("config/recipes.json", global.recipes_dump)
		console.info("Wrote recipes.json")
	}).add()
	console.info("Registered custom command")
});
*/

console.info("commands.js loaded")