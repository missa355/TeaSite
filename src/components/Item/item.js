import React, { Component } from 'react'
import "./item.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  
  

export class item extends Component {
    state = {
        sectionStyle : {
                backgroundImage: `url(${this.props.img})`
        },
        amount:1
            
    }

    add_qty = (e) => {
        e.preventDefault()
        this.props.add(this.state.amount + 1, this.props.index)
        this.setState({amount:this.state.amount + 1})


    }

    minus_qty = (e) =>{
        e.preventDefault()
        if(this.state.amount > 0){
            this.setState({amount:this.state.amount - 1})
            this.props.minus(this.state.amount - 1, this.props.index)

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
                    <p> 
                        <button onClick={this.minus_qty} id="minus">-</button>
                        {this.state.amount}
                        <button onClick={this.add_qty} id="plus">+</button>

                    </p>

                </div>

                <div className="product_total">
                <p>CA {this.props.price}</p>

                </div>




            </div>
        )
    }
}

export default item
