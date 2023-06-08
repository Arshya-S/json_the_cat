const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error,response,body) =>{
    if (error) {
      callback(error, null);
    } else {
      try {
        const data = JSON.parse(body);
        const description = data[0].description;
        callback(null, description);
      } catch (error) {
        callback(error, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };








