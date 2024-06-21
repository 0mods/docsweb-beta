---
sidebar_position: 5

title: 🟰 Логика и циклы
id: tools-logic_and_cycle
description: Простая логика для ваших скриптов
---

:::info Немного слов...
> - Рано или поздно вам потребуется использовать простую логику в скриптах, а именно `if`, `eles` иил же `elif`.  
>  - Или же ещё одно - циклы: `while` или `for`.
> - Но работать так как нужно вам - они не будут. Причиной этого служит: Вы используете эти методы на этапе компиляции, а не на этапе работы скрипта.  
> ---
> - Избежать этого можно очень легко.  
:::

---

## Логика

### If (если)
```kts
// Пропишите данный метод с большой буквы
If( {<condition -> return true/false>} ) { // Фигурные скобки обязательные, т.к. это говорит движку, чтобы проверять условие во время работы скрипта, а не при компиляции
    // Что делать если условие - выполнилась...
}

// Если же условие не выполнено - пропуск
```
> Читается оно будет как: "Если `а = true`(Допустим)" -> Выполнить действие, после продолжить

---

### Else (иначе)
```kts
// Указывается после действий If( {...} ) {...}
If( {<condition -> return true/false>} ) {
    // Что делать если условие - выполнилась...
} Else {
    // Если условие не выполнилось - выполнить это...
}

// Скрипт продолжится дальше
```
> Читается оно как: "Если `a = true`(допустим)" -> Выполнить действие 1, иначе -> Выполнить действие 2, после продолжить

---

### Elif (иначе-если)
```kts
// Обычно используется когда много действий и условий
If( {<condition_0 -> return true/false} ) {
    // Действие 1
}.Elif( {<condition_1 -> return true/false} ) {
    // Действие 2
} <И так столько, сколько вам нужно> Else {
    // Действие n
}
```
> Читается оно как: "Если `a = 0`(допустим)" -> Выполнить 1, иначе "Eсли `a = 1`" -> Выполнить 2, ..., иначе -> Выполнить n, после продолжить

---

## Цикты

### While (пока I -> Выполнять в цикле)
```kts
// Работает как обычный while
While( {<condition true -> enable>} ) {
    // Пока условие для цикла = true -> Выполнять эти действия в цикле
}

// Как только условие будет = false -> Цикл оборвётся и скрипт пойдёт дальше
```

## Примеры:

### Логика
```kts
import kotlin.random.Random

val team by server.players
val val0 = Random.nextInt(0, 3)

If( {val0 == 0} ) { // Никогда так не делайте, это просто пример
    npc say{"Ya тебе должен сказать - Привет!"}
}.Elif( {val0 == 1} ) {
    npc say{"Выпало другое число, а конкретно -> $val0"}
}.Elif( {val0 == 2} ) {
    npc say{"Пошли со мной в горы!"}
}.Elif( {val0 == 3} ) {
    npc say{"Блин. сори. Но пока..."}
} Else {
    team.say{"Мне повезло, мне выпало число \"$val0\". Голосуй за HollowEngine И получай ещё больше!"}
}
```

### Циклы
```kts
import kotlin.random.Random

val team by server.players
val boall = Random.nextBoolean()

npc say{"Ладно, за работу!"}

While( {boall} ) {
    npc moveTo{pos(10, 64, 3)}
    wait{1.sec}
    
    npc moveTo team
    wait{1.sec}
}
```