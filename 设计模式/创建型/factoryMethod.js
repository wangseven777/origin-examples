/**
 * 继简单工厂之后，我们知道，简单工厂模式在新增、修改、删除时会对工厂产生一定的影响，违背了开闭原则，那么工厂方法便解决了这一问题
 * 工厂方法模式的本意就是将实际创建对象的工作推迟到子类中，所以我们可以将工厂方法看作是一个实例化对象的工厂类。
 * 角色：抽象工厂，具体工厂，抽象产品，具体产品
 * 
 */
// 因为js没有接口的概念，所以不需要创建抽象工厂

class Car {
    go() {
        console.log('开车出门咯...');
    }
}

class Bike {
    go() {
        console.log('骑自行车出门咯...');
    }
}

// 新增：class XXXX {}
// ....

class Factory {
    getVehicle(type) {
        return this[type];
    }
}

Factory.prototype.Car = new Car();
Factory.prototype.Bike = new Bike();
// 新增：Factory.prototype.XXX = new XXX();
// ...

// 测试
const factory = new Factory();
const myVehicle = factory.getVehicle('Bike');
myVehicle.go();