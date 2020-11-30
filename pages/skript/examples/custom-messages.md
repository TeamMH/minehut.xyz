---
description: Learn how to create custom join and quit messages on your server.
name: skript/examples/custom-messages
---

# Example: Join & Quit Messages

## OVERVIEW

Instead of having the default join and quit messages, you can create fancy, custom ones using Skript.

## CODE

```vb
on join:
  set join message to "[+] %player%"

on quit:
  set quit message to "[-] %player%"
```
