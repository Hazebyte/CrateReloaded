# Sound

## Settings

| Key                          | Expects | Description                        |
| ---------------------------- | ------- | ---------------------------------- |
| [sound](reference/sounds.md) | enum    | The type of sound to play          |
| soundVolume                  | float   | The volume at which the plays      |
| soundPitch                   | float   | The pitch at which the sound plays |

## Example

```YML
        1:
          class: Sound
          category: ANIMATION
          sound: BLOCK_WOOD_PLACE
          soundVolume: 100
          soundPitch: 1
```
