import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App/AdminRoute';
import registerServiceWorker from './App/registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();