# Global Format
All types of crates follow this format. By using this format, you can create
a single crate and change it to any type of crate you want.
## Format
To fully understand this example, please look at the example below.
```
[crate_name]:
    type: [type]
    preview:
        enabled: [true/false]
    buy:
        enabled: [true/false]
        cost: [number]
    message:
        onOpen: '[text]'
        broadcast: '[text]'
    item:
	item: '[item_id/name]'
	enchantment: '[enchant_id:enchant_level]'
	name: '[text]'
	lore:
           - '[text]'
           - '[text]'
           - '[text]'
    key:
        item: '[item_id/name]'
        enchantment: '[enchant_id:enchant_level]'
        name: '[text]'
        lore:
            - '[text]'
            - '[text]'
            - '[text]'
    effect:
        onOpenEffects: '[text]'
        dormantEffects: '[text]'
    reward:
        minimumRewards: [number]
        maximumRewards: [number]
        rewards:
            - '[text]'
            - '[text]'
            - '[text]'
```
## Example #1
```
SwordCrate:
    type: CSGOKEYCRATE
    preview:
        enabled: true
    buy:
        enabled: false
        cost: 0
    message:
        onOpen: ''
        broadcast: ''
    item:
        item: 'stick'
        enchantment: '34:10'
        name: '%white%Weapon %gold%Key!'
        lore: 
            - '%white% Use on a %red%Sword %white%Crate!'
    key:
        item: 'stick'
        enchantment: '34:10'
        name: '%white%Weapon %gold%Key!'
        lore:
            - '%white%Use on a %red%Sword %white%Crate!'
    effect:
        onOpenEffects: 'firework'
        dormantEffects: 'happyVillager'
    reward:
        minimumRewards: 1
        maximumRewards: 1
        rewards:
            - 'item:(268 1 &3Sword_L1 &aBeginner_Kit! 16:1), chance:(7)'
```
