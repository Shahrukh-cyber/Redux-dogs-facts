import React from 'react';
import ReactDOM from 'react-dom';
import { Theme } from '@twilio-paste/core/theme';
import { Provider } from 'react-redux';
import Application from './Application';
import './index.css';
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <Theme.Provider theme="default">
      <React.StrictMode>
        <Application />
      </React.StrictMode>
    </Theme.Provider>
  </Provider>,
  document.getElementById('root')
);
