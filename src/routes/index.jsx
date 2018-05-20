import React from 'react';
import express from 'express';
import passport from 'passport';

import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import {renderRoutes} from 'react-router-config';

import routes from 'wtp-client/dist/routes';

// eslint-disable-next-line
const router = express.Router();

router.get(
  '/auth/spotify',
  passport.authenticate('spotify'),
  (req, res) => {
    // The request will be redirected to spotify for authentication, so this
    // function will not be called.
  }
);

router.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', {failureRedirect: '/'}),
  (req, res) => {
    console.log(res);
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

router.get('*', (req, res) => {
  console.log(res.session);

  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  res.render('index', {title: 'SSR React boi', content});
});

module.exports = router;
