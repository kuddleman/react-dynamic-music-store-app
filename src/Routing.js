import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Products from './Products'
import Home from './Home'
import AddProduct from './AddProduct'



class Routing extends Component {

  render() {
    return (
      <Router>
        <div>
          <h2>Hello from Routing</h2>
          <Route exact path='/' component={ Home }></Route>
          <Route exact path='/product' component={ Products }></Route>
          <Route path='/addProduct' component={ AddProduct }></Route>
        </div>
      </Router>
      
    )
  }
}

export default Routing