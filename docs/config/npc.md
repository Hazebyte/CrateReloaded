# NPC Crates

CrateReloaded has support for NPC crates. This feature hooks into the **Citizen** plugin to allow you to open a crate when you interact with a NPC.
Therefore, you will need to have the **Citizen** plugin installed. [For installation, click here!](getting-started/installation)

![image](https://proxy.spigotmc.org/80982abba446a8540b6b0c1d67b6a7bc5c2db323?url=http%3A%2F%2Fi.imgur.com%2Fcjs3WD0.png)


## How do I create a NPC crate?

NPC crates are amazing; it is no wonder why you are trying to create one.
We have made it really simple for you to create a NPC crate.
We will show you how to create a NPC and hook it to a crate from scratch.

![image](https://i.imgur.com/ZkKchJQ.gifV)

### Create the NPC

```
/npc create <name>
```

And the NPC is created!

### Hook the NPC to crates

First, find the ID of the NPC

```
/npc list
```

And finally, hook the NPC to crates!

```
/cnpc set <id> <crate>
```

## Unhook the NPC from crates

```
/cnpc remove <id> <crate>
```
