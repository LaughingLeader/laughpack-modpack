import crafttweaker.api.item.IItemStack;
import crafttweaker.api.loot.conditions.LootConditionBuilder;
import crafttweaker.api.loot.conditions.vanilla.DamageSourceProperties;
import crafttweaker.api.loot.conditions.vanilla.KilledByPlayer;
import crafttweaker.api.loot.conditions.vanilla.LootTableId;
import crafttweaker.api.loot.conditions.vanilla.RandomChance;
import crafttweaker.api.loot.conditions.vanilla.WeatherCheck;
import crafttweaker.api.loot.modifiers.CommonLootModifiers;

loot.modifiers.register(
    "no_canola_grass",
    LootConditionBuilder.createForSingle<LootTableId>((condition) => {
        condition.withTableId(<resource:car:blocks/grass>);
    }),
    CommonLootModifiers.remove(<item:car:canola_seeds>)
);