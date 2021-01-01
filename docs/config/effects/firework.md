# Firework Effect

## Settings

| Key          | Expects | Description                            |
| ------------ | ------- | -------------------------------------- |
| fireworkType | enum    | BALL, BALL_LARGE, STAR, BURST, CREEPER |
| color        | hex     |                                        |
| color2       | hex     |                                        |
| color3       | hex     |                                        |
| fadeColor    | hex     |                                        |
| trail        | boolean |                                        |
| explosions   | integer |
| radius       | double  |                                        |
| power        | integer |                                        |

## Example

Firework colors are in RGB.

```YML
        1:
          class: Firework
          category: OPEN
          fireworkType: BALL
          color: 00ff40 # Light Green
          color2: 8000ff # Purple
          color3: ff0000 # Red
          fadeColor: BLACK
          trail: true
          radius: 0.5D
          power: 1
```
