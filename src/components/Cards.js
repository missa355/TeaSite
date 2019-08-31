import React, { Component } from 'react'
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

export class Cards extends Component {
    render() {
        return (
            <div className="md-layout">
                <mobiscroll.FormGroup>
                    <mobiscroll.FormGroupTitle>Fixed width</mobiscroll.FormGroupTitle>
                    <mobiscroll.ScrollView 
                        theme="ios"
                        layout="fixed"
                        itemWidth={80}
                        className="md-fixed"
                    >
                        <div className="bck-orange">1</div>
                        <div className="bck-red">2</div>
                        <div className="bck-green">3</div>
                        <div className="bck-yellow">4</div>
                        <div className="bck-blue">5</div>
                        <div className="bck-pink">6</div>
                    </mobiscroll.ScrollView>
                </mobiscroll.FormGroup>
            </div>
        )
    }
}

export default Cards
