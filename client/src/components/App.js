import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Requests from "./Requests/Requests";
import Clients from "./Clients/Clients";
import Pets from "./Pets/Pets";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from "./Users/User";
import React, { useState } from "react";

function App() {
  const [clients, setClients] = useState([])
  function handleUpdateClientDebt(updatedClient) {
    const updatedClients = clients.map(c => c.id === updatedClient.id ? updatedClient : c)
    setClients(updatedClients)
  }
  return (
    <div>
      <div className="centered-div-title">Mobile Dog Care</div>
      <NavBar styles={{center: 'auto'}} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/profile'>
          <User />
        </Route>
        <Route exact path='/requests'>
          <Requests onUpdateClientDebt={handleUpdateClientDebt} />
        </Route>
        <Route exact path='/clients'>
          <Clients clients={clients} onSetClients={setClients} />
        </Route>
        <Route exact path='/pets'>
          <Pets />
        </Route>
      </Switch>
      <ToastContainer />
    </div>
  )
}

export default App;
