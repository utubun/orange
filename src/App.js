import { BrowserRouter as Router, Routes, Route, Link, generatePath } from 'react-router-dom'; // Route replaced by Routes in v6
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Home from './views/Home';
import { PathwayGrid } from "./components";
import './App.css';


function App() {

  return (
    <div className="App">
      <Router>
        <div>
          <div>Home</div>
          <div>Pathways</div>
        </div>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/pathways/" element = {<PathwayGrid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
