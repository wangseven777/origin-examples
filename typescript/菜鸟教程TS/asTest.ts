let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

let someValue1: any = "this is a string";
let strLength1: number = (someValue1 as string).length;

// 错误的断言
let value = someValue1 as number;
console.log(typeof someValue1); // string 
console.log(typeof value); // string
