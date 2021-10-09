import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Application from './Application';
import './index.scss';

ReactDOM.render(
  /**
   * Provider is API of react-redux library which connects store to our application
   */
  <Provider store={store} >
    <React.StrictMode>
      <Application />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
