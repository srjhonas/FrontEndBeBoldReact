import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
     return (
         
        <nav className="navbar navbar-expand-sm" >
        <div className="container-fluid">
        <img src={logo} className="App-logo" alt="logo" />
          <Link className="navbar-brand" to='/'> <i className="fa-solid fa-arrow-up-right-dots"></i>Semillero BeBold</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to='/Home'  ><i className="fa-solid fa-house-user"></i>Home</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/HomeCliente' aria-current="page" ><i className="fas fa-walking"></i> Clientes</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/HomeHacedor' aria-current="page" ><i className="fa-solid fa-helmet-safety"></i>Muro de Solicitudes</Link>
              </li>
              
             
              <li className="nav-item" >
                <Link className="nav-link active" to='/SolicitarServicio' aria-current="page" ><i className="fa-solid fa-user-plus"></i> Registrar Solicitud Servicio</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/Hacedor/Configuracion' aria-current="page" ><i className="fa-solid fa-gears"></i> Editar Preferencias Hacedor</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/RegistroCliente' aria-current="page"  ><i className="fas fa-walking"></i> + Registrar Cliente</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/RegistroHacedor' aria-current="page"  ><i className="fa-solid fa-helmet-safety"></i> + Registrar Hacedor</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link active" to='/ServiciosAsignados' aria-current="page"  ><i className="fa-solid fa-hand-point-up"></i> Servicios Asignados</Link>
              </li>
    
              <li className="nav-item"  >
                <Link className="nav-link active" to='/pruebas' aria-current="page" ><i className="fas fa-power-off"></i>LogOff</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav> 
         
        
     );
};

export default Navbar;
