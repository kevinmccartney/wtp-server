import Splash from '@views/Splash';
import Party from '@views/Party';

const routes = [
  {
    path: '/',
    exact: true,
    component: Splash,
  },
  {
    path: '/party',
    exact: true,
    component: Party,
  },
];

export default routes;
