const axios = require('axios');
const db = require('../helpers/db');

const fetchItems = async () => {
  const url = 'https://www.reddit.com/r/scriptedasiangifs/new.json?limit=10';

  const response = await axios.get(url);
  const children = response.data.data.children;
  const items = children.map(({ data }) => {
    return {
      image: data.url,
      title: data.title,
      author: data.author,
      link: `https://reddit.com${data.permalink}`,
    };
  });
  return items;
};

const insertItems = async (items) => {
  try {
    await db.query('INSERT INTO content (image, title, author, link) VALUES ?', [
      items.map((item) => Object.values(item)),
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    db.end();
    return true;
  }
};

module.exports = { fetchItems, insertItems };
