let x: any = 1;    // 数字类型
x = 'I am who I am';    // 字符串类型
x = false;    // 布尔类型
console.log(x);

let y: any = 4;
// const result1 = y.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
// console.log(result1);
const result2 =  y.toFixed();    // 正确
console.log(result2);

let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
console.log(arrayList);