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
    type: SUPPLYCRATE
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

