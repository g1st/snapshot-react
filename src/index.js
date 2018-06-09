import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter basename="/snapshot-react">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
