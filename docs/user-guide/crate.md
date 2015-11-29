# Configuration

CrateReloaded lets you create named, reward packs of various effects called "crates." 
You can have unlimited crates defined, and each crate may have its unique individual set of options and rewards. 
Crate Reloaded supports the following options...

* Crate **UUID**
* Scrolling **Animation** Effects
* Preview Rewards
* Shop
* Messages (**Individual**/**Broadcast**)
* Unique Physical Crate/Key
* **Particle Effects**
* **Min.** and **Max.** amount of rewards
* **Unlimited** Rewards
* Rewards consist of **items** or **commands**

## Configuration File

Once you have run your server with CrateReloaded installed, you will find the crate configuration file inside the 
**plugins/CrateReloaded** folder:

* Config.yml
* Crate.yml
* Block.yml
* Storage.yml

In this page, we will only be talking about the **crate.yml**.

## Crate.yml

The **crate.yml** holds the individual crate settings such as the **UUID**, **Messaging**, and **Rewards**.

```
Default:
    type: CSGOKEYCRATE
    displayName: '&aDefault Crate'
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
        enchantment: '300:1'
        name: '%white%Default %gold%Key!'
        lore: 
            - '%white% Use on a %red%Sword %white%Crate!'
    key:
        item: 'stick'
        enchantment: '300:1'
        name: '%white%Default %gold%Key!'
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

| **Setting** | **Example** | **Explanation** |
|-|-|-|
| Crate UUID | Default | Set the UUID for the crate. It will be used in every command. |
| type | CSGOKEYCRATE | Set the crate activation type that will be used. Please check [Types.](#types)|
| displayName | &aDefault Crate | Set the name of the GUI when players open the CS:GO or Roulette GUI. Option is specific to *KEYCRATE, CSGOKEYCRATE, ROULETTEKEYCRATE* |
| preview | enabled: true | Set whether the preview GUI is enabled. Option is specific to *KEYCRATE, CSGOKEYCRATE, ROULETTEKEYCRATE* |
| buy | enabled: false; cost:0 | Set whether the shop feature is enabled. |
| message | onOpen:''; broadcast:'' | Set the message that is sent to the player or the entire server. |
| item | item: 'stick'; enchantment: '300:1'; *values* | Set the physical crate item. |
| key | item: 'stick'; enchantment: '300:1'; *values* | Set the physical key item. |
| effect | onOpenEffects:'firework'; dormantEffects: 'happyVillager' | Set the effects of a crate. |
| reward | minimumRewards: 1; maximumRewards: 1; rewards: '*values*' | Set the rewards. |

# Crate Type
CrateReloaded features several activation types that range from simple clicking to activating a CS:GO menu!

| **Type** | **Explanation** |
|-|-|
| SUPPLYCRATE | Crate that is a placeable chest block which players can place-down and loot. |
| MYSTERYCRATE | Crate that is activated by clicking. |
| MENUCRATE | Crate that is activated with a command that opens up a GUI menu. |
| KEYCRATE | Crate that is set at a specific block which players can walk up and use their key. | 
| ROULETTEKEYCRATE | Crate that is derived from *KEYCRATE* which activates a roulette GUI. |
| CSGOKEYCRATE | Crate that is derived from *KEYCRATE* which activates a cs:go GUI. |

# Rewards Section
The options you set in the reward section are per crate rewards. This, ultimately, means that you can have unlimited rewards with each crate!

## Tags
The rewards section uses tags to identify the type of information being passed through.

| Tag | Parameters | Example |
| item | [item_id] [amount] [name] [lore] [data] | wip |
| cmd | [command] | wip |
| chance | [number] | wip |
| display | [item_id] [amount] [name] [lore] [data] | wip |
| broadcast | [message]] | wip |
| inbroadcast | [message]] | wip |
| onopen | [message]] | wip |
| noduplicate | *N/A* | wip |

