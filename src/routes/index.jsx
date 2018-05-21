import React from 'react';
import express from 'express';
import passport from 'passport';
import session from 'express-session';

import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import {renderRoutes} from 'react-router-config';

import routes from 'wtp-client/dist/routes';

function ensureAuthenticated(req, res, next) {
  const isAuthenticated = req.isAuthenticated();

  if (isAuthenticated) {
    return next();
  }
  res.redirect('/');
}

// eslint-disable-next-line
const router = express.Router();

router.get('/party', ensureAuthenticated, (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  res.render('index', {title: 'SSR React boi', content});
});

router.get(
  '/auth/spotify',
  passport.authenticate('spotify'),
  () => {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  }
);

router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', {failureRedirect: '/fail'}),
  (req, res) => {
    // Successful authentication, redirect home.
    console.log(req);
    console.log(res);
    session.accessCode = req.query.code;
    res.redirect('/');
  }
);

router.get('*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  res.render('index', {title: 'SSR React boi', content});
});

module.exports = router;
