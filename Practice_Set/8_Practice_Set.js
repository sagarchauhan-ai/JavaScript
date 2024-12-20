//1.Write a program to load a JS file in a browser using promises. Use .then() to display an alert when load is complete and use async await syntax.

/*const loadJS = async(url)=>{
     let promise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            let script = document.createElement('script')
            script.src = url
            document.body.append(script)
            script.onload = ()=>{
                resolve(`Script Loaded Successfully : ${url}`)
            }
            script.onerror = ()=>{
                reject('Script Loading Failed.')
            }
        },0);
    })
   let x = await promise
    .then((value)=>{
        alert(value)
    })
    .catch((error)=>{
        alert(error)
        console.log(new Error('404 loading failed...'))
    })
}

const result = async()=>{
    console.log(new Date().getSeconds())
    let a = await loadJS("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js")
    console.log(new Date().getSeconds())
}
result()

//2.Create a promise which rejects after 3 seconds. Use an async/await to get its value. Also use a try/catch to handle error.

const reject =async()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject('This program got some error.')
        },3000);
    })
}

let x = async()=>{
    try{
        let y = await reject()
        console.log(y)
    }
    catch(error){
        console.log(new Error("OOPS! An error occurred."))
    }
}
x()*/

3.//Write a program using Promise.all() inside an async/await to await 3 promises. Compare its result with the case where we awaited these promises one by one.
const p1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Promise 1 resolved')
        }, 2000);
    })
}
const p2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Promise 2 resolved')
        }, 3000);
    })
}
const p3 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve('Promise 3 resolved')
        }, 1000);
    })
}

const run = async()=>{
    console.time('run')
    let a1 =  p1()
    let a2 =  p2()
    let a3 =  p3()
    let result = await Promise.all([a1, a2, a3])
    console.log(result)
    console.timeEnd('run')
}

run()