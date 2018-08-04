import React from 'react';
import { storiesOf } from '@storybook/react';

import NotFound from '@views/NotFound';

storiesOf('Views', module)
  .add(
    'NotFound',
    (() => (
      <NotFound />
    )),
  );
