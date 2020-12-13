---
description: Learn how to customise your tablist with Skript.
name: skript/examples/tablist
---

import Hint from "../../../src/Hint"

# Example: Tablist

## OVERVIEW

This tutorial will show you how to create a customised tablist _\(TAB key\)_ on your server using Skript.

<Hint severity="info">
Skript addon <strong>skRayFall</strong> is required!
</Hint>

## CODE

```vb
on join:
  set tab header to "" and footer to "" for player
```

## EXPLAINED

Simple add in text between the `""`'s and you're all set. The tab header and footer will only be set when the player joins, so if you're looking to update it, it's better to use a function _\(below\)_.

## FUNCTION

```vb
function tab(header: text, footer: text, P: player):
  set tab header to "%{_header}%" and footer to "%{_footer}%" for {_P}
```
