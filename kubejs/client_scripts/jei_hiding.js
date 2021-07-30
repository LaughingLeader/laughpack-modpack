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
		for(let mod in global.removals) {
			if (Platform.isLoaded(mod)) {
				let data = global.removals[mod]
				data.input.forEach(item => {
					e.hide(item)
				})
				data.output.forEach(item => {
					e.hide(item)
				})
			} else {
				console.info(`Mod ${mod} is not loaded.`)
			}
		}
	} catch (err) {
		console.error("[LaughPack] Failed to hide items in JEI. Press F3+T to reload client and retry.")
		console.error(err)
	}
}

/**
 * @param {HideJEIEventJS & EventJS} e
**/
let hideFluids = function(e){
	try {
		global.inspect(e, true)
		for(let mod in global.removals) {
			let data = global.removals[mod]
			if (data.fluids && Platform.isLoaded(mod)) {
				data.fluids.forEach(id => {
					e.hide(id)
				})
			}
		}
	} catch (err) {
		console.error("[LaughPack] Failed to hide items in JEI. Press F3+T to reload client and retry.")
		console.error(err)
	}
}

onEvent(global.EVENT.CLIENT.JEI_HIDE_ITEMS, hideItems)
onEvent(global.EVENT.CLIENT.JEI_HIDE_FLUIDS, hideFluids)