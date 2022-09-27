import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'; // downgrade to react-scripts@4.0.3.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Neo4jProvider, createDriver } from 'use-neo4j';

// initialize driver
const driver = createDriver('bolt', '127.0.0.1', 7687, 'neo4j', 'user');

//const driver = initDriver('bolt://127.0.0.1:7687', 'neo4j', 'user');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Neo4jProvider driver = { driver } >
      <App />
    </Neo4jProvider>
  </React.StrictMode>
);
// driver = { driver }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
