# FAQ

**Why are players unable to open set crates in certain locations?**

```
Certain protection capabilities interfere with our plugin's event handling. 

Solution:
Check the default minecraft spawn protection in server.properties.
Check World Guard.
    Enable flags such as use and chest-access.
```

**Why do players have to shift click to open crates?**

```
Read above
```

**How do chances work?**

```
https://hazebyte.github.io/CrateReloaded/#/config/crate?id=chance
```

**How does the claim system work?**

```
Players who are in the process of obtaining a reward but disconnected either through
server restart, a crash, a kick are given their rewards through the built-in claim system.

Crates or keys that are given to a player who is offline are also able to be claimed through
this system.

To activate this system, the player would simply type '/cr claim' ingame.
```

**How do I change the number of decimals in the chance placeholder?**

```
Check config.yml for decimal format
```

**Is there virtual key support?**
```
There is no inherent support but see https://www.mc-market.org/resources/10502/
Credits to Luwie
```
