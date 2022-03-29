import React, { useEffect, useState, useContext } from "react";
import endpoints from "../settings/endpoints";
import AppContext from "../context/AppContext";

const ServiciosAsignados = () => {
  const {state} = useContext(AppContext);
  const idUser = state[0].id_hacedor
  const [listAsignados, setlistAsignados] = useState([]);

  useEffect(() => {
    const url = endpoints.GETServiciosAsignadosXHacedor + idUser;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistAsignados(data))
      .catch((error) => console.log(error));
  }, [idUser]);

  return (
    <>
      <div className="container">
        <h4>Panel Hacedor - Servicios Asignados</h4>
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
              <th>Estado Servicio</th>
              <th>Tipo de Servicio</th>
              <th>Cliente</th>
              <th>Ciudad</th>
              <th>Valor Ofrecido</th>
              <th>Observaciones</th>
              <th>Check</th>
            </tr>
          </thead>
          <tbody>
            {listAsignados.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[3]}</td>
                <td>{item[2]} <br /> {item[9]} <br /> {item[10]} <br /> {item[11]}</td>
                <td>{item[5]}</td>
                <td>{item[6]}</td>
                <td>{item[7]}</td>
                <td>
                  <button type="button" className="btn btn-success">
                    Marcar Finalizada
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

export default ServiciosAsignados;
