import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import { Navbar,Footer } from './Components'


const App = () => {
  return (
    <Router>
    <GlobalStyle/>
      <Navbar/>
      <Footer/>
    </Router>
  )
}

export default App
