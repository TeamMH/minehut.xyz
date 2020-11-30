---
description: Learn how to format chat with Skript.
name: skript/examples/format-chat
---

import Hint from "../../../src/Hint"

# Example: Format Chat

## OVERVIEW

Instead of having the default Minecraft chat format such as `<Trent>: Hey!`, you can create a custom format using Skript.

## CODE

```vb
on chat:
 set chat format to "%player%: %message%"
```

<Hint style="info">
You can use things such as `%player's prefix%` if you have Essentials & Vault installed.
</Hint>
