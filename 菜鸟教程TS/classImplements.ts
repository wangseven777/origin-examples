interface Car {
    name:string;
    color: string;
    run(): void;
}

class BMW implements Car {
    name:string = '宝马一号';
    color:string = '红色';
    run():void {
        console.log('宝马正在路上跑~~~~')
    }
}

var bmw1 = new BMW();
console.log(bmw1.name); // 宝马一号
console.log(bmw1.color); // 红色
bmw1.run(); // 宝马正在路上跑~~~~