import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import { Navbar,Footer,Flex,Service,MedicalService,Review,Map,Form,InfoCard} from './Components'


const App = () => {
  return (
    <Router>
    <GlobalStyle/>
      <Navbar/>
      <Service/>
      <Footer/>

    </Router>
  )
}

export default App
