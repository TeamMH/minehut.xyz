---
description: How to upload a world to Minehut
madeBy: Tringlle
---

# Upload a world to Minehut
First, you need a .zip of a **FOLDER** containing your world files. Similar to this:

    folder
      > data
      > entities
      > poi
      > region
      > level.dat
      > session.lock
      > uid.dat
Now, your folder may not look exactly like this, but create a **.zip** of **folder** not select all the files and zip that, but **zip the FOLDER**, then upload that **{foldername}.zip** to minehut. Now select that **.zip** file in the Minehut FileManager and click the **unzip** button at the bottom. Then restart your server.

## Getting to your world
This is where things get a little tricky. There is not a /worlds command anymore, so unless you want that to be your [default world](/faq/panel/default-world), you need to install 
Multiverse Core. To do that, check out [here](/faq/minehut/a-full-tutorial). After installing Multiverse, restart your server, then import the world using `/mvim {foldername} normal` **WITHOUT THE .zip EXTENSION**
Then you can teleport to that world using `/mvtp {foldername}` **WITHOUT THE .zip EXTENSION**
