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
* **Permission-Based** Rewards
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
| type | CSGOKEYCRATE | Set the crate activation type that will be used. Please check [Types.](#crate-type)|
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

# Enchantments
For a list of enchantments, please check out the [Enchantment List.](../reference/enchantmentList.md)

```
    - 'item:(268 1 &3Sword_L1 &aBeginner_Kit! 16:1;17:1), chance:(7)'
```
To implement enchantments into your items, use the data section of the **item** to add in the enchantment id.
For several enchantment ids, use a ";" as a separator.

The code snippet above is a sword that has two enchantments, **Sharpness(16)** and **Smite(17)**.

# Effects
For visual effects, please check out the [Particle List.](../reference/particleList.md) 
Otherwise, for sound effects, please check out the [Sound List.](../reference/soundList.md) 

```
    effect:
        onOpenEffects: 'firework;explode'
        dormantEffects: 'happyVillager'
```
To implement effects, use the effect section inside the crate options. To add in multiple effects, use a ";" as a separator.

# Rewards Section
The options you set in the reward section are per crate rewards. This, ultimately, means that you can have unlimited rewards with each crate!

```
    reward:
        minimumRewards: 1
        maximumRewards: 1
        rewards:
            - 'item:(268 1 &3Sword_L1 &aBeginner_Kit! 16:1), chance:(7)'
            - 'cmd:(/tell %player% I'm going to execute the player!), cmd:(/kill %player%), chance:(7)'
```

## Tags
The rewards section uses tags to identify the type of information being passed through.

| Tag | Parameters | Example |
|-|-|-|
| item | [item_id] [amount] [name] [lore] [data] | item:(1 30 DIRT! &aAmazing_Dirt! 300:1) |
| cmd | [command] | cmd:(/executeMyCommand) |
| chance | [number] | chance:(5) |
| display | [item_id] [amount] [name] [lore] [data] | display:(1 30 DIRT! &aAmazing_Dirt! 300:1) |
| broadcast | [message] | broadcast:(Sending this to the entire server!) |
| inbroadcast | [message] | inbroadcast:(This will be added onto the original broadcast message!) |
| onopen | [message] | onopen:(Sending this only to the player!) |
| noduplicate | *N/A* | noduplicate:() |
| onetime | [permission] | onetime:(rank.noble) |

### Items
The reward section allows you to add in Items with unique characteristics.

#### Parsing
```
    - 'item:(268 1 &3Sword_L1 &aBeginner_Kit!%line%&1Level_2 16:1;17:1)'
```
| String | Explanation | Example |
|-|-|-|
| **_** | Replaces the character with a space. | &3Sword_L1 |
| **%line%** | Replaces the string with a new line. | &aBeginner_Kit!%line%&1Level_2 |
| **;** | Allows you to add in several enchantments. | 16:1;17:1 |

### Chances
The reward section for CrateReloaded uses a weighted system as a chance system.

#### Weight System Explained
Think of 5 different individual people at a lottery. Each person will recieve a lottery ticket, but a different amount.
In an unequal world, the person who weighs the most receives 5 tickets descending from there. 
The person with the *largest* **weight** will have the largest chance of being picked because he has the most tickets.
The person with the *smallest* **weight** will have the smallest chance of being picked because he has the least amount of tickets.

This is similar to our system, the reward with the largest **weight**, or number, will have the greatest chance of being picked.
Thus, Weight System!

#### Basics
For those who don't like calculations, the weight system makes it easy. The larger the number, the higher chance it will have
and vice versa.

```
    - 'item:(dirt 1), chance:(10)'
    - 'item:(stone 1), chance:(5)'
    - 'item:(iron_ingot 1), chance:(3)'
    - 'item:(gold_ingot 1), chance:(2)'
    - 'item:(diamond 1), chance:(1)'
```

In our example, we will be using **dirt**, **stone**, **iron**, **gold**, **diamond**. Starting off, you want to create
a simple base number (We will use the lucky number, **5**), and build off from there. 

Analysis

* **Dirt**, which is extremely common, will be *way above* the base value which will make it appear several times more than normal.
* **Stone**, which is pretty common, will be *at* the base value which will make it appear a lot of the time.
* **Iron**, which is somewhat rare, will be *below* the base value which will appear less often.
* **Gold**, which is rare, will be *below* the base value which will appear less often.
* **Diamond**, which is very rare, will be *way below* the base value which will appear not very often.

### One-Time and No Duplicate Rewards
Crate Reloaded supports unique handling of rewards for specific players. 

CrateReloaded has two tags, **noduplicate** and **onetime**, both individual ways to grant rewards.

#### One Time Tag
The one time tag is a unique tag that allows for permission checks. The one time tag takes one argument and multiple one time tags can be used.

````
	- 'cmd:(/pex add rank.upper), onetime:(rank.lower), onetime:(rank.middle), chance:(1)'
````

In our example, we have two one time, a command, and a chance tag. Our plugin will check for the two permissions *rank.lower* and *rank.middle* and 
if the user does not have both permissions, the player will have a chance to win the permission node, *rank.upper*. 

#### No Duplicate Tag
The no duplicate tag is a per-reward check. In the case that you want to give out unique rewards every time a person opens the crate, the no duplicate tag
is here for you. 

````
    reward:
        minimumRewards: 4
        maximumRewards: 4
        rewards:
            - 'item:(267 1 &3Sword_L1 &aBeginner_Kit! 16:1), chance:(1), noduplicate:()'
            - 'item:(256 1 &3Shovel_L1 &aBeginner_Kit! 16:1), chance:(1), noduplicate:()'
            - 'item:(257 1 &3Pick_L1 &aBeginner_Kit! 16:1), chance:(1), noduplicate:()'
            - 'item:(258 1 &3Axe_L1 &aBeginner_Kit! 16:1), chance:(1), noduplicate:()'
````

In the example above, we have a minimum and maximum of four rewards. Additionally, every reward has the no duplicate tag. With these two settings put into place,
users who open the crate are granted all four items, the sword, shovel, pick, and axe! The no-duplicate tag allows for rewards to be unique! 