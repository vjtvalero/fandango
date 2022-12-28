const axios = require('axios');

const fetchItems = async () => {
  const url = 'https://www.reddit.com/r/pics/new.json?limit=10';

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
    await query('INSERT INTO content () VALUES ()');
  } finally {
    conn.end();
    return true;
  }
};

module.exports = { fetchItems };
