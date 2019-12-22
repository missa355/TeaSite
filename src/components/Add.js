import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export class Add extends Component {
    state = {
        title: "choose"
    }

    clickMe = (e, text) =>{
        this.setState({title: text})
        this.props.title(text)//how to pass a variable from child to parent.
    }


    render() {


        return (
            <div>
                <h5>When to enjoy?</h5>
                <DropdownButton variant="outline-dark" size="lg" id="dropdown-basic-button" title={this.state.title}>
                    <Dropdown.Item href="#/action-1" onClick={(e) => {this.clickMe(e, "relax")} }>relax</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={(e) => {this.clickMe(e, "Focus")} }>Focus</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={(e) => {this.clickMe(e, "Calm")} }>Calm</Dropdown.Item>
                    <Dropdown.Item href="#/action-1" onClick={(e) => {this.clickMe(e, "Taste")} }>Taste</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" onClick={(e) => {this.clickMe(e, "Health")} }>Health</Dropdown.Item>
                </DropdownButton>
                
            </div>
        )
    }
}
export default Add
