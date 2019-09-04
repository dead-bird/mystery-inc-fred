import fs from 'fs';

// const index = ['people', 'companies', 'politics', 'countries', 'jobs'];
const index = ['people'];

const get = () =>
  new Promise((resolve, reject) => {
    const file = index[random(0, index.length - 1)];

    fs.readFile(`data/${file}.json`, (err, data) => {
      if (err) return reject('Error reading file: ', err);

      const items = JSON.parse(data).filter(item => !item.tweeted);

      resolve({ file, ...items[random(0, items.length - 1)] });
    });
  });

const set = item => {
  // get JSON file using `item.file`
  // find item from file using `item.slug`
  // set tweeted to true
  // save and override original JSON?
};

const fred = () => fs.readFileSync('data/fred.png');

// Get random int
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default { get, set, fred };
