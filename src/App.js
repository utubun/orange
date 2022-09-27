import { BrowserRouter as Router, Routes, Route, Link, generatePath } from 'react-router-dom'; // Route replaced by Routes in v6
import { Menu } from 'semantic-ui-react';
import Home from './views/Home';
import PathwayGrid from './views/PathwayGrid';
import Loading from './components/Loading';
import Error from './components/Error';
import { useReadCypher, useWriteCypher } from 'use-neo4j';
import './App.css';


function App() {

  //const result = useReadCypher('MATCH (n:Pathway) RETURN n { .* } AS pathway;');
  
  const result = useReadCypher(`
    MATCH (p:Pathway)--(m:Module)--(r:Reaction)--(c:Compound)
    WITH p, 
         toInteger(count(DISTINCT m)) AS modules, 
         toInteger(count(DISTINCT r)) AS reactions, 
         toInteger(count(DISTINCT c)) AS compounds
    RETURN p { .*, modules, reactions, compounds } AS pathway;
    `
  );

  /*if (result.loading) {
    return <Loading />
  }

  if (result.error) {
    return <Error />
  }

  if (result.result) {
    result.records = toNativeTypes(result.records?.map((item) => item.get('pathway')));
  }*/

  
  

  return (
    <div className="App">
      <Router>
        <Menu>
          <Menu.Item as = {Link} to = "/">Home</Menu.Item>
          <Menu.Item as = {Link} to = "/pathway">Pathway</Menu.Item>
        </Menu>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/pathway/" element = {<PathwayGrid {...result} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
