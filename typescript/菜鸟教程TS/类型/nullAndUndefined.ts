
function nullAndUndefinedTest() {
    let x: number;
    x = 1; // 运行正确
    x = undefined;    // 运行错误
    x = null;    // 运行错误

    let y: number | null | undefined;
    y = 1; // 运行正确
    y = undefined;    // 运行正确
    y = null;    // 运行正确

    console.log(x);
    console.log(y);
}
nullAndUndefinedTest();

