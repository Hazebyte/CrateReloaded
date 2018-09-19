# Configuration

This page will explain each section key of the default crate.yml.

- [config.yml](config/config.md)
- **[crate.yml](config/crate.md)**

## Features

- Unlimited crates and rewards
- Multi-world support
- Animations
- Preview Menu
- Message System
- Particle Effects
- Rewards support items and commands

### Crate Types

```YML
FoodKey:
    type: KEYCRATE
    ...
```

The type of crate defines the unique interaction with the player when the crate is activated. These are the following types...

| **Type** | **Support for Animation** | **Description**                                                                       | **Activation**                                                                                                                  |
| -------- | ------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| SUPPLY   | No                        | Placeable crate that acts as a Minecraft chest                                        | Placing down a chest                                                                                                            |
| MYSTERY  | Yes                       | Crate that is activated by any type of click                                          | Right or left click with the crate in-hand                                                                                      |
| KEY      | Yes                       | Crate that is preset to a block. This block acts as a hub for users to interact with. | Right or left click a preset block with the crate in-hand. Left click is set to preview while right click is to open the crate. |

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

Some crates types support different animations, which appear in a GUI when the crate is activated.

```YML
FoodKey:
    ...
    animation: 'NONE'
    end-animation: 'BLANK'
    ...
```

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

This creates a hologram which hovers above the block or NPC location in which the crate is set.

```YML
FoodKey:
    ...
    holographic:
        - 'Lines'
        - 'of'
        - 'text'
    ...
```

!> For holograms to work, you must have [HolographicDisplays](https://dev.bukkit.org/projects/holographic-displays) installed on your server

### Confirmation

The confirmation menu allows users to verify the usage before activating a crate. This may be
toggled on a per-crate basis.

```YML
FoodKey:
    ...
    confirmation:
        enabled: true
        accept-button: 'GREEN_STAINED_GLASS_PANE 1 name:&aYes lore:&fClick_here_to_open_{crate}!'
        decline-button: 'RED_STAINED_GLASS_PANE 1 name:&4No'
    ...
```

### Preview

The **preview** feature allows players to see the rewards in a crate.
Previews are automatically generated based off item or display tags from rewards.
The plugin will automatically resize and offer pagination if there isn't enough slots.
The menu may be toggled in the config.

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
| player      | String(Name)       |
| skull       | String(Base64)     |
| color       | String(R,G,B)      |
| flag        | String(Enum)       |
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

_Potion with multiple effects:_

```yml
display:(potion 1 name:Potion lore:Test effect:haste power:3 duration:180 effect:jump_boost power:3 duration:180)'
```

_Enchanted Sword with unbreakable and hidden attributes:_

```yml
display:(diamond_sword 1 sharpness:1 knockback:1 unbreakable:true flag:HIDE_UNBREAKABLE)
```

[_Minecraft Head:_](https://github.com/Hazebyte/CrateReloaded/issues/97)

```yml
display:(skull:3 1 name:&aWilltella lore:&aA_delicious_snack!! skull:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNTE1ZGNiMmRhMDJjZjczNDgyOWUxZTI3M2UzMDI1NjE3ZDgwNzE1MTZmOTUzMjUxYjUyNTQ1ZGE4ZDNlOGRiOCJ9fX0)
display:(skull:3 1 name:&aNotch player:notch)
```

_Flags_

| **Name**              |
| --------------------- |
| HIDE_ENCHANTS         |
| HIDE_ATTRIBUTES       |
| HIDE_UNBREAKABLE      |
| HIDE_DESTROYS         |
| HIDE_PLACED_ON        |
| HIDE_POTION_EFFECTS   |

```yml
display:(GOLD_RECORD 1 name:&4Close! flag:HIDE_POTION_EFFECTS)
```

_Leather Armor Dye_

```yml
display:(leather_chestplate 1 color:0,0,0)
display:(leather_leggings 1 color:255,255,255)
```

### Effects

This section defines the effects and sounds that the crate may have.
Effects are run under a given condition or notably, the `category`.
The manifestation of the effect is given by the `class`.

For more information, click [here](config/effects.md)

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
            - 'unique:(),     chance:(1000),      cmd:(/heal {player})'
```

#### Tag

Tags are used to identify the important values set in the config that is passed to the plugin.
A list of tags include...

| **Tag**    | **Limit** | **Description**                                                      |
| ---------- | --------- | -------------------------------------------------------------------- |
| item       | ∞         | Represents an item                                                   |
| cmd        | ∞         | Represents a command                                                 |
| chance     | 1         | Represents the raw weighted chance                                   |
| display    | 1         | Represents a display item                                            |
| broadcast  | 1         | String that is broadcasted when this reward is given                 |
| append     | 1         | String that appends to the crate's broadcast message                 |
| msg        | 1         | String that is shown to the player when one opens the crate          |
| unique     | 1         | Reward that is only given once in a single crate probability roll    |
| permission | ∞         | Reward that is given only if the player does not have the permission |
| always     | 1         | Reward that is always given regardless of the probability.           |

Tags start with the name and have a colon and parenthesis to represent intake value `e.g. unique:()`

##### Items

Click [here](#item-parser) to read more about item parsing.

##### Commands

Any command may be specified here. Commands are executed through the console.

```YML
    cmd:(/heal {player})     # Commands may start with '/'
    cmd:(heal {player})      # They also don't have to :)
```

You may also specify multiple commands per line.

```YML
    cmd:(/heal {player}), cmd:(tell {player} You're awesome!)
```

##### Chance

Each reward is expected to have a chance.

```YML
    chance:(10)
```

!> If no chance is specified, the plugin will spit a soft error. The chance will default to zero and may
still appear in preview systems but won't be included in reward rolls.

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

- The **total weight** is **100 = (50 + 20 + 15 + 10 + 5)**.
- **Reward Percentage** = (**weight / total weight**) \* 100%.

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
            - 'permission:(user.vip), cmd:(pex add {player} user.vip)'
```

!> Be sure to include fallback rewards if a player has all permission-based rewards. The plugin handles if there are no rewards
however you are encouraged catch and handle the situation.

###### Fallback Rewards

If the player is an operator or has permission of each reward in a crate, the plugin will not take a key
and tell the player that there are no rewards. A fallback reward may be provided as such...

If the player has the permission `user.vip`, the player will simply receive a message.

```YML
    reward:
        rewards:
            - 'permission:(user.vip), cmd:(pex add {player} user.vip), chance:(100)'
            - 'cmd:(tell {player} You have won all the rewards), chance:(1)'
```

##### Unique

Rewards that have the `unique` tag are given once every opening. This means that players may
receive the same reward if they use the same crate or key multiple times.

!> If you are looking to give a reward once, look at permission based rewards.

In the following example: With total of _3_ prizes,
this crate will give the player each reward, _a heal, diamond, and iron_, once.

```YML
    reward:
        minimum-rewards: 3
        maximum-rewards: 3
        rewards:
            # Always heals the player to full
            - 'unique:(),     chance:(1000),      cmd:(/heal {player})'
            - 'unique:(),     chance:(1000),      item:(diamond 1)'
            - 'unique:(),     chance:(1000),      item:(iron 1)'
```

##### Always

Rewards that have the `always` tag are given regardless of any other reward.

The crate will always give the player _a heal_ and either _a diamond or a iron_ depending on their luck!

```YML
    reward:
        minimum-rewards: 1
        maximum-rewards: 1
        rewards:
            # Always heals the player to full
            - 'always:(),                         cmd:(/heal {player})'
            - 'unique:(),     chance:(1000),      item:(diamond 1)'
            - 'unique:(),     chance:(1000),      item:(iron 1)'
```

?> The chance tag for rewards that have the `always` tag is optional.
