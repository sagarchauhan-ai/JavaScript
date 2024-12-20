//1. Create A variable of type string and try to add a number to it.

let sentence = "Sagar Chauhan"
let num = 12
console.log(sentence+num)

//2. Use type of operator to find the datatype of the sentence in last question.

   console.log(typeof sentence)
   console.log(typeof num)
   console.log(typeof(sentence+num))

// 3. Create a const object in javascript.Can you change it to hold a number later?

const A= {
  name : "Shubham",
  section : 1,
  Monitor : false,
}
// A = 45 (Cannot store a number in a const object )

//4. Try to add a new key to the const object in [3.].Were you able to do it?

  A['friend'] = "Sammy",
  A['section'] = 2
  console.log(A)  // we can add keys to the object and can make changes to the key values.

  //5. Create a word meaning dictionary of 5 words.
  
    const dict = {
      Esculent : "Suitable for use as food; edible.",
      Woe : "Great sorrow or disentenceess.",
      Fawn : "To exhibit exaggerated flattery or affection, typically in order to gain favor or advantage.",
      Bilk : "To cheat or defraud someone out of something valuable.",
      Tact : "Sensitivity in dealing with others or with difficult issues.",
    }
    console.log(dict.Esculent)
    console.log(dict.Woe)
    console.log(dict.Fawn)
    console.log(dict.Bilk)
    console.log(dict.Tact)