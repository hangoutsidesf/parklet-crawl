import express from 'express'

const PORT = 3000;
const app = express();

app.all('*', (req, res) => res.send('Henlo stinky lizar'))

app.listen(PORT, () => `listening at port: ${PORT}`);
