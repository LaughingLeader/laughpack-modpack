let blacklist_ids = [
	"bloodmagic:growing_doubt",
	"ars_nouveau:arcane_road",
	"immersiveengineering:windmill",
	"immersiveengineering:windmill_blade",
	"immersiveengineering:windmill_sail",
	"immersiveengineering:watermill",
	"immersiveengineering:wheel_segment",
	"immersiveengineering:bannerpattern_windmill",
	"engineerstools:crushing_hammer",
	"quark:backpack",
]

let blacklist_wood_tags = [
	"minecraft:blocks/wooden_buttons",
	"minecraft:blocks/wooden_stairs",
]

function tryTag(tag) {
    try {
        return Ingredient.of("#"+tag)
    } catch (err) {
        return null
    }
}

/**
 * @param {HideJEIEventJS & EventJS} e
**/
let hideItems = function(e){
	try {
		blacklist_ids.forEach(id => e.hide(id))
		/* for (let tag of blacklist_wood_tags) {
			let ingr = tryTag(tag)
			if (ingr) {
				for (let stack of ingr.getStacks().toArray()) {
					let id = stack.getId()
					if (stack.getMod() !== "minecraft" && !id.includes("oak")) {
						e.hide(id)
					}
				}
			}
		} */
	} catch (err) {
		console.error("[LaughPack] Failed to hide items in JEI. Press F3+T to reload client and retry.")
		console.error(err)
	}
}

onEvent(global.EVENT.CLIENT.JEI_HIDE_ITEMS, hideItems)