events.listen('item.tags', (event) => {
    var items = [
        'aquaculture:neptunes_bounty',
        'blockcarpentry:frame_chest',
        'blockcarpentry:illusion_chest',
        'buildersaddition:bedside_table_acacia',
        'buildersaddition:bedside_table_birch',
        'buildersaddition:bedside_table_crimson',
        'buildersaddition:bedside_table_dark_oak',
        'buildersaddition:bedside_table_jungle',
        'buildersaddition:bedside_table_oak',
        'buildersaddition:bedside_table_spruce',
        'buildersaddition:bedside_table_warped',
        'buildersaddition:bookshelf_acacia',
        'buildersaddition:bookshelf_birch',
        'buildersaddition:bookshelf_crimson',
        'buildersaddition:bookshelf_dark_oak',
        'buildersaddition:bookshelf_jungle',
        'buildersaddition:bookshelf_oak',
        'buildersaddition:bookshelf_spruce',
        'buildersaddition:bookshelf_warped',
        'buildersaddition:cabinet_acacia',
        'buildersaddition:cabinet_birch',
        'buildersaddition:cabinet_crimson',
        'buildersaddition:cabinet_dark_oak',
        'buildersaddition:cabinet_jungle',
        'buildersaddition:cabinet_oak',
        'buildersaddition:cabinet_spruce',
        'buildersaddition:cabinet_warped',
        'buildersaddition:counter_acacia_andesite',
        'buildersaddition:counter_acacia_blackstone',
        'buildersaddition:counter_acacia_diorite',
        'buildersaddition:counter_acacia_granite',
        'buildersaddition:counter_birch_andesite',
        'buildersaddition:counter_birch_blackstone',
        'buildersaddition:counter_birch_diorite',
        'buildersaddition:counter_birch_granite',
        'buildersaddition:counter_crimson_andesite',
        'buildersaddition:counter_crimson_blackstone',
        'buildersaddition:counter_crimson_diorite',
        'buildersaddition:counter_crimson_granite',
        'buildersaddition:counter_dark_oak_andesite',
        'buildersaddition:counter_dark_oak_blackstone',
        'buildersaddition:counter_dark_oak_diorite',
        'buildersaddition:counter_dark_oak_granite',
        'buildersaddition:counter_jungle_andesite',
        'buildersaddition:counter_jungle_blackstone',
        'buildersaddition:counter_jungle_diorite',
        'buildersaddition:counter_jungle_granite',
        'buildersaddition:counter_oak_andesite',
        'buildersaddition:counter_oak_blackstone',
        'buildersaddition:counter_oak_diorite',
        'buildersaddition:counter_oak_granite',
        'buildersaddition:counter_spruce_andesite',
        'buildersaddition:counter_spruce_blackstone',
        'buildersaddition:counter_spruce_diorite',
        'buildersaddition:counter_spruce_granite',
        'buildersaddition:counter_warped_andesite',
        'buildersaddition:counter_warped_blackstone',
        'buildersaddition:counter_warped_diorite',
        'buildersaddition:counter_warped_granite',
        'buildersaddition:cupboard_acacia',
        'buildersaddition:cupboard_birch',
        'buildersaddition:cupboard_crimson',
        'buildersaddition:cupboard_dark_oak',
        'buildersaddition:cupboard_jungle',
        'buildersaddition:cupboard_oak',
        'buildersaddition:cupboard_spruce',
        'buildersaddition:cupboard_warped',
        'buildersaddition:shelf_acacia',
        'buildersaddition:shelf_birch',
        'buildersaddition:shelf_crimson',
        'buildersaddition:shelf_dark_oak',
        'buildersaddition:shelf_jungle',
        'buildersaddition:shelf_oak',
        'buildersaddition:shelf_spruce',
        'buildersaddition:shelf_warped',
        'cookingforblockheads:cabinet',
        'cookingforblockheads:corner',
        'cookingforblockheads:counter',
        'cookingforblockheads:fruit_basket',
        'cookingforblockheads:hanging_corner',
        'cookingforblockheads:spice_rack',
        'cookingforblockheads:tool_rack',
        'embellishcraft:acacia_fancy_chest',
        'embellishcraft:acacia_wooden_crate',
        'embellishcraft:birch_fancy_chest',
        'embellishcraft:birch_wooden_crate',
        'embellishcraft:crimson_fancy_chest',
        'embellishcraft:crimson_wooden_crate',
        'embellishcraft:dark_oak_fancy_chest',
        'embellishcraft:dark_oak_wooden_crate',
        'embellishcraft:jungle_fancy_chest',
        'embellishcraft:jungle_wooden_crate',
        'embellishcraft:oak_fancy_chest',
        'embellishcraft:oak_wooden_crate',
        'embellishcraft:spruce_fancy_chest',
        'embellishcraft:spruce_wooden_crate',
        'embellishcraft:warped_fancy_chest',
        'embellishcraft:warped_wooden_crate',
        'engineersdecor:labeled_crate',
        'farmersdelight:basket',
        'farmersdelight:oak_pantry',
        'farmersdelight:birch_pantry',
        'farmersdelight:spruce_pantry',
        'farmersdelight:jungle_pantry',
        'farmersdelight:acacia_pantry',
        'farmersdelight:dark_oak_pantry',
        'farmersdelight:crimson_pantry',
        'farmersdelight:warped_pantry',
        'immersiveengineering:crate',
        'immersiveengineering:minecart_reinforcedcrate',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:reinforced_crate',
        'ironchest:copper_chest',
        'ironchest:crystal_chest',
        'ironchest:diamond_chest',
        'ironchest:dirt_chest',
        'ironchest:gold_chest',
        'ironchest:iron_chest',
        'ironchest:obsidian_chest',
        'ironchest:silver_chest',
        'mekanism:personal_chest',
        'minecraft:barrel',
        'minecraft:black_shulker_box',
        'minecraft:blue_shulker_box',
        'minecraft:brown_shulker_box',
        'minecraft:chest',
        'minecraft:chest_minecart',
        'minecraft:cyan_shulker_box',
        'minecraft:dispenser',
        'minecraft:dropper',
        'minecraft:ender_chest',
        'minecraft:gray_shulker_box',
        'minecraft:green_shulker_box',
        'minecraft:light_blue_shulker_box',
        'minecraft:light_gray_shulker_box',
        'minecraft:lime_shulker_box',
        'minecraft:orange_shulker_box',
        'minecraft:pink_shulker_box',
        'minecraft:purple_shulker_box',
        'minecraft:red_shulker_box',
        'minecraft:shulker_box',
        'minecraft:trapped_chest',
        'minecraft:white_shulker_box',
        'minecraft:yellow_shulker_box',
        'pneumaticcraft:reinforced_chest',
        'pneumaticcraft:smart_chest',
        'quark:acacia_chest',
        'quark:acacia_trapped_chest',
        'quark:birch_chest',
        'quark:birch_trapped_chest',
        'quark:crimson_chest',
        'quark:crimson_trapped_chest',
        'quark:dark_oak_chest',
        'quark:dark_oak_trapped_chest',
        'quark:jungle_chest',
        'quark:jungle_trapped_chest',
        'quark:mushroom_chest',
        'quark:mushroom_trapped_chest',
        'quark:nether_brick_chest',
        'quark:nether_brick_trapped_chest',
        'quark:oak_chest',
        'quark:oak_trapped_chest',
        'quark:prismarine_chest',
        'quark:prismarine_trapped_chest',
        'quark:purpur_chest',
        'quark:purpur_trapped_chest',
        'quark:spruce_chest',
        'quark:spruce_trapped_chest',
        'quark:warped_chest',
        'quark:warped_trapped_chest',
        'resourcefulbees:apiary_storage',
        'rftoolsstorage:modular_storage',
        'rftoolsstorage:storage_module0',
        'rftoolsstorage:storage_module1',
        'rftoolsstorage:storage_module2',
        'rftoolsstorage:storage_module3',
        'tetra:rack',
        'betterendforge:jellyshroom_barrel',
        'betterendforge:umbrella_tree_barrel',
        'betterendforge:helix_tree_barrel',
        'betterendforge:dragon_tree_barrel',
        'betterendforge:pythadendron_barrel',
        'betterendforge:end_lotus_barrel',
        'betterendforge:lacugrove_barrel',
        'betterendforge:mossy_glowshroom_barrel',
        'betterendforge:jellyshroom_chest',
        'betterendforge:umbrella_tree_chest',
        'betterendforge:helix_tree_chest',
        'betterendforge:tenanea_chest',
        'betterendforge:dragon_tree_chest',
        'betterendforge:pythadendron_chest',
        'betterendforge:end_lotus_chest',
        'betterendforge:lacugrove_chest',
        'betterendforge:mossy_glowshroom_chest'
    ];

    event.get('forge:storage').add(items);
    event.get('forge:storage/basic').add(items);
});
