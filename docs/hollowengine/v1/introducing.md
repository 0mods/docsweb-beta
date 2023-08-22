---
sidebar_position: 2
---

# 1.0 | Script Engine | Introducing

## Script engine [KotlinScript](https://github.com/Kotlin/KEEP/blob/master/proposals/scripting-support.md)

HollowCore (author: HollowHorizon) usages improved the script engine with name KotlinScript, special wrote for usages 
with mods. KotlinScript - it's a special programming language that allows to make Kotlin-Based scripts with some 
simplifications.
For Example, you don't need to create other classes or methods—everything who you're writing on a script will be started as another method.
However, you can still adhere to all the PLO principles with some assumptions.

HollowEngine is usages this engine for creating various scripts, includes dialogues and events

## How to create a script?
First, install the mod and enter the world.
Then in the game folder (in defaults: `.minecraft`) has been created a directory `hollowengine`.
In this directory, you can make your own scripts.
I recommend allocating files in different directories, for example: `hollowengine/scripts/modpack/chapter_1/prologue/...`.

The filenames must be named `name.type.kts`,
where `name` is the name of the script, `type` is the script type (About types [here](./scriptfiles))
(each script type has its own type, its names are in other sections), `kts` is the end of the script, 
it should be so called.

After the launch will compile, it can take from 5 seconds to 3-5 minutes depending on the size of the script and PC performance. 
After the first compilation, the scripts are cached and run instantly. 
When you edit the script and run it again, the script is compiled again.

It is recommended to distribute files to different folders using packages at the beginning of the script, starting from the original folder. 
It is important that your scripts are less conflicted with others, as well as when writing libraries. 
(But I wouldn’t recommend combining several storylines...) 
The filenames should be `name.type.kts`, where name is the name of the script, 
type is the script type (each type of script has its own type), kts is the end of the script. 
After the script is run, it is compiled, which can take from 5 seconds to several minutes, depending on the size of the script and PC performance. 
After the first compilation, the scripts are cached and run instantly, and when you modify the script and restart, it is compiled again.

## Sound events and voiceover

To play sound, just write: `play("sound")` - where "sound" is the way to sound,
add new sounds can be via resource packs or mod-loaders.
For example:
```kotlin
play("minecraft:ambient.basalt_deltas.additions")
```
or
```kotlin
play("mymod:rickroll")
```

## Known problems
- Script engine works on not all minecraft launchers. 
  - At this moment, engine's work granted in next launchers:
    - Official Launcher
    - TLauncher
    - Legacy Launcher (later: TL Launcher)
  - Not works with:
    - Modrinth Launcher
- ~~When using the game classes in the code, all variables and methods are obfuscated, 
i.e., instead of the conditional `Minecraft.getInstance().setScreen(...)`
have to write `Minecraft.func_71410_x().func_147108_a(...)`, it will not be possible to fix this in the coming weeks,
because you will have to seriously rewrite the Kotlin compiler.~~
  - Fixed in auto-build.
- Mod isn't tested on server, so this has to be considered in the development because I haven’t written any compatibility yet, but theoretically, everything should work. 
Just keep in mind that the dialogs are the client side and the events are the server side.