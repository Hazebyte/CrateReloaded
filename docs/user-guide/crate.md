# Global Example

Please check out the [Global Example](http://crate.hazebyte.com/guide/user/example/global/) as a example and format to follow.

# Lets get started!

## Quick Note

Hi Guys, the developer, Dinosaurs, here. The system may seem like a hefty
task to learn, however it is quite simple! Once learned, it is easy to
master. To be honest, you don't even need to master it... copy-paste!
Just copy-paste the lines and easily edit from there! 

# Read! Precreation

## Our Tags

Data inside **[Brackets]** are required!

Data insite {Curlys} are optional.
```
item:([item] [amount] {name} {lore} {data}) - An tag for a item.

cmd:([Command]) - An tag for a command.

chance:([Number]) - An tag for chance.

display:([item] [amount] {name} {lore} {data}) - An tag for a display item.

broadcast:([Message]) - An tag for a message to be broadcasted to every player.

onopen:([Message]) - An tag for a message to be send to the winning player.

noduplicate:() - An tag to prevent this line from executing twice in a single session.
```

## The Sensitive Config
Our parser is a work-in-progress and is heavily in-development. However,
with the correct rules and understanding, this parser will be the best
in the market.
```
 - 'item:(apple 1), chance:(1)'
```
Take a look at the example above. Every reward must begin with an
`type:(` and end with an `)`. To add in additional parameters, simply
add in a comma (`,`). As of the premium version, spaces are now allowed
between each parameter.

## Giving Multiple Items/Commands
Q: Does CrateReloaded allow unlimited items/commands per-line?

A: Yes, Of course!
### Example #1 Item Example
```
  - 'item:(apple 1),item:(bread 2),item:(cake 1),chance:(1)'
```
### Example #2 Command Example
```
  - 'cmd:(/kill %player%),cmd:(/say %player% hello),chance:(1)'
```
### Example #3 Broken! 
This example will execute only the item portion, because commands are
placed at second priority.
```
 - 'cmd:(/kill %player%),item:(apple 1),chance:(1)'
```

One caveat we have, is that it is single-typed. That means that 
you can have only commands per-line or items per-line. However, 
you can have unlimited commands or items per a single line.
      
## Explain the Chances
The chance system is quite different from other systems. However, it
allows an unlimited customizibility and it is quite simple to learn.

### The Basics
Basically, you want to start with a base number (`100`), and building
from that, we can create a chance system. Numbers higher than `100` will
be common, while numbers lower than `100` will be rarer. Think the larger
the number, the large the chance it will have, Vice-versa.

##### Example #1
This first example features a reward with an apple, bread, and a cake.
The apple, which is the common, has a chance of `100` making it more
likely to appear than the bread and cake.

The bread, which is less common, has a chance of `50` making it rarer
than the apple but common compared to the cake.

Lastly, the cake, has a chance of `25` making it the rarest and the least
likely to appear.
````
 - 'item:(apple 16), chance:(100)'
 - 'item:(bread 16), chance:(50)'
 - 'item:(cake 1), chance:(25)'
````

## Item/Enchantment Parsing
```
_ = Space
/n = New Line
%line% = New Line
; = Seperate Enchantments
```
### Example #1
Gives a diamond sword with the name "Sword 1" and the lore "Legendary Sword"
with a two enchantments.
```
diamond_sword 1 &1Sword_1 Legendary_Sword 35:5;34:5
```

### Example #2
Gives three dirt with the name "Just plain old dirt" with the lore of "dirt"
with two enchantments.
```
dirt 3 &Just_plain_old_dirt dirt 33:5;34:5
```

## A Few Variables

```
Variables
```

For a full list of variables, click here.

# Creating a crate
Hey there, below are the different types of crates and instructions on how to use each one.
 Ask in the forums if you need any help!

## Different Types of Crates.
### Supply Crate
Tag: `SUPPLYCRATE`

A form of a crate that is opened by placing down a chest.

### Mystery Crate
Tag: `MYSTERYCRATE`

A form of a crate that is opened by clicking the item-held in hand.

### Menu Crate
Tag: `MENUCRATE`

A virtual form of a crate that is opened by using the command `/cr menu`.

### Key Crate
Tag: `KEYCRATE`

A physical form of a crate that is opened by clicking a chest, set by the
admin.

### Roulette Key Crate
Tag: `ROULETTEKEYCRATE`

Similar to the key crate, but it opens a virtual menu which roulettes the
winning rewards in the middle.

### CS:GO Key Crate
Tag: `CSGOKEYCRATE`

Similar to the roulette, but the menu is rouletting from left to right.

## Key, Roulette, and CS:GO Crates

### Setting it up in-game for use

1. `/cr list` - Look for the key crate we are going to use.
2. Look for a block in which we will bind the crate to. `Note: this can be
any block`
3. `/cr set` - While looking at the block, type the command and we can now test it out!
4. If it has effects, the visuals will automatically start loading. Otherwise,
if you click it, it should display a message!
5. Enjoy your crate!
