/*
 * @Author: zzh
 * @Date: 2021-11-16 15:37:35
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-16 15:54:05
 * @FilePath: \origin\设计模式\builder.js
 * @Description: 建造者模式
 * 建造者模式：建造者模式（Builder）可以将一个复杂对象的构建与其表示相分离，使得同样的构建过程可以创建不同的表示。
 * 也就是说如果我们用了建造者模式，那么用户只需要指定需要建造的类型就可以得到所需要的东西，而具体建造的过程和细节不需要知道。
 * 建造者模式实际，就是一个指挥者，一个建造者和一个用户。用户调用指挥者，指挥者调用具体建造者工作，建造者建造出具体的东西给用户。
 * 示例：一个生产车的工厂，生产汽车，自行车
 */

class VehicleBuilder {
    construct(builder) {
        builder.init();
        builder.addComponents();
        return builder.get();
    }
}

class CarBuilder {
    constructor(car) {
        this.car = car;
    }

    init () {
        console.log('初始化汽车....');
        this.car = new Car();
    }

    addComponents() {
        console.log('给汽车添加组件');
        this.car.addComponents();
    }

    get () {
        return this.car;
    }
}

class Car {
    addComponents() {}
    go() {
        console.log('开车出门咯...');
    }
}

class BikeBuilder {
    constructor(bike) {
        this.bike = bike;
    }

    init () {
        console.log('初始化自行车....');
        this.bike = new Bike();
    }

    addComponents() {
        console.log('给自行车添加组件');
        this.bike.addComponents();
    }

    get () {
        return this.bike;
    }
}

class Bike {
    addComponents() {}
    go() {
        console.log('自行车出门咯...');
    }
}


// 调用
const director = new VehicleBuilder();
const carBuilder = new CarBuilder();
const bikeBuilder = new BikeBuilder();

var car = director.construct(carBuilder);
car.go();

var bike = director.construct(bikeBuilder);
bike.go();




