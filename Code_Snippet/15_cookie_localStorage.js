//Cookie is a way to store data directly in the browser.
//It is a small piece of data that is stored in the browser.
//It is used to store user information.

document.cookie = "Name=Sagar Chauhan"    //cookies are added to the browser
document.cookie = "Username=sagar_1204"

console.log(document.cookie)
console.log('Cookie')

let key = prompt('Enter your key.')
let value = prompt('Enter your value.')
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

//The encodeURIComponent() function is used to handle special characters..
//It is used to encode a URI.
//The encodedURIComponent cookie should not exceed more than 4kb.
//To delete a cookie, we can set the expiry date to the past.

//localStorage and related methods
let setKey = prompt('Enter the key you want to set.')
let setValue = prompt('Enter the value you want to set.')
localStorage.setItem(setKey, setValue)

console.log(`The value of key ${setKey} is ${localStorage.getItem(setKey)}`)

if(setKey == 'red' || setKey == 'blue'){
    localStorage.removeItem(setKey)
}

if(setKey == 0){
    localStorage.clear()
}
console.log(localStorage.key(1))
console.log(localStorage.key(3))
console.log(localStorage.key(5))
console.log(localStorage.length) 

//sessionStorage and related methods
//Properties and methods are same as local storage.
//Session Storage only exists in the current browser tab.
//The data survives page refresh, but not closing/opening the tab. 

//Storage Event
//The storage event is fired when a storage area is updated.
window.onstorage = (e) => {
    console.log('Storage event fired.')
}