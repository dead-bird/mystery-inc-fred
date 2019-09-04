import { scheduleJob } from 'node-schedule';
import dotenv from 'dotenv/config';
import Twitter from 'twitter';
import data from './data.js';

const cron = process.env.cron || '30 7 * * *';
const client = new Twitter(process.env);
const fred = data.fred();

console.log('I think node sucks');

scheduleJob(cron, async () => {
  let media = '';
  let item = '';

  try {
    media = await client.post('media/upload', { media: fred });
    item = await data.get();
  } catch (e) {
    throw e;
  }

  const status = {
    status: `I think ${item.text} sucks`,
    media_ids: media.media_id_string,
  };

  client
    .post('statuses/update', status)
    .then(() => data.set(item))
    .catch(e => console.log(e));
});
