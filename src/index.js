import app from './app';

require('dotenv').config();

const { PORT = 3000 } = process.env;

app.listen(PORT, () => console.log(`( ͡° ͜ʖ ͡°)☞  ${PORT}`)); // eslint-disable-line
