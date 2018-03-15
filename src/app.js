import express from 'express';
import { json as parseJSON } from 'body-parser';

const app = express();

app.use(parseJSON());

app.all('*', (req, res) => res.sendStatus(200));

export default app;
