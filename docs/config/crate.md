# Configuration

* [config.yml](config/config.md)
* **[crate.yml](config/crate.md)**
* block.yml
* npc.yml

## Features

* Unlimited crates and rewards
* Multi-world support
* Scrolling Animations
* Preview Menu
* Messaging
* Particle Effects
* Rewards support items and commands

### Type

Types define the unique characteristic and interactions that activate a crate. These are the following types...

| **Type** | **Animation Support** | **Description**                                                                       | **Activation**                                                                                                               |
| -------- | --------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| SUPPLY   | No                    | Placeable crate that acts as a minecraft chest                                        | Placing down a chest                                                                                                         |
| MYSTERY  | Yes                   | Crate that is activated by any type of click | Right or left click with the crate in-hand                                                                                   |
| KEY      | Yes                   | Crate that is preset to a block. This block acts as a hub for users to interact with. | Right or left click a preset block with the crate in-hand. Left click is set to preview while right click is to open the crate. |

### The Physical Crate or Key

Crates and keys are physical items in Minecraft. These physical items are what players use to interact and activate rewards.
Read more about the [item parsing](#item-parser)

```YML
FoodKey:
    ...
    item: '131 1 name:&c[&6Foodie_&eKey&c]_&f#124 lore:&7Mmmm,_something_smells_good.\n&8Place_the_chest_down_to_obtain_a_pack_of_food! glow:true'
    ...
```

### Animation

Crates with animation support allow for custom GUI animations.

| **Animation** |
| ------------- |
| ROULETTE      |
| CSGO          |
| REVERSE_CSGO  |
| WHEEL         |
| REVERSE_WHEEL |

| **End Animation** |
| ----------------- |
| BLANK             |
| RANDOM            |

### Holographic

```YML
FoodKeyT2:
    ...
    holographic:
        - 'Lines'
        - 'of'
        - 'text'
    ...
```

### Preview

Previews are automatically generated with tags from rewards. It may be toggled in the config.

```YAML
  FoodKey:
    ...
    preview:
        enabled: true
        rows: 4
    ...
```

### Item Parser

**Template**

```yml
display:(itemID:durability amount [OPTIONS])
display:(itemID:durability amount name:myName lore:lore1|lore2 skull:base64 color:r,g,b effect:haste power:1 duration:30 splash:true unbreakable:true glow:true hide:true)
```

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

**Examples**

*Potion*
```yml
display:(373 1 name:Potion lore:Test effect:haste power:3 duration:180)'
```

*Enchanted Sword with unbreakable and hidden attributes*
```yml
display:(diamond_sword 1 17:1 18:1 unbreakable:true hide:true)
```

[*Minecraft Head*](https://github.com/Hazebyte/CrateReloaded/issues/97)

### Effects

### Rewards

#### Tag

##### Items

##### Commands

##### Chance

##### Unique vs Permission

## Template

```yaml
{{CRATE}}
```
