import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import { Navbar,Footer,Flex,Service,MedicalService,Review,Map,Form} from './Components'


const App = () => {
  return (
    <Router>
    <GlobalStyle/>
      <Navbar/>
      <Form/>
      {/* <Flex/>
      <Service/>
      <MedicalService/>
      <Review/> */}
      {/* <Map/> */}
      <Footer/>

    </Router>
  )
}

export default App
