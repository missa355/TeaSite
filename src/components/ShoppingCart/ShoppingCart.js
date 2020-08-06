import React, { Component } from 'react'
import "./ShoppingCart.css"
import Item from "../Item/item"
import { Button } from 'reactstrap';
import Checkout from "react-stripe-checkout";
import NAV from '../NAV'



export class ShoppingCart extends Component {
    state={
        name:"Tea",
        total: 0.00,
        productBy: "Teaaurora",
        products:[],
    }


    componentDidMount = () => {
        var token = JSON.parse(localStorage.getItem("Cart"));
        if(token){
            this.setState({products:token})
            var total = 0;
            for(var k=0; k<token.length; k++){
                console.log(token[k].price)
                total=total+parseFloat(token[k].price)
            }
            console.log("total is ", total)
            this.setState({total:total})
        }

        
    }
    add_amount = (amount, index) => {
        var updated = this.state.products;
        updated[index].amount = amount
        this.setState({products:updated})
        var total = this.state.total;
        // console.log(updated[k].price)
        total=(parseFloat(total)+parseFloat(updated[index].price)).toFixed(2)
        // console.log("total is ", total.toFixed(2))
        this.setState({total: total})
        console.log("added")
    }

    minus_amount = (amount, index) => {
        var updated = this.state.products;
        updated[index].amount = amount
        this.setState({products:updated})
        var total = this.state.total;
        // console.log(updated[k].price)
        total=(parseFloat(total)-parseFloat(updated[index].price)).toFixed(2)
        // console.log("total is ", total.toFixed(2))
        this.setState({total: total})
        console.log("subtracted")
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
                        {this.state.products.map((block, i) => 
                            <Item amount={block.amount} index={i} minus={this.minus_amount} add={this.add_amount} img={block.img} name={block.name} price={block.price}/>

                        )}



                    </div>
                    {/* <div className="items">

                    </div> */}

                    <div className="pay">
                        <div className="pay_column">
                            <p>CART TOTAL</p>
                                 <b><h3>CA {this.state.total}</h3></b>
                            <p id="small_font">Shipping and Taxes calculated at checkout</p>
                            <Checkout 
                            stripeKey="pk_test_51HBVp6HERVJg4BokgSogoRmTao4kxBXX8D4giMhF6ljNkpuy66gYwHp2Yc0GSCyfyaIjGgEKqzBFolB0FtWprVVi00F8yYRMXu"
                            token={this.makePayment} //this is a method
                            amount = {this.state.total * 100}
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
