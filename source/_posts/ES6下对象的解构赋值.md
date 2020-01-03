---
title: ES6下对象的解构赋值
categories: 前端
tags:
  - ES6
comments: true
abbrlink: JS191228
date: 2019-12-28 10:38:30
---


## 对象的解构赋值
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
先看个例子：
```javascript
let { bar, foo } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"

let { baz } = { foo: "aaa", bar: "bbb" };
baz // undefined
```

那么再来看个
```javascript
let { foo: baz } = { foo: "aaa", bar: "bbb" };
baz // "aaa"
foo // error: foo is not defined
```

foo为啥会报错呢？
大家需要首先记住的是：**对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。**
```javascript
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
```

大家猜猜 打印p的话，会是什么结果呢？显而易见，大家自己打印看看。
注意，p是模式，不是变量。偏要赋值就要变成变量：
```javascript
let { p, p: [x, { y }] } = obj;
```

我们看看复杂一点的例子：
```javascript
const node = {
  loc: {
    start: {
      line: 1,
      column: 5
    }
  }
};

let { loc, loc: { start }, loc: { start: { line }} } = node;
line // 1
collumn // ??
loc  // ??
start // ??
```

大家说说结果：对了就可以说明你的掌握模式和变量的区别了。
解释：**上面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。**（概括的说：冒号左边的都是模式，没有冒号或者冒号右边的是变量）

对象的解构也可以指定默认值。

```javascript
var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5

var {x: y = 3} = {};
y // 3

var {x: y = 3} = {x: 5};
y // 5

var { message: msg = 'Something went wrong' } = {};
msg // "Something went wrong"
```

> 还有一个需要注意的是：

默认值生效的条件是，对象的属性值严格等于undefined。

```javascript
var {x = 3} = {x: undefined};
x // 3

var {x = 3} = {x: null};
x // null
```

最重要的对象解构赋值就是这些。完……


