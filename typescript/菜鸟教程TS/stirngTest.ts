let str = new String( "This is string" );
console.log("str.constructor is:" + str.constructor) //str.constructor is:function String() { [native code] }

console.log("Length " + str.length)  // 输出 14

// string 方法
// charAt():charAt(pos: number): string;
console.log(str.charAt(1)); // h

//charCodeAt():charCodeAt(index: number): number;
console.log(str.charCodeAt(0)); // 84

// concat():concat(...strings: string[]): string;
console.log(str.concat(' and concat.')); // This is string and concat.

// indexOf():indexOf(searchString: string, position?: number): number;
console.log(str.indexOf('i')); // 2

// lastIndexOf():lastIndexOf(searchString: string, position?: number): number;
console.log(str.lastIndexOf('i')); // 11

// localeCompare():localeCompare(that: string, locales?: string | string[], options?: Intl.CollatorOptions): number;
console.log(str.localeCompare('This is string')); // 0
console.log(str.localeCompare('This')); // 1

// match():match(matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null;
console.log(str.match(/is/g)); // [ 'is', 'is' ]

// replace():replace(searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string;
const re = /(\w+)\s(\w+)/; 
const newstr = str.replace(re, "$2, $1"); 
console.log(newstr); // is, This string

// search():search(searcher: { [Symbol.search](string: string): number; }): number;
const reg1 = /this/gi;
const reg2 = /thisnotserarch/gi;
console.log(str.search(reg1)); // 0
console.log(str.search(reg2)); // -1

// slice():slice(start?: number, end?: number): string;
console.log(str.slice(0, 3)); // Thi

// split():split(splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[];
console.log(str.split('is', 10)); //  [ 'Th', ' ', ' string' ]
console.log(str.split('is', 1)); //  [ 'Th']

// substr():substr(from: number, length?: number): string;
console.log(str.substr(0, 6)); // This i

// substring():substring(start: number, end?: number): string;
console.log(str.substring(0, 6)); // This i

// toLocaleLowerCase():toLocaleLowerCase(locales?: string | string[]): string;
console.log(str.toLocaleLowerCase()); // this is string

// toLocaleUpperCase():toLocaleUpperCase(locales?: string | string[]): string;
console.log(str.toLocaleUpperCase()); // THIS IS STRING

// toLowerCase():toLowerCase(): string;
console.log(str.toLowerCase()); // this is string

// toString():toString(radix?: number): string;
console.log(new Number(5).toString()); // 5

// toUpperCase():toUpperCase(): string;
console.log(str.toUpperCase()) // THIS IS STRING

// valueOf():valueOf(): string;
console.log(str.valueOf()); // This is string



