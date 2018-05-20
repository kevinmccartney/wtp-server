import path from 'path';
import express from 'express';
import logger from 'morgan';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '', 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes);

// lock down all other methods for all other routes
// app.all('*', (req, res) => res.status(405).send({
//   message: 'Method not allowed',
//   code: 405
// }));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
