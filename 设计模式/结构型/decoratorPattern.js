// 装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。
// 代码从描述上实现了该目的，个人觉得设计模式就是更好的服务于当前的编码，应当适当的切合与当前的语言，没必要一味的学习后端语言的编码方式，所以这里我也并没有使用class语法。
// 如果这里不是在现有对象添加，也完全可以添加一层proxy。
function Person () {
    this.name = 'zzh';

    this.sayHello = function() {
        console.log(this.name + ' say Hello');
    }
}

const p = new Person();
p.sayHello();

// 扩展属性
Person.prototype.age = 18;
Person.prototype.hobby = ['read', 'sport'];
// 扩展方法
Person.prototype.descMyself = function() {
    console.log('hi, my name is: ' + this.name + ' age is: ' + this.age + ' hobby is: ' + this.hobby);
};

const p1 = new Person();
p1.sayHello();
p1.descMyself();

// 卸载属性(单个卸载)
delete Person.prototype.age;
const p2 = new Person();
p2.sayHello();
p2.descMyself();

// 卸载属性(批量卸载)
for(let p in Person.prototype) {
    delete Person.prototype[p];
}

const p3 = new Person();
p3.sayHello();
try {
    p3.descMyself();
} catch (error) {
    console.log(error);
}

console.log(Person.prototype);
