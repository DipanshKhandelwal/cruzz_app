import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Router from './src/Router';
import reducers from './src/reducers';

export default class App extends React.Component {
    render() {
        return (
          <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
            <Router />
          </Provider>
        );
    }
}