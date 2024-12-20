
//Promises
let con = confirm('Do yo want to resolve promise.')
let promise = new Promise((resolve, reject)=>{
   setTimeout(()=>{
       if(con == true){
        resolve('Promise Resolved')
    }
    else{
        reject('Promise Rejected')
    }
   },3000) 
})
console.log(promise)

promise
//To get the value.
.then((value)=>{
    alert(value)
})
//To catch the error.
.catch((error)=>{
    alert(error)
})

let myPromise1 = new Promise((resolve, reject)=>{
    const success = true;
    setTimeout(()=>{
        if(success){
        resolve('Data Fetched Successfully')
        }
        else{
            reject('Data Fetching Failed.')
        }
    },5000)
})

myPromise1
.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
// console.log(myPromise1)

let myPromise2 = new Promise((resolve, reject)=>{
    const success = false;
    setTimeout(()=>{
        if(success){
            resolve('Data Fetched Successfully')
            }
            else{
                reject('Data Fetching Failed.')
            }
    },5000)
})

myPromise2
.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})
// console.log(myPromise2)

//Promise Chaining
let p1 = new Promise((resolve,reject)=>{
        console.log('Promise after 2 sec')
         setTimeout(()=>{
         resolve('Promised.')
         },2000)
})

 p1
 .then((value)=>{
    console.log(value)

    let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('On the way.')
    },2000)})
    return p2
})
 .then((value)=>{
    console.log(value)

    let p3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve('Finally Done!')
        },2000)
    })
    return p3
})
 .then((value)=>{
    console.log(value)
})

//Quick Quiz : Rewrite the loadscript function using promises.

function load(url){
    return new Promise((resolve, reject)=>{
        console.log('Loading script.......')
        setTimeout(()=>{
            let script = document.createElement('script')
            script.src = url
            script.onload = function(){
                resolve('Script Loaded.')
            }
            script.onerror = function(){
                reject('A problem occurred in loading script.')
            }
            document.body.appendChild(script)
        },5000)
    })
}
load("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

.then((value)=>{
    console.log(value)
    return load("F:/JavaScript/script_DOM.js")
})
.catch((error)=>{
    console.log(error)
})
.then((value)=>
console.log(value))