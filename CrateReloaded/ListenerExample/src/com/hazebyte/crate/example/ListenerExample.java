package com.hazebyte.crate.example;

import com.hazebyte.crate.cratereloaded.api.event.CrateInteractEvent;
import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.plugin.java.JavaPlugin;

import java.util.logging.Level;

/**
 * Created by willi on 3/29/2017.
 */
public class ListenerExample extends JavaPlugin implements Listener {
    
    public void onEnable() {
        if (!Bukkit.getPluginManager().isPluginEnabled("CrateReloaded")) {
            getLogger().severe("CrateReloaded is not enabled.");
            getLogger().severe("ListenerExample will be disabled.");
            this.setEnabled(false);
            return;
        }
        
        Bukkit.getServer().getPluginManager().registerEvents(this, this);
    }
    
    @EventHandler
    public void onCrateOpen(CrateInteractEvent event) {
        getLogger().log(Level.INFO, "Crate: " + event.getCrate().getCrateName() + " " +
                "[" + event.getLocation().getX() + ", " + event.getLocation().getY() + ", " + event.getLocation().getZ() + "] " + 
                "Action: " + event.getAction().name());
    }
}
