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
import Landing from "../src/components/MainPage/landing"


function App() {

  return (
      <Router>
        <div>
            <Route exact path="/" render={ props =>(
              <React.Fragment>
                <Landing/>

              </React.Fragment>
                )}/>
            </div>
            <Route exact path="/recipes" component={Recipes} />
        </Router>
      );
}

export default App;
