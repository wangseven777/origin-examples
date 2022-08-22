/*
 * @Author: zzh
 * @Date: 2021-11-17 14:53:33
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-17 16:21:52
 * @FilePath: \origin\设计模式\结构型\proxy.js
 * @Description: 代理模式
 * 代理模式的定义：由于某些原因需要给某对象提供一个代理以控制对该对象的访问。
 * 这时，访问对象不适合或者不能直接引用目标对象，代理对象作为访问对象和目标对象之间的中介。
 * 
 * 代理模式的主要优点有：
 * 代理模式在客户端与目标对象之间起到一个中介作用和保护目标对象的作用；
 * 代理对象可以扩展目标对象的功能；
 * 代理模式能将客户端与目标对象分离，在一定程度上降低了系统的耦合度，增加了程序的可扩展性
 * 
 * 其主要缺点是：
 * 代理模式会造成系统设计中类的数量增加
 * 在客户端和目标对象之间增加一个代理对象，会造成请求处理速度变慢；
 * 增加了系统的复杂度；
 */

// 远方的商店
class Shop {
    buyClothes() {
        console.log('买衣服');
    }
}

// 代购
class Agent {
    constructor(shop) {
        this.shop = shop;
    }

    buyClothes() {
        console.log('我是1号代理，先砍砍价...');
        this.shop.buyClothes();
    }
}

// 顾客
const shop = new Shop(); // 想好买哪家的衣服，找一个代购然后帮我把衣服买回来
const agent = new Agent(shop); 
agent.buyClothes();


// 继承，重写，也能实现该思想
class Agent1 extends Shop {
    buyClothes () {
        console.log('我是2号代理，先砍砍价...');
        super.buyClothes();
    }
}

// 顾客
const shop1 = new Shop(); // 想好买哪家的衣服，找一个代购然后帮我把衣服买回来
const agent1 = new Agent1(shop1); 
agent1.buyClothes();


// 如果是函数，还可以使用proxy
buyClothes =  function () {
    console.log('买衣服');
}

let proxy = new Proxy(buyClothes, {
    apply: function(target, thisArg, argumentsList) {
        console.log('我是3号代理，砍砍价....');
        return target();
    }
});

proxy();