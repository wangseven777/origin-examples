// 变量
const variable: string | number = 10;

function print(value:string|number):void; 
function print(value:string|number):string|number; 

// 方法参数
function print(value:string|number) {
    if(typeof value === 'string') {
        console.log(`${value} type is string.`);
    } else {
        console.log(`${value} type is number.`);
    }
}

print('hello world'); // hello world type is string.
print(10); // 10 type is number.

// 方法返回值
function print(value:string|number):string|number {
    if(typeof value === 'string') {
        console.log(`${value} type is string.`);
        return 'string'
    } else {
       console.log(`${value} type is number.`);
       return 0;
    }
}

print('hello world'); // hello world type is string.
print(10); // 10 type is number.
