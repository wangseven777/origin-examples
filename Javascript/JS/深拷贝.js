/*
 * @Author: zzh
 * @Date: 2021-11-15 15:08:06
 * @LastEditors: zzh
 * @LastEditTime: 2021-11-15 16:55:09
 * @FilePath: \origin\Javascript\JS\深拷贝.js
 * @Description: 实现深拷贝
 */

function deepClone(params) {
    let result = {};
    const keys = Object.keys(params);
    for (let key of keys) {
        if (Object.prototype.toString.call(params[key]) !== '[object Object]') {
            result[key] = params[key];
        } else {
            result[key] = deepClone(params[key]);
        }
    }

    return result;
}


var a = {
    name: 'zzh',
    age: 18,
    habits: ['aa', 'bb', 'cc'],
    c: {
        d: 1,
        e: 2,
        date: new Date(),
    },
};

var b = deepClone(a);
console.log(b);

a.c.d = 10;

console.log(b);
