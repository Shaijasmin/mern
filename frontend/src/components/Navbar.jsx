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
                <li><Link to="/services"></Link>
            </ul>
        </nav>
  </div>
  )
}

export default Navbar