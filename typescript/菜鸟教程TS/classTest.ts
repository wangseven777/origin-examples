// class Person {
//     // 字段
//     private age: number;

//     // 构造函数 
//     constructor(age:number) { 
//         this.age = age; 
//     }  
    
//     // 方法
//     public setAge(age:number):void {this.age = age;};
//     public getAge():number {return this.age};
// }

// let personA = new Person(18);
// console.log(personA.getAge()); // 18

// personA.setAge(27);
// console.log(personA.getAge()); //27

// // 类的继承
// class Student extends Person {
//     // 方法重写
//     public setAge(age: number): void { 
//         super.setAge(age + 100); // 调用父类的函数;
//         console.log('重写父类方法');
//     }
// }

// let studentA = new Student(18);
// console.log(studentA.getAge()); // 18

// studentA.setAge(18);
// console.log(studentA.getAge()); // 118