events.listen("item.tags", (event) => {
    event.add("curios:createplus.goggle_slot", [
        "botania:cosmetic_engineer_goggles",
        "botania:monocle",
        "advancedperipherals:ar_goggles"
    ]);
    event.add("forge:dusts/zinc", [
        "kubejs:dust_zinc"
    ]);
    event.add("atmospheric:crustose_logs", [
        "atmospheric:crustose_log",
        "atmospheric:crustose_wood",
    ]);
});

events.listen("block.tags", (event) => {
    event.add("atmospheric:crustose_logs", [
        "atmospheric:crustose_log",
        "atmospheric:crustose_wood",
    ]);
});