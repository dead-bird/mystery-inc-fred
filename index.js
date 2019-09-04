import { scheduleJob } from 'node-schedule';
import dotenv from 'dotenv/config';

const cron = process.env.cron || '30 7 * * *';

scheduleJob(cron, () => {
  console.log('I think node sucks');
});
