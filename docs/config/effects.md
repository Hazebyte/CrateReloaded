# Effects

CrateReloaded supports various effects and animations. These may be set under the `effect` section
in the crate.yml.

For reference: [particles](reference/particles.md) and [sounds](reference/sounds.md).

To start, we'll explain using examples specifically one in the default `crate.yml`.
Effects have various different settings but most important are the `class` and `category`.
The `class` specifies **what** kind of effect will appear while the `category` specifies
**when** will that effect appear.

```YML
    effect:
        1:
          class: Original
          category: PERSISTENT
        2:
          class: Sound
          category: ANIMATION
          sound: BLOCK_WOOD_PLACE
        3:
          class: Sound
          sound: ENTITY_BAT_TAKEOFF
          CATEGORY: END
```

## Class

```YML
AnimatedBall
Arc
Atom
BigBang
Bleed
Circle
Cloud
ColoredImage
Cone
Cube
Cylinder
DiscoBall
Dna
Donut
Dragon
Earth
Equation
Explode
Firework
Flame
Fountain
Grid
Heart
Helix
Hill
Icon
Jump
Line
Love
Music
Modified
Original
Plot
Shield
SkyRocket
Smoke
Sound
Sphere
Star
Text
Tornado
Trace
Turn
Vortex
Warp
Wave
```

> todo Verify List of Effects

## Categories

| **Category** | **Description**                     |
| ------------ | ----------------------------------- |
| OPEN         | Runs upon crate opening             |
| PERSISTENT   | Runs indefinitely                   |
| ANIMATION    | Runs every tick of an animation     |
| END          | Runs upon finishing of an animation |

## Reference and Examples

### Original

```YML
        1:
          class: Original
          category: PERSISTENT
          particle: VILLAGER_HAPPY
          radius: 0.8
          particles: 10
          period: 1
```

### Firework

```YML
        1:
          class: Firework
          category: OPEN
          fireworkType: BALL
          color: RED
          color2: ORANGE
          color3: BLACK
          fadeColor: BLACK
          trail: true
          radius: 0.5D
          power: 1
```

#### Firework Types

```YML
BALL
BALL_LARGE
STAR
BURST
CREEPER
```

### Sound

```YML
        1:
          class: Sound
          category: ANIMATION
          sound: BLOCK_WOOD_PLACE
          soundVolume: 100
          soundPitch: 1
```

## FAQ

