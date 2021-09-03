import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home';
import Products from './Component/Pages/Products';
import Services from './Component/Pages/Services';
import SignUp from './Component/Pages/SignUp';
import './App.css';

function App() {
  return (
    <>
   <Router>
     <Navbar />
     <Switch>
     <Route path='/' exact component={Home} />
     <Route path='/services' exact component={Services} />
     <Route path='/Products' exact component={Products} />
     <Route path='/SignUp' exact component={SignUp} />
     </Switch>
   </Router>
 
    </>
  );
}

export default App;
