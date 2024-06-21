---
sidebar_position: 11

title: 💫 Фичи скрипта
id: features
description: Всяукие полезности
---

## Запуск скрипта при заходе в мир

:::info Запуск скрипта при заходе в мир
```kts
@file:EntryPoint
```
> Запускает скрипт только при ***самом первом*** заходе в мир!
:::

---

## Импорт других скриптов

:::info Импорт других скриптов
> Если ваш сюжет состоит из нескольких частей, то может потребоваться использовать переменную из других частей.  
> Вы можете импортировать другие скрипты, и использовать из них к примеру функции.
```kts
@file:Import("<path/to/script>")
```
- Если импортируемый скрипт находится ниже (т.е. дальше/внутри этой папки и все под-папки):
> - `scripts/#functions/pack_1.kts`, при этом импорт нужен в `scripts/story.se.kts` - то указать нужно `@file:Import("#functions/pack_1.kts")`.  
> - `scripts/#functions/pack_2.kts`, при этос импорт нужен в `scripts/story/story_0.se.kts` - то указать нужно `@file:Import("../#functions/pack_2.kts")`.  
>   ↳ С помощью `../` мы указываем что нужно выйти из этой данной папки(т.е. нужно перейти на уровень выше).
:::

---

## Использование классических команд

:::info использование классических команд
- Бывает нужно прописать какую-нибудь классическую команду (как в командных блоках).
```kts
execute{"<command>"}
// Она работает как команды в командных блоках
// Необязательно писать через / 
```
---
↳ Получить НИПа можно так:
```kts
<npcID>().uuid
// и после уже искользовать его в командах

execute{"effect give $npcID().uuid levitation 10"} // Как пример
// - Выдаём эффект левитации по UUID-сущности
// - НИП это тоже сущность со своим UUID
// - через метод npcID().uuid мы получает UUID сущности
// - используя знак $ перед методом, мы используем переменную.
```
:::

---