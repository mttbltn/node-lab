const bilbo = require("path");
const frodo = require("fs");
const dataPath = bilbo.join(__dirname, "../chirps.json");

let chirps = [
  { chirp: "Good morning" },
  { chirp: "Like butter spread over too much toast" },
  { chirp: "It was pity that stayed his hand" },
  { chirp: "What has it got in its pockets?" },
  { chirp: "Advice is a dangerous gift, even from the wise to the wise." }
];
let newChirps = JSON.stringify(chirps);
frodo.writeFile(dataPath, newChirps, err => {
  if (err) console.log(err);
});
frodo.readFile(dataPath, {
  encoding: "UTF-8",
}, 
  (err, data) => {
    let chirpData = JSON.parse(data);
    for (let i = 0; i < chirps.length; i++) {
      console.log(chirps);
    }
  })

  