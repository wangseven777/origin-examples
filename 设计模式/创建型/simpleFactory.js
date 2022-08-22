/*
 * @Author: zzh
 * @Date: 2021-10-20 17:07:13
 * @LastEditors: zzh
 * @LastEditTime: 2022-07-13 13:23:38
 * @FilePath: \origin\设计模式\创建型\simpleFactory.js
 * @Description: 简单工厂方法
 */

/**
 * 简单工厂方法：
 * 简单工厂模式：又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。主要用来创建同一类对象。
 * 工厂方法的核心，也是最简单的工厂方法
 * 创建一个工厂，然后利用参数告知这个工厂，让其创建指定的对象
 * 优点：解耦，把不同且功能相似的对象进行隔离，利用工厂统一管理
 * 缺点：如果新增或者删除，影响到了工厂获取产品的方法，违背了开闭原则 -> 工厂方法模式
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

class SimpleFactory {
    getVehicle (vehicle) {
        switch (vehicle) {
            case 'car': return new Car();
            case 'bike': return new Bike();
            // ..., 可能还有很多其他交通工具
        }
    }

}

// 测试
const factory = new SimpleFactory(); // 先获取工厂示例，这里使用静态方法，直接获取交通工具
const myVehicle = factory.getVehicle('bike'); // 获取想要的出行工具
myVehicle.go(); // 出发

