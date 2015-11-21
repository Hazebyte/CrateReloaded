# The Config

```
#################################################
# +--------------------------------------------+#
# |              Admininistration              |#
# +--------------------------------------------+#
#################################################

# Prefix
# The prefix before every message
prefix: '%black%[%gold%Crates%black%] %dark_grey%'

# Language
# Currently Supports: en, fr
locale: en

# Updater
# Do you wish to check for updates?
updater: true

# Debugger (Developer Note: Outdated and Disabled. ETA: 1.1.0)
# Developing Use Only. Disable, if you do not want to recieve debug messages.
debug: false

#################################################
# +--------------------------------------------+#
# |                   Crates                   |#
# +--------------------------------------------+#
#################################################
# Menu Display Settings
# This sets the items for the virtual GUI type crates.
menu:
    name: 'Crate Menu'
    amountDisplay: 
        item: 'chest 1 %gold%Crate %white%You_have_%camount%_left.'
    openCrateDisplay: 
        item: 'diamond_block 1 %green%Open_Crate'
    keyDisplay: 
        item: 'tripwire_hook 1 %gold%Keys %white%You_have_%kamount%_left.'

#################################################
# +--------------------------------------------+#
# |               RouletteCrates               |#
# +--------------------------------------------+#
#################################################

roulette:
    length: 4
```

# How To's

## How to change the prefix

Change the `prefix:`.

## How to change the language

We currently only support `en, fr` as English and French.

Please visit [Translations](http://crate.hazebyte.com/guide/user/user-guide/translate/) on how to translate to your own language.

## How to change the items for the Menu Crate

Under Menu, there are options to change the settings.

Simply edit and remember to follow the format.

`[Item] [Amount] [Name] [Lore] [Data]`

## How to change the length of the CS:GO and Roulette Crates

Under Roulettes, there is an length which can be changed to any amount.

It is recommended that the length does not exceed `9` seconds.
