import express from 'express';

const app = express();

app.get('/*', (req, res) => res.send('Hello World!'));

// lock down all other methods for all other routes
app.all('*', (req, res) => res.status(405).send({
  message: 'Method not allowed',
  code: 405
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
