console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NaN); // NAN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity

let num = new Number(12345678910.12345);
console.log(num.toExponential()); // 1.234567891012345e+10
console.log(num.toFixed(3)); // 12345678910.123
console.log(num.toLocaleString()); // 12,345,678,910.123
console.log(num.toPrecision(3)); // 1.23e+10
console.log(num.toString()); // 12345678910.12345
console.log(num.valueOf()); // 12345678910.12345
