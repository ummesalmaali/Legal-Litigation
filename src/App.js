import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllClients from "./components/AllClients/AllClients/AllClients";
import AddLawer from "./components/AddLawer/AddLawer";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
         
          <PrivateRoute path='/dashboard'>
           <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/allClients">
            <AllClients></AllClients>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addLawer">
            <AddLawer></AddLawer>
          </Route>

          <Route path="/">
           <Appointment></Appointment>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
