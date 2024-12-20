let promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise1')
    },2000)
})

let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Promise2')
    },4000)
})
 
let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject(new Error('404 Error'))
    },6000)
})

// let promiseAll = Promise.all([promise1, promise2, promise3])
// promiseAll.then((value)=>{
//     console.log(value)
// })

// let promiseallSettled = Promise.allSettled([promise1, promise2, promise3])
// promiseallSetteled.then((value)=>{
//     console.log(value)
// })

// let promiseRace = Promise.race([promise1, promise2, promise3])
// promiseRace.then((value)=>{
//     console.log(value)                                                                             
// })

// let promiseAny = Promise.any([promise1, promise2, promise3])
// promiseAny.then((value)=>{
//     console.log(value)
// })

// let promiseResolve = Promise.resolve(10)
// promiseResolve.then((value)=>{
//     console.log(value)
// })

let promiseReject = Promise.reject(new Error(20))
promiseReject.then((value)=>{
    console.log(value)
})
