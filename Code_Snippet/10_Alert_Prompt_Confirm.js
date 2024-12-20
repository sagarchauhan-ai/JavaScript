alert("Please answer the question")
//Used to invoke a mini window with a message.

let question = prompt("Enter your name", "Your Name")
//Used to take user input.

alert(`You entered the type ${typeof question}`)

let write = confirm('Do you want to print it')
if(write == true){
   console.log(document.write(question))
}
//Shows a message and waits for the user to press OK or Cancel.
//Returns true for OK and false for Cancel.