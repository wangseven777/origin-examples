let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];

// concat():concat(...items: ConcatArray<T>[]): T[];
console.log(arr1.concat(arr2)); // [ 'a', 'b', 'c', 'd' ]

// every():every(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
console.log(arr1.every(x => x === 'a')); // false

// some()：some(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
console.log(arr2.some(x => x === 'c')); // true

// filter()： filter(callbackfn: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
console.log(arr1.filter(x => x !== 'a')); // [ 'b' ]

// forEach(): forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
arr1.forEach(x => console.log(x)); // a/nb

// map()：map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
console.log(arr1.map(x => {console.log(x); return `${x}${x}`})); // a/nb/n[ 'aa', 'bb' ]

// indexOf()：indexOf(searchElement: T, fromIndex?: number): number;
console.log(arr1.indexOf('a')); // 0

// lastIndexOf()：lastIndexOf(searchElement: T, fromIndex?: number): number;
console.log(arr1.lastIndexOf('a', 0)); // 0

// pop()：pop(): T | undefined;
console.log(arr1.pop()); // b
console.log(arr1); // ['a']

// push()：push(...items: T[]): number;
console.log(arr1.push('b')); // 2
console.log(arr1); // ['a', 'b']

// reduce():
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
console.log(arr1.concat(arr2).reduce((x,y) => x+y));// abcd

//reduceRight():
//reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
//reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
console.log(arr1.concat(arr2).reduceRight((x,y) => x+y));// dcba

// reverse():reverse(): T[];
console.log(arr1.reverse());// [ 'b', 'a' ]

// sort()：sort(compareFn?: (a: T, b: T) => number): this;
console.log(arr2.reverse().sort());// [ 'c', 'd' ]
console.log(arr2.sort((a,b) => b < a ? 1 : 0)); // [ 'c', 'd' ]

// shift()：shift(): T | undefined;
console.log(arr1.shift()); // b
console.log(arr1); // [ 'a' ]

// unshift()：
console.log(arr1.unshift('c')); // 4
console.log(arr1); // [ 'c', 'a', 'b', 'a' ]

// slice()：slice(start?: number, end?: number): T[];
console.log(arr2.slice(0,1)); // [ 'c' ]

// splice()：
// splice(start: number, deleteCount?: number): T[];
// splice(start: number, deleteCount: number, ...items: T[]): T[];
console.log(arr1); // [ 'a' ]
console.log(arr1.splice(2,0,'b', 'a')); // []
console.log(arr1); // [ 'a', 'b', 'a' ]

//join()：join(separator?: string): string;
console.log(arr1.join('-'));

// toString()： toString(): string;
console.log(arr1.toString()); // a,b,a



