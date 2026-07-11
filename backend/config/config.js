require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  YTS_API_URL: process.env.YTS_API_URL || 'https://movies-api.accel.li/api/v2/',
  IMDB_API_URL: process.env.IMDB_API_URL || 'https://api.imdbapi.dev',
  SUBSOURCE_API_URL: process.env.SUBSOURCE_API_URL || 'https://api.subsource.net/api/v1',
  SUBSOURCE_API_KEY: process.env.SUBSOURCE_API_KEY,
};
