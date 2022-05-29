---
sidebar_position: 3
---

# Creating a Prison

Though it can seem complex due to the amount of features available, creating a basic new prison for people to enjoy is actually very straight forward.

:::info INFO

For more in-depth documentation on customization options for your prisons, check out the **[prison customization guide](https://docs.cobaplatinum.com)**

:::

## STEP 1: Prepare a World

Before you can **create a prison** for players to use, you need to have a **world** with at lease the basics of a prison map constructed. You can build the prison however you like as, beyond cells and an escape point, all of the features within this plugin are completely optional.

:::danger WARNING

The current version of Platinum Cops and Robbers manages prisons by creating an instance of a source world for each game! For this to work, it is **highly recommended** that you either create or import your prison map on a seperate world from other aspects of your server! For example: Do not build and set up a prison within the same world that you have your server spawn area built, as the server spawn area will also be copied for every prison game that you start, as well as restored at the end of every prison game! You are able to have multiple prisons on the same map, though. This will work fine!

:::

:::tip Recommendation

I would highly recommend that you use **[Multiverse 2](https://www.spigotmc.org/resources/multiverse-core.390/)** for your Minecraft server world management, as it will allow you to easily create, import, manage, and remove multiple worlds within your Minecraft server!

:::

**Throughout this documentation**, I will be using a personally modified version of **Cops and Robbers: Escape from Alcatraz** created by **Podcrash**! You can download the original map and play around with it yourself **[here](https://podcrash.com/game/cops-and-robbers-escape-from-alcatraz/)**!

Once you have your **prison map** created and loaded into your server, it is now time to begin **setting up** your prison for everyone to enjoy!

## STEP 2: Prison Setup

Though you can **create prisons** entirely in the configuration files, this is not recommended! It is recommended that you use the **in-game commands** for more clarity and to avoid mistakes!

:::info INFO

For more in-depth documentation on available commands, check out the **[commands archive](https://docs.cobaplatinum.com)**

:::

The first command you will need to run is very simple.

```bash
/psnr Create <Prison Name>
```

This will **create** a **new prison** with the name "**Prison Name**" (You can name it whatever you want) and automatically link it to the **current world you are in**. In my case using the example map, I would use


```bash
/psnr Create Alcatraz
```

