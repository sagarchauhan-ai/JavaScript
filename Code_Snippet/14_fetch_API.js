let p = fetch("https://goweather.herokuapp.com/weather/Uttrakhand")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)       //boolean true if the http code is 200-299
    console.log(response.headers)    //response header
    // console.log(response.text())  //read and return the text
     return response.json()          //parse the response as json object
    })
.then((response)=>{
    console.log(response)
    
})
.catch((error)=>{
    console.log(new Error('Data Fetching Failed'))
})

// Request headers
// let q = fetch('https://goweather.herokuapp.com/weather/Uttrakhand/',{
//     headers : {
//         Authorization: 'secret'
//     }
// })

// q.then((response)=>{
//      return response.json()
//     })
// .then((response)=>{
//     console.log(response)
    
// })


//POST Request

const createTodo = async(todo)=>{
    let options ={
        method : 'POST',
        body : JSON.stringify(todo),
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    let q = await fetch ('https://jsonplaceholder.typicode.com/posts', options)
    let response = await q.json()
    return response
} 


const mainFunc = async ()=>{
    let todo = {
        title: 'Name',
        body: 'Sagar',
        userId: 1,
      }
    let Todo = await createTodo(todo)
   console.log(Todo)
   console.log(await getTodo(5))
}

const getTodo = async(id)=>{
    let wait = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
    let r = await wait.json()   
    return r

}
mainFunc()