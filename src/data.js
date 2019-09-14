import { MongoClient } from 'mongodb';
import fs from 'fs';

const db = null;
const url = 'mongodb://localhost:27017/fred';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

MongoClient.connect(url, options)
  .then(d => (db = d.collection('tweets')))
  .catch(e => console.error(e));

const get = () =>
  new Promise((resolve, reject) => {
    db.find()
      .then(d => resolve(d))
      .catch(e => reject(e));
  });

const set = item => {};
const fred = () => fs.readFileSync('data/fred.png');

export default { get, set, fred };
