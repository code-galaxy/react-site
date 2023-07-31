import './Navside.css';
import { Link } from 'react-router-dom';

function Navside() {
   return (
      <div className="Navside-container">
         <div className="Navside-logo">
            <Link to="/home" className='Navside-logo'>.code-galaxy <span>tech</span></Link>
         </div>
         <nav className="Navside-menu">
            <ul>
               <li className="nav-item"> <Link to="/home">Home </Link></li>
               <li className="nav-item"> <Link to="/about">About</Link></li>
               <li className="nav-item"> <Link to="/projects">Projects</Link></li>
               <li className="nav-item"> <Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
      </div>
   )
}
export default Navside;