# Configuration

* **[config.yml](config/config.md)**
* [crate.yml](config/crate.md)

## Custom Variables (Premium)

As of v2.0.35, CrateReloaded provides a way to have custom variables that directly applies to the crate. This provides a way to reduce redundancy and allow a single source of truth when applying changes.

### Example

**config.yml**
```
custom-variables:
    '{sword_enchant}': 'sharpness:1 knockback:1'
```

**crate.yml**
```
  rewards:
    - 'item:(diamond_sword 1 {sword_enchant}), chance:(1)`
```

With the custom variable `{sword_enchant}` in defined in config.yml and used in crate.yml, this will give the player a diamond sword with enchantments. See more in [crate.yml](config/crate.yml) to learn how to customize crates.

## Template

```yaml
%CONFIG
```
