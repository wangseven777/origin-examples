import { console } from 'console'; // Confirm you haven't a statement like this.

interface Person {
    name: string
    age: number

    hobby?: Array<string>
}


function testMethod (params: Person):void {
    let aaa:string;
    aaa = '1111';
    console.log(aaa);
    // console.log('hello');

}

testMethod({name: 'zzh', age: 18});