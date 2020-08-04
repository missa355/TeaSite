import React, { Component } from 'react'
import mint_card from "../../Photos/mint_card.jpg"
import lavender from "../../Photos/lavender.jpg"
import thyme from "../../Photos/thyme.jpg"
import green from "../../Photos/green.jpg"


import axios from "axios"
import NAV from '../NAV'
import Form from '../form'
import beverage from '../../Photos/undraw_hot_beverage_35uj.svg'
import citrus from '../../Photos/undraw_refreshing_ncum.svg'
// import Footer from "./components/Footer"
import './landing.css'
import shop_img from  "../../Photos/shop.jpg"
import tea_photo from "../../Photos/breakfast.png"
import TeaCard from "../TeaCard/TeaCard"

const desc = [
  "A mint as graceful as the Era it was used in Japan",
  "British imported Lavender with an Aroma that labled it as one of the best.",
  "A completely organic thyme with almost no intervention.",
  "Tea leaves are processed using traditional Chinese methods."

]

export class landing extends Component {
    state={
      names:[],
      prices:[],
      card_links:[],
      big_links:[],
      ratings:[],
      desc:[]
    }

    componentDidMount = () => {
      axios.get('http://localhost:5000/product/')
      .then(res => {
        for(var i=0; i<res.data.length; i++){
          this.setState({names:[...this.state.names, res.data[i].name]})
          this.setState({prices:[...this.state.prices, res.data[i].price]})
          this.setState({card_links:[...this.state.card_links, res.data[i].link]})
          this.setState({big_links:[...this.state.big_links, res.data[i].link_big]})
          this.setState({ratings:[...this.state.ratings, res.data[i].rating]})
          this.setState({desc:[...this.state.desc, res.data[i].description]})


        }
      })
      .catch((error) => {
          console.log(error);
        })

      console.log(this.state)
    }

    render() {
        return (
          <div>
            <div className="main_block">
            <NAV className='NAV'/>

                <div className="UPPER">
                  {/* <Carousel className="Carousel"/> */}
                  <div id="black"/>
                  <div id="top_layer">
                    <h1>Check Products made by the people!</h1>
                    <p>For the People.</p>
                    <img src={tea_photo} alt="breakfast" id="breakfast"/>
                    <img src={shop_img} alt="coffee shop" id="shop"/>
                  </div>
                  
                </div>

                <div className="second_level">
                  <div className="2Ablock">
                    <img src={citrus} alt="IMG" id="logo1"/>
                    <div className="Text">
                      <h4>FEEL THE CIRTUS TASTE.</h4> <br />
                      <p>Try a lemon taste to relax your mind with the citrus feeling .One of our most demanded products
                        is open for you to own,
                        order now and give yourslef a break.
                      </p>
                      <div className="btn1">
                        <p>Get your own </p>
                      </div>
                    </div>
                  </div>

                  <div className="twoBlock">
                    <img src={beverage} alt="IMG" id="logo2"/>
                    <div className="Text">
                      <h4>INDULGE IN THE PUNGENT MENTHOL AROMA AND FLAVOUR.</h4> <br />
                      <p>Our minty recipes are what we represent. From tea to milkshake, we take
                       our mint falvour very seriouse and you can vouche for it after trying it.
                      </p>
                      <div className="btn1">
                        <p>Get a taste</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="product_tag">
                <h2><b>Popular Products</b></h2>

                
              </div>

              <div className="TeaCard_container">
              {this.state.names.map((block, i) => 
                  <TeaCard indx={i} key={i} img={this.state.card_links[i]} title={this.state.names[i]} review="4/5" description={this.state.desc[i]}/>
                )}
 

              </div>

              <div className="product_tag">
                <h2><b>Recommended Products</b></h2>

                
              </div>


              <div className="TeaCard_container">
              {this.state.names.map((block, i) => 
                  <TeaCard indx={i} key={i} img={this.state.card_links[i]} title={this.state.names[i]} review="4/5" description={this.state.desc[i]}/>

                )}
 

              </div>


              <div className="product_tag">
                <h2><b>New Products</b></h2>

                
              </div>


              <div className="TeaCard_container">
              {this.state.names.map((block, i) => 
                  <TeaCard indx={i} key={i} img={this.state.card_links[i]} title={this.state.names[i]} review="4/5" description={this.state.desc[i]}/>

                )}
 

              </div>


                
          </div>
        )
    }
}

export default landing
