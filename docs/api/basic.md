# Getting Started

In order to use CrateReloadedAPI, you should first install the latest version of CrateReloaded. 

For support, please send us a message in [Github](https://github.com/Hazebyte/CrateReloadedAPI/issues) or [Discord](https://discord.gg/0srgnnU1nbB8wMML).

## Project Setup

To utilize CrateReloaded, you must first link the API to your setup. To do this, you may download the API directly or setup Gradle/Maven.

1. [Direct Download](https://ci.hazebyte.com/job/CrateReloadedAPI/)
2. [Gradle/Maven](https://github.com/Hazebyte/CrateReloadedAPI)

After you have done this, make sure to add the following line to your plugin.yml.

```yaml
depend: [CrateReloaded]
```

## Accessing the API

The API is a class called CrateAPI. All of the methods may be accessed statically.

```java
CrateAPI api = CrateAPI.getInstance();
```

## Create a crate

A crate may be created using an `id` and a `type`. This will manage the crate in-memory however the
crate will be lost unless you save it to memory.

```java
String id = "UniqueCrate"; // This is the ID used to give the crate in-game.
CrateType type = CrateType.MYSTERY // KEY, MYSTERY, SUPPLY

Crate crate = CrateAPI.getCrateRegistrar().createCrate(id, type); // Creates a crate
CrateAPI.getCrateRegistrar().add(crate) // Registers the plugin
```

For a more in-depth tutorial on how to create crates and add rewards, click here.

## Manipulate existing crates

You may manipulate crates dynamically. Keep in mind that all modifications to crates are in-memory and
will be lost unless saved to a flat file.

### Get all crates

```java
List<Crate> crates = CrateAPI.getCrateRegistrar().getCrates();
```

### Get a single crate

```java
String id = ... // The crate's id
Crate crateByID = CrateAPI.getCrateRegistrar().getCrate(id);

ItemStack item = ... // The crate's item
Crate crateByItem = CrateAPI.getCrateRegistrar().getCrate(item);
```

### Check if item is a crate

```java
ItemStack item = ... // An item
boolean is = CrateAPI.getCrateRegistrar().isCrate(item);
```

## Next steps

If you think this tutorial is enough, you may want to read the [API documentation](https://hazebyte.github.io/CrateReloadedAPI/). Otherwise, check the sidebar under API for links to more tutorials.
