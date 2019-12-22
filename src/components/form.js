import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Add from './Add'
import axios from "axios"

export class form extends Component {
    state = {
        choose:"",
    }
    componentDidMount() {
        axios.get('http://localhost:5000/Recipes/')
        .then(res => console.log(res.data))
          .catch((error) => {
            console.log(error);
          })
    
      }

    click = (e) => {
        e.preventDefault()
        const recipe = {
            recipename:document.getElementById("name").value, 
            comp:document.getElementById("extra").value,
            choose:this.state.choose,
            Rating: 5,
            description:document.getElementById("description").value
            }
        console.log(recipe)

        axios.post("http://localhost:5000/Recipes/add", recipe) //this 
        .then(res => console.log(res.data)); 

        // window.location = '/';
    }

    add = (text) =>{
        this.setState({choose: text,})
    }

    render() {
        return (
            <div>
                <form>
                    <h5 style={name}>What is it called?</h5>
                    <Form.Control id="name" type="text" size="small" placeholder="Name your blend..." />
                    <br />
                    <h5 style={name}>What do you recommend to enjoy it with?</h5>
                    <Form.Control id="extra" type="text" size="small" placeholder="leave empty if there is none..." />
                    <br />
                    <Add title={this.add} id="use"/>
                    <br />
                    <Form.Group>
                        <Form.Label><h5>How to prepare</h5></Form.Label>
                        <Form.Control id="description" rows="3" />
                    </Form.Group>
                    <Button onClick={this.click} variant="dark" size="small" block>
                        ADD YOUR RECEPIE
                    </Button>
                </form>
                
            </div>
        )
    }
}
const name = {
    display:'inline', 
}

export default form
