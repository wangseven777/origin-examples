function getArgsFromCommand () {
    process.argv.forEach((val, index) => {
        console.log(`${index}: ${val}`)
    })
}

getArgsFromCommand();

// commond: node comman-args.js name='zzh' age=10 height=190
// out: 
// 0: C:\Program Files\nodejs\node.exe
// 1: E:\practice\练习场\origin-examples\node\comman-args.js
// 2: name='zzh'
// 3: age=10
// 4: height=190