let tuple = [1, 'a', [3,4]];

console.log(tuple); // [ 1, 'a', [ 3, 4 ] ]

// 增加元素
tuple.push('hello world');
console.log(tuple); // [ 1, 'a', [ 3, 4 ], 'hello world' ]

// 刪除最後一個元素
tuple.pop();
console.log(tuple); // [ 1, 'a', [ 3, 4 ]]

// 更新元素
const index = tuple.indexOf('a');
tuple[index] = 'b';
console.log(tuple); // [ 1, 'b', [ 3, 4 ]]