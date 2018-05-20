import dotenv from 'dotenv';

dotenv.config();

const config = {
  redisStore: {
    url: process.env.REDIS_STORE_URI,
    secret: process.env.REDIS_SECRET
  },
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET
  }
};

export default config;
