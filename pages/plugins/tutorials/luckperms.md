---
description: Luckperms Walkthrough Tutorial
madeBy: Tringlle
---

# Luckperms

## Creating A Rank
To create a rank, you have 2 options. You can either use the web editor, or the command line. Lets stick with the command line for now. To create a rank with the command line, use `/lp creategroup {groupname}`, its that simple!

## Adding a Prefix
This is where things get a bit more complicated. We're again, going to stick to the command line. To add a prefix to a group, use `/lp group {groupname} meta setprefix "{prefix}" {weight}`. That was a lot of arguments. Lets break that down...

1st, the meta argument. Honestly I have no idea, just put it there, then we have the prefix, if you want to put spaces in it, you need to put "" around the prefix. Color codes are supported when setting the prefix. Weight is probably the most confusing. Weight is the order in which groups are sorted. Its how most of the core things work. Just make sure you increment that every time you create a new rank starting at 0 with Default.

## Setting Permissions
We're not using a meta argument thankfully. But its still complicated
To set permissions with LuckPerms, use `/lp group {groupname} permission set {permissionnode}"`

## Need more help?
Check out their docs.
luckperms.net/wiki
