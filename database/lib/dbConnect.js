import {} from 'dotenv/config';
import mongoose from 'mongoose';

function connectWithRetry(count = 0) {
  mongoose.connect(process.env.MONGO_URL, (err) => {
    if (err) {
      if (count === 3) {
        throw Error('failed to reconnect to mongo after 3 attempts');
      }
      count += 1; // eslint-disable-line no-param-reassign
      console.error('failed to connect on first attempt, attempting to reconnect');
      setTimeout(connectWithRetry.bind(null, count), 2000);
    }
  });
}

connectWithRetry();
