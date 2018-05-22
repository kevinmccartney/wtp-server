import path from 'path';
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import connectRedis from 'connect-redis';
import passportSpotify from 'passport-spotify';
import dotenv from 'dotenv';

import config from './config';
import routes from './routes';

import spotifyApi from './services/spotifyApi';

const SpotifyStrategy = passportSpotify.Strategy;
const RedisStore = connectRedis(session);
const app = express();

dotenv.config();

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new SpotifyStrategy({
  clientID: config.spotify.clientId,
  clientSecret: config.spotify.clientSecret,
  callbackURL: 'http://localhost:3000/auth/spotify/callback'
}, (accessToken, refreshToken, expiresIn, profile, done) => {
  spotifyApi.setAccessToken(accessToken);
  spotifyApi.setRefreshToken(refreshToken);

  done(null, profile);
}));

app.use(session({
  store: new RedisStore({
    url: config.redisStore.url
  }),
  secret: config.redisStore.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, '', 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', routes);

// catch 404 and forward to error handler
// app.use((req, res, next) => {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use((err, req, res) => {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }

// production error handler
// no stacktraces leaked to user
// app.use((err, req, res) => {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// lock down all other methods for all other routes
// app.all('*', (req, res) => res.status(405).send({
//   message: 'Method not allowed',
//   code: 405
// }));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
