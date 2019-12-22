import React from 'react';
import NAV from './components/NAV'
import Form from './components/form'
import beverage from './Photos/undraw_hot_beverage_35uj.svg'
import citrus from './Photos/undraw_refreshing_ncum.svg'
// import Footer from "./components/Footer"
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Recipes from "./Pages/Recipes"
import shop_img from  "./Photos/shop.jpg"
import tea_photo from "./Photos/breakfast.png"
import tearura from "./Photos/tearura.png"


function App() {

  return (
      <Router>
        <div className="main_block">
            <NAV className='NAV'/>
            <Route exact path="/" render={ props =>(
              <React.Fragment>
                <div className="UPPER">
                  {/* <Carousel className="Carousel"/> */}
                  <div id="black"/>
                  <div id="top_layer">
                    <h1>Check Recipes Other Shared</h1>
                    <p>Don't Be Shy To Add Yours As Well</p>
                    <img src={tea_photo} alt="breakfast" id="breakfast"/>
                    <img src={shop_img} alt="coffee shop" id="shop"/>
                  </div>
                  
                </div>

                <div className="second_level">
                  <div className="2Ablock">
                    <img src={citrus} alt="IMG" id="logo1"/>
                    <div className="Text">
                      <h2>FEEL THE CIRTUS TASTE.</h2> <br />
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
                      <h2>INDULGE IN THE PUNGENT MENTHOL AROMA AND FLAVOUR.</h2> <br />
                      <p>Our minty recipes are what we represent. From tea to milkshake, we take
                       our mint falvour very seriouse and you can vouche for it after trying it.
                      </p>
                      <div className="btn1">
                        <p>Get a taste</p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="third_level">
                  <h1 id="enter_your"> Show the world your taste</h1>
                  <div className="outer">
                    <div className="input_block">
                      <Form/>
                    </div>
                 </div>
                 <img src={tearura} alt="IMG" className="tearura"/>

                </div>
                  </React.Fragment>
                )}/>
            <Route exact path="/recipes" component={Recipes} />

            </div>
        </Router>
      );
}

export default App;
