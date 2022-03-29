import React, { useEffect, useState, useContext } from "react";
import endpoints from "../settings/endpoints";
import AppContext from "../context/AppContext";

const MuroHacedor = () => {
  const {state} = useContext(AppContext);
  const idUser = state[0].id_hacedor;
  const [listMuro, setlistMuro] = useState([]);

  useEffect(() => {
    const url = endpoints.GETMuroXHacedor + idUser;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistMuro(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h4>Panel Hacedor - Muro de Solicitudes</h4>
               
      <h5>idUsuario - {state[0].id_hacedor} </h5>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>{state[0].nombre_hacedor}</h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-envelope"></i>{state[0].emailhacedor}
              </h5>
            </div>
            <div className="col">
              <h5>
                <i className="fa-solid fa-phone"></i>{state[0].telefono_hacedor}
              </h5>
            </div>
          </div>
        </div>

        <hr></hr>

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id Solicitud Servicio</th>
            <th>Servicio</th>
            <th>Valor Ofrecido</th>
            <th>Observaciones</th>
            <th>Ciudad</th>
            <th>Estado Servicio</th>
            <th>Aceptar</th>
            <th>Rechazar</th>
          </tr>
        </thead>
        <tbody>
          {listMuro.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
              <td>{item[5]}</td>
              <td>
                <button type="button" className="btn btn-primary">
                  Aceptar
                </button>
              </td>
              <td>
                <button type="button" className="btn btn-danger">
                  Rechazar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MuroHacedor;
