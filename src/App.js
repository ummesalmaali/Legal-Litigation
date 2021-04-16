import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';

function App() {
  return (
   <Router>
     <Switch>
     <Route path='/appointment'>
          <Appointment></Appointment>
       </Route>
       <Route path='/'>
           <Home></Home>
       </Route>
      
      
     </Switch>
   </Router>
    
  );
}

export default App;
