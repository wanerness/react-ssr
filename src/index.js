import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appReducer from "./reducers";
console.log(window)
let initState = window.__INITIAL_STATE__||{num:10}
const store = createStore(appReducer,initState)

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>)
,
 document.getElementById('root'));
registerServiceWorker();
