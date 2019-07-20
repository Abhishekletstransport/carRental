import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import customRenderer from './routes/customRenderer.js';
import LoaderComponent from './components/loaderComponent';
import routes from './routes';
import store from './store';

const AppWithRouter = () => (
  <Provider store={ store }>
    <Router>
      <LoaderComponent />
      {
        customRenderer(routes)
      }
    </Router>
  </Provider>
);

const bootstrapper = {
  start() {
    render(
        <AppWithRouter />,
        document.getElementById('root')
    );
  },
};

export default bootstrapper;
