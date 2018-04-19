import {} from 'dotenv/config';
import mongoose from 'mongoose';

async function connectWithRetry(numRetries = 3) {
  for (let i = 1; i <= numRetries; i += 1) {
    try {
      await mongoose.connect(process.env.MONGO_URL); // eslint-disable-line no-await-in-loop
      break;
    } catch (error) {
      if (i === numRetries) throw Error("couldn't connect to db", error);
    }
  }
}

function connectToMongo(cb) {
  if (process.env.NODE_ENV !== 'test') {
    connectWithRetry();
    if (cb) cb();
  }
}

connectToMongo();

export { connectWithRetry, connectToMongo };
