// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info("===[LaughPack] KubeJS Scripts Startup===")

function printObject(obj)
{
	for (key in obj) {
		console.info(String(key))
	}
}