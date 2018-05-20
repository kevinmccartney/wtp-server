import React from 'react';
import express from 'express';

import {renderToString} from 'react-dom/server';

import StaticRouter from 'react-router-dom/StaticRouter';
import {renderRoutes} from 'react-router-config';

import routes from 'wtp-client/dist/routes';

// eslint-disable-next-line
const router = express.Router();

router.get('*', (req, res) => {
  const context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  if (context.status === 404) {
    console.log(context);
    res.status(404);
  }

  res.render('index', {title: 'SSR React boi', content});
});

module.exports = router;
