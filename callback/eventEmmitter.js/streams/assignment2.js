// Assignment: create a stream that fetches data from a given url/domain and saves the same into a file called "onlineData.txt"
const fs = require('fs');
const https = require('https'); // Use http for non-SSL websites
const { pipeline } = require('stream');

// Change this to any public API or file you want to download
const url = 'https://jsonplaceholder.typicode.com/posts';

https.get(url, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to fetch data. Status: ${response.statusCode}`);
    return;
  }

  const writeStream = fs.createWriteStream('onlineData.txt');

  pipeline(response, writeStream, (err) => {
    if (err) {
      console.error('❌ Pipeline failed.', err);
    } else {
      console.log('✅ Data fetched and saved to onlineData.txt');
    }
  });
});
