// interface Map<K, V> {
//     clear(): void;
//     delete(key: K): boolean;
//     forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
//     get(key: K): V | undefined;
//     has(key: K): boolean;
//     set(key: K, value: V): this;
//     readonly size: number;
// }

// interface MapConstructor {
//     new(): Map<any, any>;
//     new<K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
//     readonly prototype: Map<any, any>;
// }
// declare var Map: MapConstructor;

let myMap = new Map();

// 设置值
myMap.set('name', 'zzh');
myMap.set('height', '172');
myMap.set('age', '18');

// 获取值
console.log(myMap.get('name')); // zzh

// 判断是否包含某个key
console.log(myMap.has('name')); // true

console.log(myMap.keys()); //[Map Iterator] { 'name', 'height', 'age' }

console.log(myMap.values()); // [Map Iterator] { 'zzh', '172', '18' }

console.log(myMap.size); // 3

// zzh:name
// 172:height
// 18:age
myMap.forEach((key, value) => console.log(`${key}:${value}`));

myMap.delete('height');

// zzh:name
// 18:age
myMap.forEach((key, value) => console.log(`${key}:${value}`));

myMap.clear();

// 无输出
myMap.forEach((key, value) => console.log(`${key}:${value}`));




