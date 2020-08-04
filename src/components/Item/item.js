import React, { Component } from 'react'
import "./item.css"

export class item extends Component {
    state = {
        sectionStyle : {
                backgroundImage: `url(${this.props.img})`
        }
            
        }
    render() {
        return (
            <div className="itembox">
                <div className="product_pic" style={this.state.sectionStyle}>

                </div>


                <div className="product_price">
                    <p>CA {this.props.price}</p>
                </div>

                <div className="product_qty">
                    <p>1</p>
                </div>

                <div className="product_total">
                <p>CA {this.props.price}</p>

                </div>


            </div>
        )
    }
}

export default item
