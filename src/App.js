import { BrowserRouter as Router, Routes, Route, Link, generatePath } from 'react-router-dom'; // Route replaced by Routes in v6
import { Menu } from 'semantic-ui-react';
import Home from './views/Home';
import PathwayGrid from './views/PathwayGrid';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const client = axios.create({
    baseURL: "http://127.0.0.1:8080/api/"
  });

  const [ pathways, setPathways ] = useState([])

  console.log(pathways)

  useEffect(() => {
    client.get('pathways/').then((data) => {
       setPathways(data);
    });
 }, []);

  return (
    <div className="App">
      <Router>
        <Menu>
          <Menu.Item as = {Link} to = "/">Home</Menu.Item>
          <Menu.Item as = {Link} to = "/pathways">Pathways</Menu.Item>
        </Menu>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/pathways/" element = {<PathwayGrid {...pathways} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
