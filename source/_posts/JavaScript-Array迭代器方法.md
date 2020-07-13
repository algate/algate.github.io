---
title: JavaScript-Array迭代器方法
categories: 前端
tags:
  - JavaScript
  - 数据结构与算法
  - 迭代器方法
comments: true
abbrlink: JS191224
date: 2019-12-24 16:49:30
---

### 【1】 第一组迭代器方法`不产生任何新数组`，要么对于数组中的每个元素执行某种操作，要么返回一个值；

#### 1.forEach() 接受一个函数作为参数，对数组中的每个元素使用该函数

```
function square(num) {
  print(num, num * num);
}

var nums = [];
for (var i = 0; i < 10; ++i) {
   nums[i] = i+1;
}
nums.forEach(square);
```
<!-- more -->
#### 2.every() 接受一个返回值为布尔类型的函数，对数组中的每个元素使用该函数。对于所有的元素，该函数返回true，则该方法返回true
```
function isEven(num) {
   return num % 2 == 0;
}

var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
   print("all numbers are even");
}
else {
   print("some numbers are odd");
}

```
> some() 方法也接受一个返回值为布尔类型的函数，只要有一个元素使得该函数返回true，该方法就返回true。

```
function isEven(num) {
   return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);
if (someEven) {
   print("some numbers are even");
}
else {
   print("no numbers are even");
}
nums = [1,3,5,7,9];
var someEven = nums.some(isEven);
if (someEven) {
   print("some numbers are even");
}
else {
   print("no numbers are even");
}
```

#### 3.reduce() 接受一个函数，返回一个值。 它会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，最后返回累加值。

> 也可以用来将数组中的元素连接成一个长字符串
> reduceRight() 与 reduce()类似，是从右往左执行。

### 【2】 `生成新数组`的迭代器方法

#### 1.map() 和forEach()有点儿像，对数组中的每个元素使用某个函数。区别就是，map()返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果。

```
function curve(grade) {
    retuan grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grade.map(curve);
print(newgrades);
```

#### 2.filter() 和every类似，传入一个返回值为布尔类型的函数。和every()和some()不同的是，当对数组中的所有元素应用该函数，返回结果均为true时，该方法并不返回true，而是返回一个新的数组，`该数组只包含原数组元素应用该函数后返回结果为true的元素。`

```
function isEven(num) {
   return num % 2 == 0;
}

function isOdd(num) {
   return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
   nums[i] = i+1;
}
var evens = nums.filter(isEven);
print("Even numbers: ");
print(evens);
var odds = nums.filter(isOdd);
print("Odd numbers: ");
print(odds);
```

