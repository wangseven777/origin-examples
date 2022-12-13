namespace Car {
    export class Bicycle {
        color:string;
    }

    // namespace 嵌套
    export namespace ColorManager {
        export class Color {
            static getColors():string[]{
                return ['red', 'white', 'blud'];
            }
        }
    } 
}

namespace Person {
    export class Student {
        runCar():void {
            const car = new Car.Bicycle();
            // 由于此时color并没有被赋值，所以是undefined
            console.log(`Student is running a ${car.color} car.`); // Student is running a undefined car.
            
            console.log(`想给车子加个颜色，从Car的颜色管理中心查看可选颜色：`);
            console.log(Car.ColorManager.Color.getColors()); // [ 'red', 'white', 'blud' ]
        }
    }

    const student = new Student();
    student.runCar();
}