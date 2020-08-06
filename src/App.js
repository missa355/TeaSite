import React, { Component } from 'react'
// import Footer from "./components/Footer"
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom"
import Recipes from "./Pages/Recipes"
import Landing from "../src/components/MainPage/landing"
import ProductPage from "../src/components/ProductPage/productPage"
import Cart from "../src/components/ShoppingCart/ShoppingCart"
import axios from "axios"
import ReactNotification from 'react-notifications-component'


const productid = [1, 2, 3, 4] 
const productname= ["Japanese Mint", "English Lavender", "Araboc Thyme", "Chinese Green Tea"]

export class App extends Component {
  state={
    names:[],
    prices:[],
    card_links:[],
    big_links:[],
    ratings:[],
    desc:[]
  }
  componentDidMount = ()=>{
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

  }

  render() {
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
                  {this.state.big_links.map((block, i) => 
                    <Route key={i} exact path={`/products/${i}`} render={ props =>(
                      <React.Fragment>
                        <ProductPage key={i} small_img={this.state.card_links[i]} img={this.state.big_links[i]} name={this.state.names[i]} price={this.state.prices[i]}/>
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
}

export default App;
