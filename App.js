import React from 'react';
import { Provider } from 'react-redux';

import Router from './src/Router';

export default class App extends React.Component {
    render() {
        return (
          <Provider>
            <Router />
          </Provider>
        );
    }
}