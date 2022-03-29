import React, { useEffect, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import endpoints from "../settings/endpoints";
import AppContext from "../context/AppContext";


const HomeCliente = () => {
  const {state} = useContext(AppContext);
  const idUser = state[0].id_cliente;
  const [listSolicitudes, setlistSolicitudes] = useState([]);
  let navegar = useNavigate();
  
  
  
  useEffect(() => {
    const url = endpoints.GETListaSolicitudesXCliente + idUser;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistSolicitudes(data))
      .catch((error) => console.log(error));

  }, [idUser]);

  return (
    <>
      <div className="container">
        <h4>Panel Cliente</h4>
          
        <h5>idUsuario - {state[0].id_cliente}</h5>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>{state[0].nombre_cliente}</h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-envelope"></i>{state[0].emailCliente}
              </h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-phone"></i>{state[0].telefono_cliente}
              </h5>
            </div>
          </div>
        </div>

        <button type="button" className="btn" onClick={() => navegar("/SolicitarServicio")}>
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
          {listSolicitudes.map((item, index) => (
            
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
};

export default HomeCliente;
