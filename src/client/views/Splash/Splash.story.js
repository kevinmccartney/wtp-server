import React from 'react';
import { storiesOf } from '@storybook/react';

import Splash from '@views/Splash';

storiesOf('Views', module)
  .add(
    'Splash',
    (() => (
      <Splash />
    )),
  );
