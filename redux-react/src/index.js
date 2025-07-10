import React from 'react';
import ReactDOM from 'react-dom/client';
import AppComponent from './components/AppComponent.jsx';
import rootReducer from './reducers/rootReducer.js';
import GetEmployeeLength from './components/GetEmployeeLength.jsx';
import SampleComponent from './components/SampleComponent.jsx';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import {thunk} from 'redux-thunk';
import { loadEmployeeData } from './actions/employeeActions.js';

var createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// Create a store for Redux - Store Requires a reducer function
// var appStore = createStore(rootReducer);
var appStore = createStoreWithMiddleware(rootReducer);

debugger;
appStore.dispatch(loadEmployeeData())

const root = ReactDOM.createRoot(document.getElementById('root'));

// Provider is connecting the store Data to the react Components
root.render(
  <Provider store={appStore}>
    <GetEmployeeLength></GetEmployeeLength><hr/><hr/>
    <AppComponent />
    <SampleComponent></SampleComponent>
  </Provider>
);


