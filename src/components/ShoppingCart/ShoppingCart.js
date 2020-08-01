import React, { Component } from 'react'
import "./ShoppingCart.css"
import Item from "../Item/item"

export class ShoppingCart extends Component {
    render() {
        return (
            <div className="backDrop">
                <div className="items_container">

                    <div className="items">
                        <div className="labels">
                            <div className="pic">
                                PRODUCT
                            </div>


                            <div className="price">
                                <p>PRICE</p>
                            </div>

                            <div className="qty">
                                <p>QTY</p>
                            </div>

                            <div className="total">
                                <p>TOTAL</p>

                            </div>

                        </div>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        
                        <Item/>



                    </div>
                    {/* <div className="items">

                    </div> */}

                    <div className="pay">
                        <div className="pay_column">
                            <p>CART TOTAL</p>
                            <b><h3>CA 49.95</h3></b>
                            <p id="small_font">Shipping and Taxes calculated at checkout</p>


                        </div>

                    </div>


                </div>
                
            </div>
        )
    }
}

export default ShoppingCart
