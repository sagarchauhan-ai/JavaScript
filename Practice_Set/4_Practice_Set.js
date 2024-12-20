//1.Explore the includes, startswith and endswith function of a sentence.

let senTence = 'The quick brown fox jumped over the lazy dog';
const word = prompt('Enter your word : ');
include = `The word ${word} ${senTence.includes(word)? 'is' : 'is not'} in the sentence.`
console.log(include)

let sentence1 = 'The quick brown fox jumped over the lazy dog';
const word1 = prompt('Enter your word : ')
startswith = `The sentence ${sentence1.startsWith(word1)? 'starts with' : 'does not start with' } the word ${word1} .`
console.log(startswith)

let sentence2 = 'The quick brown fox jumped over the lazy dog';
const word2 = prompt('Enter your word : ');
endswith = `The sentence ${sentence2.endsWith(word2)? 'ends with' : 'does not ends with' } the word ${word2} .`
console.log(endswith)

//2.Extract the amount out of the string : "Please give me Rs 1000."

let str = 'The total amount is Rs 1000.'
let amount = Number.parseInt(str.slice(23))
console.log(amount)
