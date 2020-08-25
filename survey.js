const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)? ", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`${answer1} enjoys ${answer2} while listening to ${answer3}. Of all the meals in the day ${answer4} is their favourite, and ${answer5} is their favourite part of that meal. Sometimes they like to eat while watching ${answer6} on tv. If they were a superhero, their superpower would be ${answer7}.`);
              rl.close();
            })
          })  
        })
      })
    })
  })
});