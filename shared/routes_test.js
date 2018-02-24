import App from './App';
import Module1 from './module1/Container';
import Module2 from './module2/Container';

const routes = [
  {
    component: App,
    routes: [
      {
        path: '/module1',
        exact: true,
        component: Module1
      },
      {
        path: '/module2',
        exact: true,
        component: Module2
      }
    ]
  }
];

export default routes;
