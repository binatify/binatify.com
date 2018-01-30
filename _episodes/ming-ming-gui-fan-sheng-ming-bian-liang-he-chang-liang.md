---
layout: episode
number: 3
layout: episode
title: "命名规范，声明变量和常量"
section: Go零基础编程入门教程
cover: //p2lg64wh6.bkt.clouddn.com/lecture-03-cover.png
video: //v.qq.com/iframe/player.html?vid=z0536203a6s&tiny=0&auto=0
description: 学习了解 Go 命名规范，掌握什么是变量，什么是常量。
preview: '1. Go 标识符声明语法。<br>2. 变量声明。<br>3. 常量声明。<br>'
datetime: 2018-01-20
time: "8:27"
isnew: false
comments: true
taglist: 基础知识
---

## 命名规范

Go 语言中，任何标识符（变量，常量，函数，自定义类型等）都应该满足以下规律：

- 连续的[字符](https://golang.org/ref/spec#letter) (unicode_letter | `_` .) 或 [数字](https://golang.org/ref/spec#unicode_digit)("0" … "9") 组成。
- 以字符或下划线开头。
- 不能和 Go 关键字冲突。

### Go 关键字

```
break        default      func         interface    select
case         defer        go           map          struct
chan         else         goto         package      switch
const        fallthrough  if           range        type
continue     for          import       return       var
```

### 举例说明

```
foo  #合法
foo1 #合法
_foo #合法
变量 #合法
变量1 #合法
_变量 合法

1foo #不合法
1 #不合法
type #不合法
go #不合法

```

---

## 变量声明

### 类型声明基本语法

在 Go 语言中，采用的是后置类型的声明方式，形如：

```
<命名> <类型>
```

例如：

```
x int // 定义 x 为整数类型
```

这么定义不是为了凸显与众不同，而是为了让声明更加清晰易懂，具体可以参考文章[gos-declaration-syntax](https://blog.golang.org/gos-declaration-syntax)

### 变量声明

在 Go 语言中通常我们使用关键字 `var` 来声明变量，例如

```
var x int // 表示声明一个名为 x 的整数变量
var b int = 1 // 表示声明一个名为 b 的整数变量，并且附上初始值为 1
var b = 1
```

如果有多个变量同时声明，我们可以采用 `var` 加括号批量声明的方式:

```
var (
    a, b int  // 同时声明 a, b 的整数
    c float64
)
```

### 简短声明方式

变量在声明的时候如果有初始值，我们可以使用 `:=` 的简短声明方式：

```
a := 1 // 声明 a 为 1 的整数
b := int64(1)  // 声明 b 为 1 的 64 位整数
```

---

## 常量定义

常量是指值不能改变的定义，它必须满足如下规则：

- 定义的时候，必须指定值
- 指定的值类型主要有三类： 布尔，数字，字符串， 其中数字类型包含（rune, integer, floating-point, complex), 它们都属于基本数据类型。
- 不能使用 `:=`

例子：

```
const a = 64 // 定义常量值为 64 的值

const (
  b = 4
  c = 0.1
)
```
