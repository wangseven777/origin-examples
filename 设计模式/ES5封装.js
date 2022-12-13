let People = function(name, age) {
    this.name = name;
    this.age = age;

    this.introduceMyself = function() {
        console.log(`Hi, my name is ${this.name}, age is ${this.age}`);
    }
}

let p = new People('zzh', 18);
p.introduceMyself(); // result: Hi, my name is zzh, age is 18