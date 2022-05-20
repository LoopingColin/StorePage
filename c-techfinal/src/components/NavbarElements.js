import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
            <nav className="nav navbar top-nav justify-content">
                <li className="top-nav-item nav-item"><Link to="/GamingPCs" className="nav-link top-nav-link">Gaming  PCs</Link> </li>
                <li className="top-nav-item nav-item"><Link to="/About" className="nav-link top-nav-link">About</Link></li>
                <li className="top-nav-item nav-item"> <Link to="/Checkout" className="nav-link top-nav-link">Make an Order</Link></li>
            </nav>
    )
}

export default Navbar