import React, { Component } from 'react'
import Card from './Card';
import axios from "axios"

export class Menu extends Component {
    state = {
        Recipes: []
    }

    componentDidMount() {
                // http://localhost:5000
        axios.get('https://8df21978.ngrok.io/Recipes/')
          .then(response => {
              this.setState({
                Recipes: response.data})
          })
          .catch((error) => {
            console.log(error);
          })
        
      }

    render() {
        return (
            <div className="MENU">
                {this.state.Recipes.map((block, i) => 
                   <Card key={i} info={block}/>
                )}
                
            </div>
        )
    }
}

export default Menu
