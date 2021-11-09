const outerFun=(a)=>{
    let b=10;
    const innerFun = ()=>{
        let sum= a+b;
        console.log(`sum of two number is ${sum}`)
    }
    return innerFun;
}

let inner=outerFun(5);
console.dir(inner)
console.log(inner)

inner()