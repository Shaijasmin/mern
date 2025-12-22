import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
    <nav>       
          <ul className='Navbar'>
                <li><Link to="/"Home></Link></li>
                <li><Link to="/about"About></Link></li>
                <li><Link to="/contact"></Link></li>
                <li><Link to="/services"></Link></li>
                <li><Link to="/usestate"></Link></li>
                <li><Link classname='Link'to="/useEffect"></Link></li>
                    
      
              
          </ul>
   </nav>
  </div>
  )
}

export default Navbar