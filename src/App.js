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
import ProductPage from "../src/components/ProductPage/productPage"
import Cart from "../src/components/ShoppingCart/ShoppingCart"

const productid = [1, 2, 3, 4] 
const productname= ["Japanese Mint", "English Lavender", "Araboc Thyme", "Chinese Green Tea"]

function App() {

  return (
      <Router>
        <div>
            <Route exact path="/" render={ props =>(
              <React.Fragment>
                <Landing/>
              </React.Fragment>
                )}/>

            <Route exact path="/ShoppingCart" render={ props =>(
              <React.Fragment>
                <Cart/>
              </React.Fragment>
                )}/>
                {productid.map((block, i) => 
                  <Route exact path={`/products/${block}`} render={ props =>(
                    <React.Fragment>
                      <ProductPage index={i} name={productname[i]}/>
                    </React.Fragment>
                    )}/>
                )}
            {/* <Route exact path="/productpage" render={ props =>(
              <React.Fragment>
                <ProductPage/>
              </React.Fragment>
                )}/> */}
            </div>
            <Route exact path="/recipes" component={Recipes} />
        </Router>
      );
}

export default App;
