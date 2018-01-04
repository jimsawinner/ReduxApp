var React = require('react-native');
var { AppRegistry, StyleSheet, Text, View } = React;
var Login = require('./app/components/Login');
var userReducers = require('./app/reducers/user');

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux/native';

let store = createStore(combineReducers({userReducers}));

class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}

class MyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('MyApp', () => MyApp);