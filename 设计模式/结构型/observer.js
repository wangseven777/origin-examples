/*
 * @Author: zzh
 * @Date: 2021-11-18 09:14:35
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-18 09:38:42
 * @FilePath: \origin\设计模式\结构型\observer.js
 * @Description: 观察者模式
 * 意图：定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。
 * 主要解决：一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。
 * JS： object.defineproterty, proxy, get/set
 */

// 观察者
class Obsever {
    constructor(name) {
        this.name = name;
    }

    update() {
        console.log('观察者： ' + this.name);
    }
}

// 被观察者
class Subject {
    constructor() {
        this._obseverList = [];
    }

    get obseverList () {
        return this._obseverList;
    }

    add (obesever) {
        this._obseverList.push(obesever);
    }

    remove (obesever) {
        this._obseverList = this._obseverList.filter(x => x != obesever);
    }

    notify() {
        this._obseverList.forEach(x => x.update());
    }
}

// 观察者列表
const obesever1 = new Obsever('xiaohong');
const obesever2 = new Obsever('xiaoming');
const obesever3 = new Obsever('xiaohua');


// 被观察者
const sub = new Subject();
sub.add(obesever1);
sub.add(obesever2);
sub.add(obesever3);
console.log('观察者列表： ' + sub.obseverList.map(x => x.name));
sub.notify();


