import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import Store from './store/Store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
