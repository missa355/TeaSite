import React from 'react';
import NAV from './components/NAV'
import Carousel from './components/Carousel'
import Form from './components/form'
import logo from './Photos/lime.jpg'
import mint from './Photos/mint.jpg'
import Footer from "./components/Footer"
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Recipes from "./Pages/Recipes"

function App() {

  return (
      <Router>
        <div className="App">
            <NAV className='NAV'/>
            <Route exact path="/" render={ props =>(
              <React.Fragment>
                <div className="UPPER">
                  <Carousel className="Carousel"/>
                </div>
            

                <div className="second_level">
                  <div className="2Ablock">
                    <img src={logo} alt="IMG" id="logo"/>
                    <div className="Text1">
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

                    <div className="Text1">
                      <h2>INDULGE IN THE PUNGENT MENTHOL AROMA AND FLAVOUR.</h2> <br />
                      <p>Out mintty recipes are what we represent. From tea to milkshake, we take
                       our mint falvour very seriouse and you can vouche for it after trying it.
                      </p>
                      <div className="btn1">
                        <p>Get a taste</p>
                      </div>
                    </div>
                    <img src={mint} alt="IMG" id="logo"/>
                  </div>

                </div>

                <div className="third_level">
                  <h1 id="enter_your"> Show the world your taste</h1>
                  <div className="outer">
                    <div className="input_block">
                      <Form/>
                    </div>
                 </div>
                </div>
                <div className="FOOTER">
                  <Footer/>
                </div>
                  </React.Fragment>
                )}/>
            <Route exact path="/recipes" component={Recipes} />

            </div>
        </Router>
      );
}

export default App;
