import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { createServer } from 'miragejs'


createServer({
  routes(){
    this.namespace = 'api'; //api é o nome da rota q ta no endereço do fetch

    this.get('/transactions', () => {
      return[{
        id: 1,
        title: "transactions no1",
        amount: 400,
        type : "deposit",
        category: "work"
      }]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);