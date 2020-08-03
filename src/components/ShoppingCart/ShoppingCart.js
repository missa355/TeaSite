import React, { Component } from 'react'
import "./ShoppingCart.css"
import Item from "../Item/item"
import { Button } from 'reactstrap';
import Checkout from "react-stripe-checkout";


export class ShoppingCart extends Component {
    state={
        name:"Tea",
        price: 10,
        productBy: "Teaaurora"
    }


    makePayment = (token) => {
        var product  = this.state
        var body = {
            token,
            product
        }
        const headers = {
            "Content-Type": "application/json"

        }

        return fetch("http://localhost:5000/payment", {
            method:"POST",
            headers: headers,
            body: JSON.stringify(body)
        }).then(res => {
            console.log("fetch RESPONSE", res)
            const {status} = res;
            console.log(status)
        })
        .catch(err => {console.log(err)})
    }
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
                            <Checkout 
                            stripeKey="pk_test_51HBVp6HERVJg4BokgSogoRmTao4kxBXX8D4giMhF6ljNkpuy66gYwHp2Yc0GSCyfyaIjGgEKqzBFolB0FtWprVVi00F8yYRMXu"
                            token={this.makePayment} //this is a method
                            amount = {parseInt(localStorage.getItem("Total")) * 100}
                            name="Payment Details"
                            // shippingAddress
                            currency="CAD"
                            // billingAddress
                            >
                                
                                <Button id="checkout" color="secondary">C H E C K O U T</Button>

                            </Checkout>


                        </div>

                    </div>


                </div>
                
            </div>
        )
    }
}

export default ShoppingCart
