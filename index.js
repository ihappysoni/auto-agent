// Import dependencies
const express = require('express');
const axios = require('axios');

// Create Express application instance
const app = express();

// Define a route handler for the root path
app.get('/', async (req, res) => {
    try {
      // Make a GET request to an external API
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  
      // Extract the data from the API response
      const posts = response.data;
  
      // Send the JSON data as the response
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });

// Define a route handler for the individual post path
app.get('/posts/:id', async (req, res) => {
    try {
      // Extract the post ID from the URL parameter
      const id = req.params.id;
  
      // Make a GET request to an external API for a specific post
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
      // Extract the data from the API response
      const post = response.data;
  
      // Send the JSON data as the response
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred');
    }
  });
  

// Start the server
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
