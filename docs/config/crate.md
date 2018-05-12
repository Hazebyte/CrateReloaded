# Configuration

* [config.yml](config/config.md)
* **[crate.yml](config/crate.md)**

## Features

* Unlimited crates and rewards
* Multi-world support
* Animations
* Preview Menu
* Message System
* Particle Effects
* Rewards support items and commands

### Crate Types

The type of crate defines the unique interaction with the player when the crate is activated. These are the following types...

| **Type** | **Animation Support** | **Description**                                                                       | **Activation**                                                                                                                  |
| -------- | --------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SUPPLY   | No                    | Placeable crate that acts as a Minecraft chest                                        | Placing down a chest                                                                                                            |
| MYSTERY  | Yes                   | Crate that is activated by any type of click                                          | Right or left click with the crate in-hand                                                                                      |
| KEY      | Yes                   | Crate that is preset to a block. This block acts as a hub for users to interact with. | Right or left click a preset block with the crate in-hand. Left click is set to preview while right click is to open the crate. |

### The Physical Crate or Key

Crates and keys are physical items in Minecraft. These physical items are what players use to interact and activate rewards. Each crate or key-crate has its own item or key, respectively.

```YML
FoodKey:
    ...
    item: 'tripwire_hook 1 name:&c[&6Foodie_&eKey&c]_&f#124 lore:&7Mmmm,_something_smells_good.\n&8Place_the_chest_down_to_obtain_a_pack_of_food! glow:true'
    ...
```

!> This plugin uses the EssentialsX item format. For more information about item parsing, [click here](#item-parser).

### Animations

Some crates support different animations, which appear in a GUI when the crate is activated.

> **Active Animations** run while the reward is being selected on the player's screen

> **Ending Animations** occur after the player's reward has been selected - this animation plays immediately after the Active animation ends

| **Active**    | **Ending** |
| ------------- | ---------- |
| ROULETTE      | BLANK      |
| CSGO          | RANDOM     |
| REVERSE_CSGO  |
| WHEEL         |
| REVERSE_WHEEL |

</table>

### Crate Hologram

This creates a hologram which hovers above the block location or NPC which the crate is set.

```YML
FoodKeyT2:
    ...
    holographic:
        - 'Lines'
        - 'of'
        - 'text'
    ...
```

!> For holograms to work, you must have [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) installed on your server

### Preview

**Crate Previews** allow players to see the rewards in a crate. Previews are automatically generated based off tags from rewards. It may be toggled in the config.

```YAML
  FoodKey:
    ...
    preview:
        enabled: true
        rows: 4
    ...
```

### Item Parser

The **Item Parser** is how the plugin figures out what item to take or replace. Follow the template below to use for your crates. You can find some examples by scrolling down.

**Template**

```YML
display:(material:durability amount [OPTIONS])
```

```YML
display:(material:durability amount name:myName lore:lore1|lore2 skull:base64 color:r,g,b effect:haste power:1 duration:30 splash:true unbreakable:true glow:true hide:true)
```

> For simplicity, we use a near identical version of [EssentialsX](https://www.spigotmc.org/resources/essentialsx.9089/) item parser

**List of options**

| **Option**  | **Expected Value** |
| ----------- | ------------------ |
| name        | String             |
| lore        | String             |
| skull       | String(Base64)     |
| color       | String(R,G,B)      |
| effect      | String             |
| power       | Integer            |
| duration    | Integer            |
| splash      | Boolean            |
| unbreakable | Boolean            |
| glow        | Boolean            |
| hide        | Boolean            |

#### Examples

_Potion:_

```yml
display:(potion 1 name:Potion lore:Test effect:haste power:3 duration:180)'
```

_Enchanted Sword with unbreakable and hidden attributes:_

```yml
display:(diamond_sword 1 17:1 18:1 unbreakable:true hide:true)
```

[_Minecraft Head:_](https://github.com/Hazebyte/CrateReloaded/issues/97)

```yml
display:(skull:3 1 name:&aWilltella lore:&aA_delicious_snack!! skull:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE1ZGNiMmRhMDJjZjczNDgyOWUxZTI3M2UzMDI1NjE3ZDgwNzE1MTZmOTUzMjUxYjUyNTQ1ZGE4ZDNlOGRiOCJ9fX0)
```

### Effects

Effects are run under a given condition or category. The manifestation of the effect is given by
the class.

```yml
  FoodKey:
    ...
    effect:
        1:
          class: Heart
          category: PERSISTENT
          particle: FLAME
    ...
```

> [List of classes/particles](reference/particles)

#### Categories

| **Category** | **Description**                                          |
| ------------ | -------------------------------------------------------- |
| OPEN         | Animation that is run once when the crate is opened      |
| PERSISTENT   | Animation that constantly runs around a crate            |
| ANIMATION    | Animation that is run when it is undergoing an animation |
| END          | Animation that is run once the animation finishes        |

##### Examples

A star that appears when a player opens a crate.

```yml
    effect:
        1:
          class: Star
          category: OPEN
          particle: FLAME
```

todo Sounds

### Rewards

Each individual crate supports its own set of rewards. Crates may give out a random amount between two numbers
by setting a minimum and a maximum number of rewards.

> Crates with animations default and support one reward.

> Always ensure that the number of minimum rewards is greater than or equal to the number of rewards available.

```YML
    reward:
        minimum-rewards: 1
        maximum-rewards: 1
        rewards:
            # Always heals the player to full
            - 'unique:(),     chance:(1000),      cmd:(/heal %player%)'
```

#### Tag

Tags are used to identify the important values set in the config that is passed to the plugin.
A list of tags include...

| **Tag**    | **Limit** | **Description**                                                      |
| ---------- | --------- | -------------------------------------------------------------------- |
| item       | ∞         | Represents an item                                                   |
| cmd        | ∞         | Represents a command                                                 |
| chance     | 1         | Represents the weighted chance                                       |
| display    | 1         | Represents a display item                                            |
| broadcast  | 1         | String that is broadcasted when this reward is given                 |
| append     | 1         | String that appends to the crate's broadcast message                 |
| open       | 1         | String that is shown to the player when one opens the crate          |
| unique     | 1         | Reward that is only given once in a single crate probability roll    |
| permission | ∞         | Reward that is given only if the player does not have the permission |
| always     | 1         | Reward that is always given regardless of the probability.           |

Tags start with the name and have a colon and parenthesis to represent intake value `e.g. unique:()`

##### Items

Click [here](#item-parser) to read more about item parsing.

##### Commands

Any command may be specified here. Commands are executed through the console.

```YML
    cmd:(/heal %player%)     # Commands may start with '/'
    cmd:(heal %player%)      # They also don't have to :)
```

You may also specify multiple commands per line.

```YML
    cmd:(/heal %player%), cmd:(tell %player% You're awesome!)
```

##### Chance

```YML
    chance:(10)
```

###### How does the chance system work?

The chance system is based on weights. While the config states that it is a chance, this is misleading
and actually represents a weight. The explanation is through an example.

> For this example, we choose convenient numbers where the summation adds up to 100.
> The total does not have to add up to 100.

```YML
    - 'item:(dirt 1),       chance:(50)'
    - 'item:(stone 1),      chance:(20)'
    - 'item:(iron_ingot 1), chance:(15)'
    - 'item:(gold_ingot 1), chance:(10)'
    - 'item:(diamond 1),    chance:(5)'
```

Each reward is calculated to a percentage based on its weight.

* The **total weight** is **100 = (50 + 20 + 15 + 10 + 5)**.
* **Reward Percentage** = (**weight / total weight**) \* 100%.

```YML
    - 'item:(dirt 1),       chance:(50)' # (50 / 100) * 100% = 50%
    - 'item:(stone 1),      chance:(20)' # (20 / 100) * 100% = 20%
    - 'item:(iron_ingot 1), chance:(15)' # (15 / 100) * 100% = 15%
    - 'item:(gold_ingot 1), chance:(10)' # (10 / 100) * 100% = 10%
    - 'item:(diamond 1),    chance:(5)'  # (5 / 100) * 100% = 5%
```

##### Permission

Rewards that have the `permission` tag are given only if the player does not
have the permission.

In the following example, the following reward will execute the command to give
the player the permission if and only if the user does not have the permission `user.vip`.

```YML
    reward:
        rewards:
            - 'permission:(user.vip), cmd:(pex add %player% user.vip)'
```

!> In the case that there are no fallback rewards, and the player has all permissions or is an operator, the plugin will not take a key. An error message will be sent to the player.

###### Fallback Rewards

If the player has every permissions for each reward in a crate or is an operator, you may provide a fallback reward. Otherwise, an error message
will be sent to the player.

```YML
    reward:
        rewards:
            - 'permission:(user.vip), cmd:(pex add %player% user.vip)'
            - 'cmd:(tell %player% You have won all the rewards)'
```

##### Unique

Rewards that have the `unique` tag are given once per opening.

In the example below, the crate will give the player a heal, diamond, and iron with no duplicates.

```YML
    reward:
        minimum-rewards: 3
        maximum-rewards: 3
        rewards:
            # Always heals the player to full
            - 'unique:(),     chance:(1000),      cmd:(/heal %player%)'
            - 'unique:(),     chance:(1000),      item:(diamond 1)'
            - 'unique:(),     chance:(1000),      item:(iron 1)'
```

##### Always

Rewards that have the `always` tag are given regardless of any other reward.

This crate will give the player a heal and either a diamond or iron depending on the roll.

```YML
    reward:
        minimum-rewards: 1
        maximum-rewards: 1
        rewards:
            # Always heals the player to full
            - 'always:(),     chance:(1),      cmd:(/heal %player%)'
            - 'unique:(),     chance:(1000),      item:(diamond 1)'
            - 'unique:(),     chance:(1000),      item:(iron 1)'
```
