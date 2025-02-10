let a = 'global variable'
function handler1(param1, param2, param3, param4, p5, p6, p7) {
    let b = 'variable defined under handler 1'
    console.log('handler 1 called', a, param1, param2, param3, param4, p5, p6, p7);
    const funcVar = handler2(b)
    console.log('funcVar', funcVar);
    
}

const handler2 = (arg1) => 345


handler1('1', 2, true, {}, [], undefined, null)
// handler2()
// console.log(b);