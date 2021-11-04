const request = require('request');

let nameId = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${nameId}`, (error, response, body) => {


  if (error) {
    return console.log("Failed to get details.", error);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("Not a cat breed my guy...");
  } else {
    console.log(data[0].name);

  }
});

