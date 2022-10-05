import { BrowserRouter as Router, Routes, Route, Link, generatePath } from 'react-router-dom'; // Route replaced by Routes in v6
import API from "./api";
import { Menu } from 'semantic-ui-react';
import Home from './views/Home';
import { PathwayGrid } from "./components";
import React, { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [ pathways, setPathways ] = useState([])

  useEffect(() => {
    API.get('pathways/').then((data) => {
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
