    // const jokes = [
    //     "What has ears but can’t hear? A cornfield!",
    //     "What do you call a man with a seagull on his head? Cliff.",
    //     "How much did the pirate pay to get his ears pierced? A buccaneer!",
    //     "What did the grape say when the giant sat on it? Nothing. It just gave a little wine.",
    //     "What’s the best way to throw a party on Mars? You planet.",
    //     "Why did everyone want to hang out with the mushroom? He’s a fungi.",
    //     "Why did the clown always choose the red balloon? Because they were pop-ular.",
    //     "Why can't you see elephants when they hide in trees? Because they're good at it.",
    //     "What did the fish say when she swam into a wall? Dam.",
    //     "Someone stole all my lamps. I should be upset, but I'm just de-lighted.",
    //     "Did you hear about the cheese factory that exploded in France? There was de-Brie everywhere.",
    //     "How does a penguin build his house? Igloos it together.",
    //     "A big moron and a little moron were standing on a cliff. The big moron fell off. Do you know why the other one didn't? Because he was a little more on.",
    //     "What's brown and sticky? A stick.",
    //     "What did the right eye say to the left eye? Between you and me, something smells.",
    //     "What do you call a magic dog? A labracadabrador.",
    //     "How do poets say hello? Hey, haven’t we metaphor?",
    //     "What did the 0 say to the 8? Nice belt!",
    //     "What do you call a train carrying lots of bubblegum? A chew-chew train"
    // ];

    
    
    function displayRandomJoke() {
      let joke = fetch(' https://official-joke-api.appspot.com/random_joke')
    joke.then((response)=>{
      return response.json()
    }).then((data)=>{
        let JK = document.getElementById("joke")
        JK.innerHTML = `${data.setup} :: ${data.punchline}`
    })
     }
