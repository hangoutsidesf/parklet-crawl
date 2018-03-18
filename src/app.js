import express from 'express';
import { json as parseJSON } from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(parseJSON());

app.all('*', (req, res) => res.sendStatus(200));

export default app;
