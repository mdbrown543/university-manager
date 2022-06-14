import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router} from 'react-router-dom';
import {createStore} from "redux";
import studentReducer from './redux/studentReducer';
import {composeWithDevTools} from "redux-devtools-extension"
import { Provider } from 'react-redux';

const store = createStore(studentReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>
);