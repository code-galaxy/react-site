import './App.css';
import About from './About/About';
import Header from "./Header/Header";
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Erorr from './Erorr/Erorr';

// import Projects from './Main/Projects/Projects';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Erorr />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
