/*
 * @Author: zzh
 * @Date: 2021-11-17 09:43:48
 * @LastEditors: zzh
 * @LastEditTime: 2022-07-13 15:54:27
 * @FilePath: \origin\设计模式\结构型\adapter.js
 * @Description: 适配者模式
 * 注意事项：适配器模式本质上是一个亡羊补牢的模式， 就像一个转换器 
 * 它解决的是现存的两个接口之间不兼容的问题，不应该在软件的初期开发阶段就使用该模式；
 * 如果在设计之初就能够统筹的规划好接口的一致性，那么适配器就应该        尽量减少使用   。
 * 将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。
 * 主要解决：主要解决在软件系统中，常常要将一些"现存的对象"放到新的环境中，而新环境要求的接口是现对象不能满足的。
 */

// 老接口
const getOldCity = () => [ { name: 'nanjin', id: 1 }, { name: 'suzhou', id: 2 } ];

// 新接口希望是下面形式
// { hangzhou: 11, jinhua: 12 }

// 这时候就可采用适配者模式
const adaptor = (oldCity) => {
    let result = {}; 
    for (let city of oldCity) {
        result[city.name] = city.id;
    }

    return result;
} 


console.log(adaptor(getOldCity()));