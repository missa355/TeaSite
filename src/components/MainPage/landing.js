import React, { Component } from 'react'
import mint_card from "../../Photos/mint_card.jpg"
import lavender from "../../Photos/lavender.jpg"
import thyme from "../../Photos/thyme.jpg"
import green from "../../Photos/green.jpg"



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
                  <TeaCard index={1} img={mint_card} title="Japanese mint." review="4/5" description={desc[0]}/>
                  <TeaCard index={2} img={lavender} title="English Lavender." review="4/5" description={desc[1]}/>
                  <TeaCard index={3} img={thyme} title="Arabic Thyme." review="4/5" description={desc[2]}/>
                  <TeaCard index={4} img={green} title="Chinese Green Tea." review="4/5" description={desc[3]}/>
 

              </div>

              <div className="product_tag">
                <h2><b>Recommended Products</b></h2>

                
              </div>


              <div className="TeaCard_container">
                  <TeaCard index={1} img={mint_card} title="Japanese mint." review="4/5" description={desc[0]}/>
                  <TeaCard index={2} img={lavender} title="English Lavender." review="4/5" description={desc[1]}/>
                  <TeaCard index={3} img={thyme} title="Arabic Thyme." review="4/5" description={desc[2]}/>
                  <TeaCard index={4} img={green} title="Chinese Green Tea." review="4/5" description={desc[3]}/>
 

              </div>


              <div className="product_tag">
                <h2><b>New Products</b></h2>

                
              </div>


              <div className="TeaCard_container">
                  <TeaCard index={1} img={mint_card} title="Japanese mint." review="4/5" description={desc[0]}/>
                  <TeaCard index={2} img={lavender} title="English Lavender." review="4/5" description={desc[1]}/>
                  <TeaCard index={3} img={thyme} title="Arabic Thyme." review="4/5" description={desc[2]}/>
                  <TeaCard index={4} img={green} title="Chinese Green Tea." review="4/5" description={desc[3]}/>
 

              </div>


                
          </div>
        )
    }
}

export default landing
