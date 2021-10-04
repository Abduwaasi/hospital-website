import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import { Navbar,Footer} from './Components'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'


const App = () => {
  return (
    <Router>
    <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/service" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App
