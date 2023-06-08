const request = require('request');
const breed = process.argv[2];




const breedFetcher = (breed) => {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breed, (error,response,body) =>{
    if (error) {
      console.log(error);
    }
    
    try {
      const data = JSON.parse(body);
      const description = data[0].description;
      console.log(description);
    } catch (err) {
      console.log('breed not found');
    }
    
    
    
    
  });
};


breedFetcher(breed);
