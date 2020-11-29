---
description: Learn how to create and use cooldowns in your commands and skripts.
name: skript/examples/cooldown
---

import Hint from "../../../src/Hint"

# Example: Cooldowns

<Hint style="info">
This tutorial was made by <a href="https://github.com/Rqdioqctive">Rqdioqctive</a>. Lean how to contribute <a href="/contribute">here</a>.
</Hint>

## OVERVIEW

Cooldowns can be used to prevent things such as kit spamming, chat delays and many more things to prevent spam and abuse in your server.

## CODE

```r
command /daily:
  cooldown: 24 hours
  cooldown message: &c%remaining time% left before you can use this command again!
  cooldown bypass: daily.bypass
  cooldown storage: {daily::%player's uuid%}
  trigger:
    give cake to player
    send "&7Thank you for claiming your daily reward!"
```

`cooldown: 24 hours` means that the player will have to wait 24 hours, unless he has the `cooldown bypass` permission to do the command again. `cooldown message` is the message that's sent when the cooldown isn't completed and `%remaining time%` is the time remaining until it is over. `cooldown storage` is used so that when the server restarts, the player still has to wait the remaining time.
