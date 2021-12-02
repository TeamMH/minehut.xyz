---
description: Create custom crafting recipes
name: pages/plugins/tutorials
madeBy: DutchJelly
---

<!-- THE PATH TO THE `HINT` ELEMENT, LOCATED IN THE SRC DIRECTORY -->

import Hint from "../../../src/Hint";

# Craftenhance
Craftenhance allows you to easily create and modify custom crafting recipes, and also offers an in-game item editor to add custom metadata to your items.

## Features
**Craft with your custom items.**
This means you can add recipes with enchantments, custom names, a durability, potions or anything you can think of that exists in the game.

**Full GUI support.**
Editing recipes, creating recipes, viewing recipes and ordering the recipes in the viewer GUI are all possible through inventory GUIs.

**Middle click to edit.**
Opening the editor for a recipe is not done through a command, but done through a simple middlemouseclick on a recipe in the recipe viewer. This does require a permission.

**Set permissions for a recipe.**
In order to completely let server owners be owners of their server, permissions for the custom recipes exist. People that don't have the permission for a custom recipe, can't craft or see it. The 'seeing' part can be configured.

**Hide recipes but still make them craftable.**
You can simply hide recipes for the players that don't have the 'bypass' permission for it. They'll still be able to craft the recipes if they have permissions for the recipe.

**Disable vanilla recipes.**
There's a gui which you can use to disable all the vanilla recipes you want. No more over-powered, cheap diamond/netherite armor! (that's how I use it)

**Edit items in-game.**
To make cool recipes an item editor is needed. This item editor allows users to set colored lore, set colored names, set the durability, add enchantments, add itemflags or even set the localizedname of items. And for the record: itemflags are the things that allow you to hide enchantments or attributes on items!

## Commands
**/ceh**
Use tabcompletion on this!

**/ceh viewer**
Open the recipe viewer GUI.

**/recipes**
Open the recipe viewer GUI.

**/ceh createrecipe [key] [perms]**
Create a recipe with the specified key and permission. If no arguments are given it'll generate a key for you and let the recipe require not permission.

**/ceh specs [key]**
Show the specs of the recipe with the specified key. The specs only include the permission currently.

**/ceh setpermission [key] [perms]**
Change the permission of the recipe with the specified key to new_permission.

**/ceh changekey [key] [newKey]**
This command allows users to change the key of the recipe with the specified key.

**/ceh cleanitemfile**
When creating recipes, your custom items get saved to an "items.yml" file. When recipes get altered, the items don't get removed. Use this command to remove unused items.

**/ceh reload**
Reloads the whole plugin!

## Item Editing

**/edititem**
This is the basic command for editing items. Please use tab completion on this.

**/edititem name [name]**
Edit the name of the item in your main hand.

**/edititem durability [1-100]**
Set the durability of the item in your main hand to [1-100]% of it's max durability.

**/edititem enchant [enchantment] [level] [... etc.]**
Set your specified enchantments to your held item. It removes all enchants and then adds the specified ones. Please let me know if this is weird and needs modification.

**/edititem itemflag [itemflag] [itemflag] [... etc.]**
Toggle the specified itemflags on your held item.

**/edititem lore [line_number] [lore]**
Set the specified line of the lore of your held item to be the specified tekst. The tekst section can be left empty if an empty line needs to be added.​

## Permissions
The permissions are configurable, however, these are the default permissions.

<Hint severity="info">Keep in mind users will still be able to craft the recipes without permission to view the list.</Hint>

## craftenhance.edit

/ceh createrecipe, /ceh cleanitemfile, /ceh reload, /ceh setpermission, /ceh specs, /ceh changekey. This is also the permission required to middleclick recipes to open the editor.

## craftenhance.view

/ceh viewer, /recipes

## craftenhance.edititem

All commands that start with /edititem.

# Config

Alongside the config.yml, 3 other files will be created: guitemplates.yml, recipes.yml and items.yml.

## GuiTemplates.yml
You can fully customize all the gui's that you see using this file. I think they're faily self-explanatory given the preset files, so I'll only go over the basics. "fill-space" is a range of slot indexes where items can get filled, like the recipes in the recipes viewer. "template" specifies the items that are put into the inventory. Make sure that those don't overlap with fill-space. In template the buttons are also made.
"buttons" specifies where the buttons are located, where the value is the type of the button. Please refer to the preset file to see your options.

## Recipies.yml

You can manually make or edit all your recipes in here. The recipes use item keys of items in the items.yml file. However, because all recipes can be created through gui's, I'll not go over this more in-depth.

## items.yml

Items are stored here with a unique key. This is also managed by the plugin, so there's no real need to touch this.

## Config.yml

Some of the messages and permissions are stored in here. One of the important settings is whether you want people to see a recipe that they don't have permissions to.
