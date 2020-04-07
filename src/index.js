import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "mobx-react";
import RootStore from "./stores";

const root = new RootStore();

ReactDOM.render(
  <Provider {...root}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

