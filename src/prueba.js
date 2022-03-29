import React, { useEffect, useState } from "react";


import endpoints from "./settings/endpoints";

const AppI2 = () => {
  const [clientes, setclientes] = useState([]);
  const [creaClientes, setcreaClientes] = useState([]);

  
  useEffect(() => {
    const url = endpoints.GETListaSolicitudesXCliente;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setclientes(data))
      .catch((error) => console.log(error));

  }, []);
  
 

  const fetchClientesCreate = (urlPOST) => {
    try {
      let config = {
        method: 'POST',
        headers:{
          'Acept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            
            "nombre_cliente": "Jimena Oviedo Paipilla",
            "emailCliente": "abcd@hotmail.com",
            "telefono_cliente": "3209876543",
            "password_cliente": "123",
            "tipo_usuario": "Cliente"
          }
        )
      };
      fetch(urlPOST, config)
      .then((response) => response.json())
      .then(data => setcreaClientes(data))
      console.log(setcreaClientes)
    } catch (error) {
      console.log(error)
    }

  };
  

  return (
    <>
     <div className="container">
        <h4>Registro de Cliente</h4>

        <div className="col-md-4">
          <label className="form-label">Nombre Completo del Cliente</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-user"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su nombre completo"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Correo Electronico del Cliente</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-envelope-open-text"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Registre su correo electrónico"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Telefono del Cliente</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-phone"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Registre su telefono de Contacto"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Registre su contraseña</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fas fa-key"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Perfil</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-hand-point-up"></i>
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Cliente"
              disabled
            />
          </div>
        </div>
        
        <div className="col-12">
          <button className="btn">Registrarse</button>
        </div>
      </div>



      <div className="container">
        <h4>Panel Cliente</h4>

        <h5>idUsuario</h5>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>nombreUsuario</h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-envelope"></i>emailUsuario
              </h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-phone"></i>telefonoUsuario
              </h5>
            </div>
          </div>
        </div>

        <button type="button" className="btn" >
          Registrar Servicio
        </button>

        <h3>Solicitudes de Servicio Registradas</h3>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th className="ColumnTitle">ID Solicitud de Servicio</th>
              <th className="ColumnTitle">Estado Solicitud</th>
              <th className="ColumnTitle">Direccion</th>
              <th className="ColumnTitle">Tipo Servicio</th>
              <th className="ColumnTitle">Hacedor</th>
              <th className="ColumnTitle">Ciudad Servicio</th>
              <th className="ColumnTitle">Valor Ofrecido</th>
              <th className="ColumnTitle">Observaciones</th>
              <th className="ColumnTitle">Completada</th>
              <th className="ColumnTitle">Cancelar</th>
            </tr>
          </thead>
          <tbody>
          {clientes.map((item, index) => (
            
              <tr key={index}>
                
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>
                    {item[5]} <br/> {item[6]} <br/> {item[7]}
                  </td>
                  <td>{item[8]}</td>
                  <td>{item[9]}</td>
                  <td>{item[10]}</td>
                  <td>
                    <button type="button" className="btn btn-success">
                      Marcar Finalizada
                    </button>
                  </td>
                  <td>
                    <button type="button" className="btn btn-danger">
                      Cancelar Servicio
                    </button>
                  </td>
                </tr>
              
            
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AppI2;