# 1.X to 2.X

To prevent any data corruption, it is advised that the server is shutdown before continuing.
This guide should be attempted on a backup server before on your production server. You may
also attempt this on a backup server then copy the plugin files over.

!> It is recommended that you perform this upgrade on the same Bukkit server version. If
you previously ran CrateReloaded on Bukkit 1.12, you should perform this conversion
on Bukkit 1.12 -- not 1.13 or otherwise.

## Update

1. Download the latest file from the respective page.
[[Premium]](https://www.spigotmc.org/resources/.3663/)
[[Free]](https://www.spigotmc.org/resources/.861/)
2. Put `CrateReloaded.jar` into `/plugins/`.
3. Start your server `java -jar spigot.jar`.
4. The plugin will automatically backup and convert your crate files.

?> Data such as crate/npc locations, default config settings, and language files will not be
automatically converted but backed up in the root server directory.