---
description: Learn how to use Essentials.
name: plugins/popular/essentials
---

import Hint from "../../../src/Hint"

# Essentials

![](/essentialsx.png)

## OVERVIEW

This tutorial will end up being very long, however we've split it into parts, for example [Essentials Spawn](/plugins/popular/essentials#h3-essentials-spawn).

## ESSENTIALS PERMISSION NODES

Essentials contains tons of useful commands, [here](https://essinfo.xeya.me/permissions.html) is a list of every command, along with every permission node. For more information on how to allow users to use commands, visit [this](/popular-questions/in-game/permissions) tutorial.

### ESSENTIALS SPAWN

#### OVERVIEW

This will teach you how to use EssentialsSpawn on your Minehut server!

#### HOW TO SET UP SPAWN

First of all, make sure you are OP _\(follow_ [_this_](/popular-questions/in-game/op) tutorial if you don't know how\), when you are OP, run **/setspawn** in-game to set your spawn point and now you and your players can use **/spawn** to teleport to your new spawnpoint.

#### PERMISSIONS

-   **essentials.setspawn** _Gives whoever has this permission to use /setspawn._
    -   **essentials.spawn** _Gives whoever has this permission to use /spawn._

### ESSENTIALS KITS

To create a kit, run the command `/kitcreate (kit name) (cooldown)`.

<Hint style="info">
Set <inlineCode>-1</inlineCode> as the cool down for a one time use kit!
</Hint>

To delete a kit, run the command `/delkit (kit name)`

#### PERMISSIONS

1. `essentials.kit` This gives the user access to `/kit`.
2. `essentials.kits.(kit name)` This gives the user access to that particular kit.
3. `essentials.kits.*` This gives the user access to all kits.

<Hint style="info">
The first permission node is <strong>required</strong> for the second and third nodes to work.
</Hint>
