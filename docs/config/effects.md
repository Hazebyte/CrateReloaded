# Effects

CrateReloaded supports various effects and animations. These may be set under the `effect` section
in the crate.yml.

Effects have various different settings however the two most important sections are `class` and
`category`. The `class` specifies **what** kind of effect will appear while the `category`
specifies **when** will that effect appear.

## General Settings

| **Key**        | **Expects**                    | **Description**                                   |
| -------------- | ------------------------------ | ------------------------------------------------- |
| class          | [link](#class)                 | What type of effect will appear                   |
| category       | [link](#category)              | When this effect will appear                      |
| relativeOffset | "x,y,z"                        | Offsets the effect from the original location     |
| particle       | [link](reference/particles.md) |
| particleCount  | integer                        | The number of particles to spawn per packet       |
| particleSize   | double                         | Scales the particle size (MC 1.13+)               |
| visibleRange   | integer                        | The radius at which to display particles          |
| yawOffset      | double                         | The yaw offset                                    |
| pitchOffset    | double                         | The pitch offset                                  |

## Class

The following classes are effects that are officially supported and have been tested. For the full list of effects including the effects that are not officially documented, see [here](config/effects/class.md).

- [original](config/effects/original.md)
- [sound](config/effects/sound.md)
- [firework](config/effects/firework.md)
- [circle](config/effects/circle.md)
- [cloud](config/effects/cloud.md) `v2.0.36`
- [disco ball](config/effects/disco_ball.md)
- [donut](config/effects/donut.md)
- [sphere](config/effects/sphere.md)
- [text](config/effects/text.md)

## Category

| **Category** | **Description**                                  |
| ------------ | ------------------------------------------------ |
| OPEN         | Runs upon crate opening                          |
| PERSISTENT   | Runs indefinitely                                |
| ANIMATION    | Runs every tick of an animation                  |
| PUSHBACK     | `v2.0.9` Runs when a player is pushbacked        |
| REWARD       | `v2.0.17` Runs when a player receives the reward |
| INSPECT      | `v2.0.9` Runs when a player inspects a crate     |
| END          | Runs upon finishing of an animation              |
