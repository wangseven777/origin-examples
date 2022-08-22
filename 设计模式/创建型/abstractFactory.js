
/**
 * 工厂方法解决的是一个工厂针对一种类型的系列产品，
 * 那么如果是一个工厂，里面有多种系列产品呢？例如汽车，自行车；手机，mp3；衣服，帽子等；
 * 当然可以使用多个工厂方法，如果在一个工厂里面该如何解决呢？
 * 个人感觉，如果非必要完全可以建立多个工厂，没必要都放在一起
 */

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


class Phone {
    start() {
        console.log('打开手机...');
    }
}

class Mp3 {
    start() {
        console.log('打开MP3...');
    }
}

// 新增：class XXXX {}
// ....

class Factory {
    getVehicle(type, product) {
        return this[type][product];
    }
}

Factory.prototype.vehicle = {};
Factory.prototype.vehicle.Car = new Car();
Factory.prototype.vehicle.Bike = new Bike();
// 新增：Factory.prototype.XXX = new XXX();
// ...

Factory.prototype.electronic = {};
Factory.prototype.electronic.Phone = new Phone();
Factory.prototype.electronic.Mp3 = new Mp3();
// 新增：Factory.prototype.YYYY = new YYYY();
// ...


// 测试
const factory = new Factory();
const myVehicle = factory.getVehicle('vehicle', 'Bike');
myVehicle.go();

const myElectronic = factory.getVehicle('electronic', 'Phone');
myElectronic.start();