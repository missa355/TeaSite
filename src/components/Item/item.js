import React, { Component } from 'react'
import "./item.css"

export class item extends Component {
    render() {
        return (
            <div className="itembox">
                <div className="product_pic">

                </div>


                <div className="product_price">
                    <p>CA 9.99</p>
                </div>

                <div className="product_qty">
                    <p>1</p>
                </div>

                <div className="product_total">
                    <p>CA 9.99</p>

                </div>


            </div>
        )
    }
}

export default item
