

let yeetCategories = function(e)
{
	console.info("jei event")
	global.inspect(e, true)
}

let traceEvents = [
	"jei.yeet.categories",
	"jei.hide.items",
	"jei.hide.custom",
	"jei.information",
	"jei.subtypes",
	"jei.add.items",
]

//traceEvents.forEach((id) => onEvent(id, e => {yeetCategories(e) }))

//onEvent("jei.yeet.categories", yeetCategories)
//onEvent("jei.hide.items", yeetCategories)