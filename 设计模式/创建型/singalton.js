class PersonInstance {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    // 保持第一次初始化状态单例：
    static getInstance(name) {
        if (!this.instance) {
            this.instance = new PersonInstance(name);
        }
        return this.instance;
    }

    // 覆盖式单例：
    // static getInstance(name) {
    //     if (!this.instance) {
    //         this.instance = new PersonInstance(name);
    //     } else {
    //         this.instance.name = name;
    //     }
    //     return this.instance;
    // }

    sayHello() {
        console.log('Hi, my name is: ' + this.name);
    }
}

const xiaohong = PersonInstance.getInstance('xiaohong');
xiaohong.sayHello();

const xiaoming = PersonInstance.getInstance('xiaoming');
xiaoming.sayHello();
xiaohong.sayHello();

console.log('xiaohong === xiaoming :', xiaohong === xiaoming);
