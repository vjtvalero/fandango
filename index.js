const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const { fetchItems } = require('./controllers/scraper.js');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.get('/fire', async (req, res) => {
  const items = await fetchItems();
  await insertItems(items);
  res.send('Success!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
