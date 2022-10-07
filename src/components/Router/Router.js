import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { PathwayGrid } from '../Pathway';
import Pathway from '../../pages/Pathway';
import Home from '../../pages/Home';

const Router = () => (
    <BrowserRouter>
    <div>
      <div>Home</div>
    </div>
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/pathways/" element = {<PathwayGrid />} />
      <Route path = "/pathway/" element = { <Pathway loading /> } />
    </Routes>
  </BrowserRouter>
);

export default Router;