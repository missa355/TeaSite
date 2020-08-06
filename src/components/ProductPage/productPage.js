import React, { Component } from 'react'
import NAV from '../NAV'
import "./productPage.css"
import mint_big from "../../Photos/mint_card.jpg"
import lavender_big from "../../Photos/lavender_big.jpg"
import thyme_big from "../../Photos/thyme_big.jpg"
import green_big from "../../Photos/green_big.jpg"
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button
  } from 'reactstrap';
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// const imgs = [mint_big, lavender_big, thyme_big, green_big]
const notify = () => {
    toast.success("Added product to Cart!", {
        position: toast.POSITION.TOP_LEFT
      });

 
};

toast.configure()
export class productPage extends Component {
    state = {
    sectionStyle : {
            backgroundImage: `url(${this.props.img})`
    }
        
    }



    componentDidMount = ()=>{
        console.log(this.props)
    }
    add = (e, amount) => {
        e.preventDefault()
        var buttn = document.getElementById("check")
        buttn.innerHTML = "Added to cart"
        var current = localStorage.getItem("Cart")
        if(current){
            // console.log("current is", parseFloat(current))
            // console.log("sum is", parseFloat(current), "+",  amount)

            var newtok = JSON.parse(current)
            newtok.push(amount)
            console.log(newtok)

            localStorage.setItem("Cart", JSON.stringify(newtok))

        }else{
            localStorage.setItem("Cart", JSON.stringify([amount]))

        }
    }

    render() {
        return (
            <div className="main_block">
                <NAV className='NAV'/>
                <div className="product_container">
                    <div className="img_container" style={this.state.sectionStyle}>

                    </div>

                    <div className="details">
                        <h2>{this.props.name}</h2>
                        <br/>

                        <p>This Japanese mint was harvest from the green fields of kyoto away
                            from any pollution protected by the foggy enviorement from the sun.
                        </p>
                        <br/>
                        <p>This Japanese mint was harvest from the green fields of kyoto away
                            from any pollution protected by the foggy enviorement from the sun.
                        </p>

                        <br/>
                        <p>You are able to purchase 2 OZ, 4 OZ or 8 OZ depending on your needs. 
                        </p>

                    </div>

                    <div className="purchase">
                        <h2>Purchase details</h2>
                        <Form>
                            <FormGroup>
                                <Label for="exampleSelect">Quantity</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                <option>2 OZ</option>
                                <option>4 OZ</option>
                                <option>8 OZ</option>

                                </Input>
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="exampleEmail">How many of the selected Quanitiy?</Label>
                                <Input
                                type="text"
                                name="email"
                                id="exampleEmail"
                                placeholder="..."
                                />
                            </FormGroup> */}
                            <Button id="check" onClick={(e)=> {this.add(e, {name:this.props.name, img:this.props.small_img, price:this.props.price, amount:1}); notify()}} style={{backgroundColor:"rgba(29, 29, 31, 0.925)", color:"white"}}>Add to Cart</Button>

                        </Form>
                    </div>
                    <div className="filler_box">

                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default productPage
