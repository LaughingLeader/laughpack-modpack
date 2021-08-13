/** @param {WorldgenRemoveEventJSForge} e **/
onEvent("worldgen.remove", function(e){
	//Removing hardcoded Druidcraft lavender.
	e.removeFeatureById("vegetal_decoration", ["druidcraft:lavender"])
})