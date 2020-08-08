import React, { Component } from 'react'
import './NAV.css'
import logo from "../Photos/tea_logo.png"
import {Link} from "react-router-dom"
import CartBadge from "../components/CartBadge/CartBadge"
export class NAV extends Component {
    render() {
        return (
            <div>
                <header className="head">
                    
                        <Link to="/"><img src={logo} alt="IMG" id="first"/> </Link> 
                        <Link to="/" className="Link" >P R O D U C T S</Link>

                        {/* <Link to="/" className="Link">T E A</Link>
                        <Link to="/" className="Link"> S W E E T S</Link> */}
                        {/* <Link to="/recipes" className="Link">M E N U</Link> */}
                        {/* <Link to="/ShoppingCart" className="Link">C A R T</Link> */}
                        <Link to="/ShoppingCart" id="badge"><CartBadge/></Link>


                        {/* <Link to="/" className="Link">A D D &emsp; R E C I P E</Link> */}
                            {/* <ul className="header">
                                <li><Link to="/" className="Link">C O F F E E</Link></li>
                                <li><Link to="/" className="Link">T E A</Link></li>
                                <li>S<Link to="/" className="Link"> W E E T S</Link></li>
                                <li><Link to="/recipes" className="Link">M E N U</Link></li>
                                <li>A D D &emsp; R E C E P I E</li>
                                <li><Link to="/" className="Link">R E W A R D S</Link></li>
                                    
                            </ul> */}
                    

                </header>
            </div>
        )
    }
}

export default NAV
