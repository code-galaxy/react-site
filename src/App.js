import './App.css';

import Header from "./Header/Header";
import Home from './Home/Home';
import About from './About/About';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import Erorr from './Erorr/Erorr';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* <Route path="*" element={<Erorr />} /> */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
