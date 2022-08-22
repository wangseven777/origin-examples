/*
 * @Author: zzh
 * @Date: 2021-11-16 16:22:07
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-16 16:52:21
 * @FilePath: \origin\设计模式\prototype.js
 * @Description: 原型模式
 */

class prototypeMode {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log('my name is ' + this.name, ' age is ' + this.age);
    }
}

const max = new prototypeMode('孙悟空', 38000);
max.say();

const min = Object.create(max);
min.name = '小空空空空空空空空';
min.say();
max.say();
