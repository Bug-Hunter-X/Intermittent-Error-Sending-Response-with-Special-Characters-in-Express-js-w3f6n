const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    const response = {
      message: 'Hello, world! This response contains special characters: éàçüö.'
    };
    res.json(response);
  } catch (error) {
    console.error('Error sending response:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});