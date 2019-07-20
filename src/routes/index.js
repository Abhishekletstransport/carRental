import {
  Home,
  NotFound,
  CarDetails,
} from './../pages';

export const URLS = {
  'HOME': '/',
  'CAR_DETAILS': '/details/:location/:startTime',
};

const routes = [
  {
    path: URLS.HOME,
    exact: true,
    component: Home,
  },
  {
    path: URLS.CAR_DETAILS,
    exact: false,
    component: CarDetails,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
