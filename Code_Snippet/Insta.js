//Promises in JS
//It has two possible outcomes : resolve for success and reject for failure.
const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success = false;
        if(success){
            resolve('Data fetched successfully.');
        }
        else{
            reject('Data fetching failed!')
        }
    },2000);
})

myPromise
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject);
})


let a ='a'
let b = a.charCodeAt(a)
console.log(b)

let x ='z'
let y = x.charCodeAt(x)
console.log(y)

//----------------------------ASCII CODES  (American Standard Code for Information Interchange ) -------------------------------------------------------------------------------------------------------

//For printing A to Z.

for (let i=65; i<=90; i++){                        
    console.log(String.fromCharCode(i))
}


//For printing a to z.

for (let i=97; i<=122; i++){
    console.log(String.fromCharCode(i))
}


//Function to print the number of vowels in a word.

function vowelcount(string){
    let count = 0;
    let vowels = "aeiouAEIOU";
     for (let i of string){
        if(vowels.includes(i)){
            count++;
            console.log(`Vowel in this string ${string} is ${i}`)
        }
    }
    console.log(`The vowel count is ${count}`); 
}
vowelcount("SaGaR ChAuHaN")
    

function counter(){
    let count = 0;
    return () => count++;
}
let c = counter();
console.log(c())
console.log(c())
console.log(c())


let array = [4, 5, 8, 1, 0 ]
// const sort = (a, b)=> {
//     return a-b;
// }
// array.sort(ar)
// console.log(array)
console.log("result",array.length)

for(let i=1; i<array.length; i++){
    let current = array[i];
    let j = i-1;
    while(j>=0 && array[j] > current){
        array[j+1]= array[j];
        j--;
    }
    array[j+1] = current
    console.log(array)
}

const obj ={
    "1": "a",
     1 : "b",
    [1]: "c",
}

console.log(obj["1"])