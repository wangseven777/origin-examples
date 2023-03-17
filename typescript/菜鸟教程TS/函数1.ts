// 无返回值函数
function hasNoneReturnFunction() {
    console.log(`无返回值函数`);
}
hasNoneReturnFunction(); // 无返回值函数

// 有返回值函数
function hasReturnFunction(): string {
    return '有返回值函数';
}
console.log(hasReturnFunction()); // 有返回值函数

// 带参数函数
function withParameterFunction(name: string, age: number) {
    console.log(`${name} is ${age}`);
}
withParameterFunction('zzh', 18); // zzh is 18

// 可选参数
function withOptionalParameterFunction(name: string, age?: number) {
    console.log(`${name} is ${age}`);
}
withOptionalParameterFunction('zzh'); // zzh is undefined

// 可选参数
function withDefaultParameterFunction(name: string, age: number = 18) {
    console.log(`${name} is ${age}`);
}
withDefaultParameterFunction('zzh');  // zzh is 18

// 剩余参数
function withRestParameterFunction(name: string, ...restNames: string[]) {
    const restName = restNames.join(' ');
    console.log(`${name} full name is ${name} ${restName}`);
}
withRestParameterFunction('zzh', '李白', '杜甫', '白居易');  // zzh full name is zzh 李白 杜甫 白居易

// 匿名函数
const printName = (name: string) => {
    console.log(name);
}
printName('zzh'); // zzh

// 匿名函数自调用
(function(){
    console.log('匿名函数自调用');
})() // 匿名函数自调用

// 构造函数
const structorFunction = new Function('a', 'b', 'return a * b');
console.log(structorFunction(1, 7)); // 7

// Lambda 函数
const lambdaFunction = (name: string) => console.log(name);
lambdaFunction('lambdaFunction'); // lambdaFunction

// 函数重载
function showInfo(name: string, age: number): void;
function showInfo(age: number, name: string): void;

function showInfo(x: any, y: any) {
    if(typeof x === 'string') {
        console.log(`${x} is ${y}`);
    } else {
        console.log(`${y} is ${x}`);
    }
}
showInfo('zzh', 18); // zzh is 18
showInfo(18, 'zzh'); // zzh is 18



