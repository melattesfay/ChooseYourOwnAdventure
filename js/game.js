// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "http://maplehills.org/wp-content/uploads/2018/07/Jumanji-Welcome-to-the-Jungle-2017trtr.jpg",
    levels: {

        start: {
            
            message: "You and your friends discover an old video game console",
            choices: [
                {
                    text: "Play the game",
                    nextLevel: "cave",
                },

                {
                    text: "Keep on moving",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You are being chased by cyclists !",
            choices: [
                {
                    text: "fight",
                    nextLevel: "send",
                },
                {
                    text: "run",
                   nextLevel: "field",
                }
                  
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    },
     send:{
            message: "your friend is being eaten by a hippo!",
            choices: [
                {
                    text: "help your frind",
                    nextLevel: "start",
                },
                
                {
                
                
                   text: "keep on moving",
                   nextLevel: "go",
                }
                ]
     },
      go: {
            message: "you are a true jumanji",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ], 
      },

     
};
