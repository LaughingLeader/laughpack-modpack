function tryTag(tag) {
    try {
        return Ingredient.of("#"+tag)
    } catch (err) {
        return null
    }
}

onEvent("jei.hide.items", event => {
    if (global["HIDE_UNIFIED_ITEMS"]) {
        try {
            for (let tag of global["unifytags"]) {
                let ingr = tryTag(tag)
                if (ingr) {
                    let stacks = ingr.getStacks().toArray()
                    let tItem = global["tagitems"][tag]
                    for (let s of stacks) {
                        if (s.getId() != tItem) event.hide(s.getId())
                    }
                }
            }
        } catch (err) {
            console.error("[LaughPack] Failed to hide unified items in JEI. Press F3+T to reload client and retry.")
		    console.error(err)
        }
    }
})