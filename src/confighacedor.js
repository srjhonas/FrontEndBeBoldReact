import React, { useEffect, useState, useContext } from "react";
import endpoints from "./settings/endpoints";
import AppContext from "./context/AppContext";



const ConfigHacedor = () => {
  const {state} = useContext(AppContext);
  const idUser = state[0].id_hacedor;


  const [listServicios, setlistServicios] = useState([]);
  const [listCiudades, setlistCiudades] = useState([]);
  const [servXHacedor, setServXHacedor] = useState([]);
  const [cityXHacedor, setCityXHacedor] = useState([]);
 // const inputDepto = useRef();

  const cargaCiudades = (evento) => {
    const dptodefinitivo = evento.target.value;
    console.log(dptodefinitivo);
    const url = endpoints.GETCiudadesXDepto + dptodefinitivo;
    console.log(url)
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistCiudades(data))
      .catch((error) => console.log(error));
  }

  const Departamentos = ['Amazonas',
'Antioquia',
'Arauca',
'San Andres, Providencia y Sta Catalina',
'Atlantico',
'Bogota D.C.',
'Bolivar',
'Boyaca',
'Caldas',
'Caqueta',
'Casanare',
'Cauca',
'Cesar',
'Choco',
'Cordoba',
'Cundinamarca',
'Guainia',
'Guaviare',
'Huila',
'La Guajira',
'Magdalena',
'Meta',
'Narino',
'Norte de Santander',
'Putumayo',
'Quindio',
'Risaralda',
'Santander',
'Sucre',
'Vichada',
'Tolima',
'Valle del Cauca'
]


  

  useEffect(() => {
    const url = endpoints.GETTipoServicio;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistServicios(data))
      .catch((error) => console.log(error));

      const url2 = endpoints.GETCiudadesXhacedor + idUser;
    fetch(url2)
      .then((response) => response.json())
      .then((data) => setCityXHacedor(data))
      .catch((error) => console.log(error));
     
      const url3 = endpoints.GETServiciosXhacedor + idUser;
    
    fetch(url3)
        .then((response) => response.json())
        .then((data) => setServXHacedor(data))
        .catch((error) => console.log(error));
    
  }, []);

  
    return (
      <>
        <h4>Configura los Servicios que realizas</h4>
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
  
        <div className="card"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Servicios que realizas</h3>
              <button type="button" className="btn">
                Cargar Servicios
              </button>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Servicio</th>
                    <th>Cobro por Servicio</th>
                  </tr>
                </thead>
                <tbody>

                  {servXHacedor.map((item, index) => (
                    <tr key={index}>
                    <td>{item[0]} </td>
                    <td>{item[1]}</td>
                    <td>{item[2]}</td>
                  </tr>

                  ))}
              </tbody>
              </table>
              <div className="input-group mb-3">
                <div className="col-md-4">
                  <label htmlFor="validationDefault04" className="htmlForm-label">
                    Servicio a Adicionar
                  </label>
                </div>
                <div className="col-md-6">
                  <select
                    className="htmlForm-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      Seleccione un Servicio...
                    </option>
  
                    {listServicios.map((item) => (
                      <>
                        <option key={item.id_tipo_servicio}>{item.nombre_tipo_servicio}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
  
              <div className="input-group mb-4">
                <div className="col-md-5">
                  <label htmlFor="validationDefault05" className="htmlForm-label">
                    Valor Cobrado por el Servicio
                  </label>
                </div>
  
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="htmlForm-control"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Cuanto cobras por la realizacion del servicio"
                />
                <span className="input-group-text">.00</span>
              </div>
              <button type="button" className="btn">
                Adicionar Servicio
              </button>
            </div>
            <div className="col">
              <h3>Ciudades en las que prestas tus servicios</h3>
              <button type="button" className="btn">
                Cargar Ciudades
              </button>
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Ciudad</th>
                    <th>Departamento</th>
                  </tr>
                </thead>
                <tbody>

                  {cityXHacedor.map((item, index) => (
                      <tr key={index}>
                      <td>{item[0]} </td>
                      <td>{item[1]} </td>
                      <td>{item[2]} </td>
                    </tr>
                  ))}
                  
                </tbody>
              </table>
  
              <div className="input-group mb-6">
                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="htmlForm-label">
                    Departamento
                  </label>
                </div>
                <div className="col-md-6">
                  <select
                    className="htmlForm-select"
                    id="validationDefault04"
                    required
                    onChange={(event)=>{cargaCiudades(event)}}
                    //ref={inputDepto}
                  >
                    <option selected disabled value="">
                      Seleccione Dpto...
                    </option>
                    
                    {Departamentos.map((item, index) => (
                      <>
                        <option key={index} >{item}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
          
                      
              <div className="input-group mb-6">
                <div className="col-md-2">
                  <label htmlFor="validationDefault04" className="htmlForm-label">
                    Ciudad
                  </label>
                </div>
                <div className="col-md-6">
                  <select
                    className="htmlForm-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      Seleccione Ciudad...
                    </option>
                        
                    {listCiudades.map((item) => (
                      <>
                        <option key={item.id_ciudad}>{item.nombre_ciudad}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
  
              <button type="button" className="btn">
                Adicionar Ciudad de Cobertura
              </button>
            </div>
          </div>
        </div>
      </>
    );
  
  
  };

export default ConfigHacedor;
