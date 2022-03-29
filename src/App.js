import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import SolicitarServicio from './pages/solicitarservicio';
import MuroHacedor from './pages/murohacedor';
import Inicio from './pages/inicio';
import HomeCliente from './pages/homecliente';
import RegistroCliente from './pages/registrocliente';
import RegistroHacedor from './pages/registrohacedor';
import ConfigHacedor from './pages/confighacedor';
import ServiciosAsignados from './pages/serviciosasignados';

import useInitialState from './hooks/useInitialState';

import Layout from './containers/layout';
import AppContext from './context/AppContext';

function App() {
  const initialState = useInitialState();
  return (
    <div className="App">
      <AppContext.Provider value={initialState} >
      <Router>
       
      <Routes>
        <Route exact path="/Home" element={<Inicio />}/>
        <Route exact path="/HomeCliente" element={<Layout><HomeCliente hora="Holas"/></Layout>}/>
        <Route exact path="/HomeHacedor" element={<Layout><MuroHacedor /></Layout>}/>
        <Route exact path="/RegistroCliente" element={<RegistroCliente />}/>
        <Route exact path="/RegistroHacedor" element={<RegistroHacedor />}/>
        <Route exact path="/Hacedor/Configuracion" element={<Layout><ConfigHacedor /></Layout>}/>
        <Route exact path="/SolicitarServicio" element={<Layout><SolicitarServicio /></Layout>}/>
        <Route exact path="/ServiciosAsignados" element={<Layout><ServiciosAsignados /></Layout>}/>
        <Route exact path="/pruebas" element={<Layout> <ServiciosAsignados/></Layout>}/>
      </Routes>
    </Router>
    </AppContext.Provider>



    </div>
  );
}

export default App;
