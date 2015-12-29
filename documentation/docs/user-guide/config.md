# Configuration

Many of CrateReloaded's features exist as configuration options (Prefix, Creating Crates, Translations). 
Every configuration option is listed on the User Guide section of this documentation.

## Configuration Files

Once you have run your server with CrateReloaded installed, you will find the main configuration file inside the 
**plugins/CrateReloaded** folder:

* Config.yml
* Crate.yml
* Block.yml
* Storage.yml

In this page, we will only be talking about the **config.yml**.

## Config.yml

The **config.yml** holds global configuration settings such as the prefix, locale, and debug settings.

```
prefix: '%black%[%gold%Crates%black%] %dark_grey%'
locale: en
updater: true
debug: false
menu:
    name: 'Crate Menu'
    amountDisplay: 
        item: 'chest 1 %gold%Crate %white%You_have_%camount%_left.'
    openCrateDisplay: 
        item: 'diamond_block 1 %green%Open_Crate'
    keyDisplay: 
        item: 'tripwire_hook 1 %gold%Keys %white%You_have_%kamount%_left.'
pushback:
    enabled: true
    modifiers:
        x: 1.0
        y: 1.0
        z: 1.0
roulette:
    length: 5
csgo:
    length: 6
```

|       Setting         |         Default           |        Description            |
------------------------|---------------------------|-------------------------------|
| prefix                |'%black%[%gold%Crates%black%] %dark_grey%'| Set the prefix before every command. |
| locale                |            en             | Set the language pack that your plugin uses. |
| debug                 |            false          | Whether the plugin should print out information in the console. |
| menu.name             |        'Crate Menu'       | The name for the in-game GUI.  |
| menu.amountDisplay    |'chest 1 %gold%Crate %white%You_have_%camount%_left.'| Item that displays the amount of crate the user has left inside the in-game GUI. |
| menu.openCrateDisplay |'diamond_block 1 %green%Open_Crate'| Clickable item that allows the user to open a crate inside the in-game GUI. |
| menu.keyDisplay       |'tripwire_hook 1 %gold%Keys %white%You_have_%kamount%_left.'| Item that displays the amount of keys the user has inside the in-game GUI. |
| pushback.enabled      |          true             | Whether the key crate should push the player.   |
| pushback.modifiers    |      x=1, y=1, z=1        | Set the force of the push in key crates. |
| roulette.length       |            5              | Set the length of the Roulette Menu |
| csgo.length           |            6              | Set the length of the CSGO Menu |