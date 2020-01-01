import React, { Component } from 'react'
import "./Card.css"

export class Card extends Component {
    render() {
        return (
            <div className="CARD"> 
            
                <h4>{this.props.info.recipename}</h4>
                <p>Take it with : {this.props.info.comp}</p>
                <p>best for : {this.props.info.choose}</p>
                <p>Rating: {this.props.info.Rating}</p>
                {/* <p>description : {this.props.info.description}</p> */}
                
            </div>
        )
    }
}

export default Card
