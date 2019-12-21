import React, { Component } from 'react'
import "./Footer.css"
import tearura from "../Photos/tearura.png"


export class Footer extends Component {
    render() {
        return (
            <div>
                {/* <ul className="LISTS_OF_LISTS">
                    <li className="inner_li">
                        <ul className="INNER_LIST">
                            <li><h3>PRODUCTS</h3></li>
                            <li>SOURCE OF INGREDIENTS</li>
                            <li>SUPPLIERS</li>
                            <li>CONTRIBUTERS</li>
                            <li>CERTIFACETS</li>
                        </ul>
                    </li>
                    <li className="inner_li">
                        <ul className="INNER_LIST">
                            <li><h3>OUR ORIGIN</h3></li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                        </ul>
                    </li>
                    <li className="inner_li">
                        <ul className="INNER_LIST">
                            <li><h3>THE COMMUNITY</h3></li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                        </ul>
                    </li>
                    <li className="inner_li">
                        <ul className="INNER_LIST">
                            <li><h3>CONTACT</h3></li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                            <li>COFEE SOURCE</li>
                        </ul>
                    </li>
                </ul> */}
                <img src={tearura} alt="IMG"/>

            </div>
        )
    }
}

export default Footer
