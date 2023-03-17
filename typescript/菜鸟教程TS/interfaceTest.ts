// interface IPerson {
//     name: string,
//     age: number | string,
//     print: () => void;
// }

// const student:IPerson  = {
//     name: 'zzh',
//     age: 18,
//     print: () => console.log('print method'),
// }

// console.log('student object:');
// console.log(`student name: ${student.name}`);
// console.log(`student age: ${student.age}`);
// console.log(`student print method:`);
// student.print();

// 接口和数组
// interface namelist { 
//     [index:number]:string 
//  } 
  
//  // var list2:namelist = ["John", 1, "Bran"] // 错误元素 1 不是 string 类型
 
// interface ages { 
//     [index:string]:number 
//  } 
  
//  var agelist:ages; 
//  agelist["John"] = 15   // 正确 
 // agelist[2] = "nine"   // 错误

 interface IAnimal {
     age:number,
 }

 interface IPerson {
     height: number,
 }

 // 单继承实例
 interface IStudent extends IPerson {
     score: number,
 }

 let s = <IStudent>{};
 s.score = 100;
 s.height = 172;
 console.log(s.score); // 18

interface ITeacher extends IPerson, IAnimal {
    subject: string
}

let t : ITeacher = {
    age: 35,
    height: 172,
    subject: 'Math'
}

console.log(t.age); // 35

