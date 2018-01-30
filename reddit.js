const bilbo = require("path");
const frodo = require("fs");
let request = require("request");

let rp = require("request-promise");


let reddit=[];

let options = {
  encoding: null,
  json: true,
  uri: "https://reddit.com/r/popular.json",
  
};

let dataPath = bilbo.join(__dirname, './popular-articles.json');

rp(options)
  .then(data => {
      data.data.children.forEach(item => {
          reddit.push(item.data.author + '\n' + item.data.url + '\n' + item.data.title + '\n');
      })
      reddit.forEach(item => {
          frodo.appendFileSync(dataPath, item)
      })
  })
  

  
