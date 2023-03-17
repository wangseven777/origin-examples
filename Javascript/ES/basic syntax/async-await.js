function generatePromise() {
    return new Promise(function(resolve,reject){
        resolve('Hello World');
    });
}


async function execute() {
    let promise = generatePromise();
    console.log('1');
    const a = async() => promise.then(x => console.log(x));
    await a();
    console.log('3');
}

execute();