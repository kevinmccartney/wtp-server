import React from 'react';
import { storiesOf } from '@storybook/react';

import Party from '@views/Party';

storiesOf('Views', module)
  .add(
    'Party',
    (() => (
      <Party />
    )),
  );
