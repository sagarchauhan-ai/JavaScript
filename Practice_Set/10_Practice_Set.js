
//1. Use a free API from the internet & fead your app with live data.
let url = "http://universities.hipolabs.com/search?country=India"
let response = fetch(url)
response.then((v)=>{
    return v.json()
}).then((university)=>{
    innerhtml = ""
    for(value in university){
        console.log(university[value])
        innerhtml += `<div class="card my-2 mx-2" style="width: 20rem;">
          <img src="https://imgs.search.brave.com/-BjM49q9ivAJLshLlOeEQ2baBZpqlBNdsOEpPkL_vIc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qb3VybmV5LXRo/cm91Z2gtaGVhcnQt/bGFyZ2UtdW5pdmVy/c2l0eS1jYW1wdXMt/d2l0aC1tYWluLWJ1/aWxkaW5nLWdlbmVy/YXRpdmUtYWlfNjM0/MzU4LTExNzguanBn/P3NpemU9NjI2JmV4/dD1qcGc" class="card-img-top" alt="...">
          <div class="card-body ">
            <h5 class="card-title">${university[value].name}</h5>
            <a href="${university[value].web_pages}" class="btn btn-primary">Contact</a>
          </div>
        </div>`
    }
   let container = document.getElementById("card-container")
   container.innerHTML = innerhtml
})
.catch((error)=>{
  throw new Error('Data fetching failed!!')
})


//2.Create a note saving app which stores your note to localStorage.

let input = prompt('Enter your note:')

if(input){
  localStorage.setItem("Note",input)
}

//3.Fetch the note from localStorage which was recently saved.
let get = localStorage.getItem("Note")
alert(`Your note is ${get}`)

//4.Delete the note that you save in localStorage.
let Delete = confirm("Do you want to delete your note?")
if(Delete){
  localStorage.removeItem("Note")
  alert('Note deleted!')
}