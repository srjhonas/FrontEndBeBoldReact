import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import Navbar from './navbar';
//import ConfigHacedor from './confighacedor';
//import Footer from './footer';
//import HomeCliente from './homecliente';
//import Inicio from './inicio';
//import MuroHacedor from './murohacedor';
//import RegistroCliente from './registrocliente';
//import RegistroHacedor from './registrohacedor';
//import ServiciosAsignados from './serviciosasignados';
//import SolicitarServicio from './pages/solicitarservicio';

ReactDOM.render(
  <React.StrictMode>
    
    <App />
    {/* 
    <p>*****************************************</p>
    <Navbar/>
    <p>*****************************************</p>
    <ConfigHacedor/>
    <p>*****************************************</p>
    <HomeCliente/>
    <p>*****************************************</p>
    <Inicio/>
    <p>*****************************************</p>
    <MuroHacedor/>
    <p>*****************************************</p>
    <RegistroCliente/>
    <p>*****************************************</p>
    <RegistroHacedor/>
    <p>*****************************************</p>
    <ServiciosAsignados/>
    <p>*****************************************</p>
    <SolicitarServicio/>
    <p>*****************************************</p>
    <Footer/>
    <p>*****************************************</p>
    */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
