import React,{Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import ContactState from './context/contactState'
import Home from './Components/Home'

function App() {
  return (
    <ContactState>
    <Router>
    <Fragment>
     <div className='container'>
     <Switch>
     <Route exact path='/' component={Home}/>
     </Switch>
     </div>
    </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;
