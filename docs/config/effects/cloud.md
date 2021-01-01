# Cloud Effect

## Settings

| Key            | Expects | Description                      |
| -------------- | ------- | -------------------------------- |
| cloudParticle  | enum    |                                  |
| cloudColor     | hex     |                                  |
| mainParticle   | enum    | The rain / snow particle         |
| cloudSize      | double  |                                  |
| particleRadius | double  | The radius of the rain particles |

## Example

```YML
        1:
          class: Cloud
          category: PERSISTENT
          relativeOffset: "0,1,0"
```
