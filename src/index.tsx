import * as React from 'react';
import { render } from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './routes';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(App);

declare let module: { hot: any };

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoute = require('./routes').default;

    renderApp(newRoute);
  });
}