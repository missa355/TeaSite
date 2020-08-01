import React, { Component } from 'react'
import "./TeaCard.css"
import {Link} from "react-router-dom"

import mint_card from "../../Photos/mint_card.jpg"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import Rating from 'react-rating'

export class TeaCard extends Component {
    render() {
        return (
            <div className="TeaCard">
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle><Rating  initialRating={4.5} readonly/></CardSubtitle>
                    <CardText>{this.props.description}</CardText>
                    <Link to={`/products/${this.props.index}`}><Button style={{backgroundColor:"black", color:"white"}}>check it out!</Button></Link>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default TeaCard
