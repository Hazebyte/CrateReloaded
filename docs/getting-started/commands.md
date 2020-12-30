?> Arguments with carrots `<>` represent a required parameter. `()` are optional parameters with default fields.
Arguments with multiple `()` require prior optional parameters to be filled out.

!> It is the same command to give a key and to give a crate.

# Commands and Permissions

| **Command**                        | **Arguments**                                | **Permission**  | **Details**                                              |
| ---------------------------------- | -------------------------------------------- | --------------- | -------------------------------------------------------- |
| **/cr**                            |                                              | cr.base         | Base command                                             |
| **/crate**                         |                                              | cr.base         | Base command                                             |
| **/cr info**                       | `<crate>`                                    | cr.info         | Shows information about a crate                          |
| **/cr preview**                    | `<crate>`                                    | cr.preview      | Previews rewards of a crate                              |
| **/cr claim**                      |                                              | cr.claim        | Claim missed rewards/crates                              |
| **/cr buy**                        | `<crate> (number)`                           | cr.buy          | Purchase a number of crates                              |
| **/cr reload**                     |                                              | cr.reload       | Reloads the plugin's files                               |
| **/cr list**                       |                                              | cr.list         | List all available crates                                |
| **/cr give to**                    | `<player> <crate> (number) (online/offline)` | cr.give.to      | Sends a player a number of crates                        |
| **/cr give all**                   | `<crate> (number)`                           | cr.give.all     | Sends all players a number of crates                     |
| **/cr set**                        | `<crate>`                                    | cr.block.set    | Configures a block to handle crates                      |
| **/cr remove**                     | `<crate>`                                    | cr.block.remove | Removes the capability to handle crates from a block     |
| **/cr util item**                  |                                              | cr.util.item    | Returns the item string for the config to console        |
| **/cr util export** (Premium Only) |                                              | cr.util.export  | Exports a config with all items from the targetted chest |

## NPCs

?> Requires [CrateReloadedNPC](getting-started/installation.md)

| **Command**      | **Arguments**   | **Permission** | **Details**      |
| ---------------- | --------------- | -------------- | ---------------- |
| **/cnpc**        |                 |                | Base command     |
| **/cnpc set**    | `<npc> <crate>` | cr.npc.set     | Register a NPC   |
| **/cnpc remove** | `<npc> <crate>` | cr.npc.remove  | Unregister a NPC |
