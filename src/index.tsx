import React from 'react';
import ReactDOM from 'react-dom';
// import { createServer, Model } from 'miragejs';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// como criar rotas com o miragejs
// createServer({
//   models: {
//     transaction: Model,
//   },

//   seeds(server) {
//     server.db.loadData({
//       transactions: [
//         {
//           id: 1,
//           title: 'Freelancer de website',
//           type: 'deposit',
//           category: 'Dev',
//           amount: 6000,
//           createdAt: new Date('2022-02-21 09:00:00')
//         },
//         {
//           id: 2,
//           title: 'Aluguel',
//           type: 'withdraw',
//           category: 'Casa',
//           amount: 1100,
//           createdAt: new Date('2022-02-22 09:00:00')
//         }
//       ]
//     })
//   },

//   routes() {
//     this.namespace = 'api';

//     this.get('/transactions', () => {
//       return this.schema.all('transaction');
//     })

//     this.post('/transactions', (schema, request) => {
//       const data = JSON.parse(request.requestBody);

//       return schema.create('transaction', data);
//     })
//   }
// })


