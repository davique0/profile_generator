const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (name) => {
  rl.question('What\'s an activity you like doing? ', (hobby) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? (dinner, brunch, luch, etc) ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superP) => {

              console.log(`Hello my name is ${name}, I love to ${hobby}. In my free time I love to listen to ${music}, and dance all the way. My favorite meal is ${meal}, specially when it is ${food}. I normally play ${sport}, since it is my favorite sport. Fun fact about me I am really good at ${superP}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/

