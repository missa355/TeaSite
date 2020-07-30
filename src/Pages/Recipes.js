import React from 'react'
import "./Recipes.css"
import Menu from "../components/Menu"
import NAV from '../components/NAV'

//import Card from "../components/Card"
export default function Recipes() {

    return (
        <div>
            <div className="TEXT">
            <NAV className='NAV'/>

                <h2>RECIPE PAGE</h2>
                <Menu/>
            </div>

        </div>
    )
}
