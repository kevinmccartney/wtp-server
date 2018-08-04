import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';

hydrate(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById('app'),
);
