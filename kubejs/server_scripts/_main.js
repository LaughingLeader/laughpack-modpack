// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info("===[LaughPack] KubeJS Scripts Startup===")

function printObject(obj)
{
	for (key in obj) {
		console.info(String(key))
	}
}