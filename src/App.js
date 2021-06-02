import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import About from './Components/About'
import Error from './Components/Error'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'




function App() {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path= '/' component= {Home}/>
        <Route exact path= '/my-web' component= {Home}/>
        <Route exact path= '/Contact' component= {Contact}/>
        <Route exact path= '/Services' component= {Services}/>
        <Route exact path= '/About' component= {About}/>
        <Route component= {Error}/>
        
      </Switch>
      <Footer/>
    </>

  );
}

export default App;
