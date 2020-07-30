import React, { Component } from 'react'
import "./TeaCard.css"
import mint_card from "../../Photos/mint_card.jpg"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class TeaCard extends Component {
    render() {
        return (
            <div className="TeaCard">
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button style={{backgroundColor:"lightgreen", color:"black"}}>check it out!</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default TeaCard
