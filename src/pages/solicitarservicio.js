import React, { useContext, useState, useEffect, useRef} from "react";
import AppContext from "../context/AppContext";
import endpoints from "../settings/endpoints";

const SolicitarServicio = () => {
  const {state} = useContext(AppContext);
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
  const idUser = state[0].id_cliente;
  const [listServicios, setlistServicios] = useState([]);
  const [listCiudades, setlistCiudades] = useState([]);
  const [getNumSol, setgetNumSol] = useState([]);
  const [listAptos, setlistAptos] = useState([]);
  

  const urlPOSTCreaSolicitud = endpoints.POSTCrearSolicitudServicio;
  const form = useRef(null);
  const [respuesta,setRespuesta] = useState([]);
  
 

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
  
  useEffect(() => {
    const url = endpoints.GETTipoServicio;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setlistServicios(data))
      .catch((error) => console.log(error));
  }, []);

  function createSolicitudServicio(event) {
    event.preventDefault();
    fetchSolicitudServicioCreate(urlPOSTCreaSolicitud);
}

  const fetchSolicitudServicioCreate = (urlPOST) => {
  try {
    const formData = new FormData(form.current);
    const CityFinal = formData.get('ciudad').split("-") ;
    const ServiFinal = formData.get('servicio').split("-") ;
    const MontoFinal = formData.get('monto')

    let config = {method: 'POST',
      headers:{'Acept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify({
         "ciudad_servicio": CityFinal[0],
         "cliente": idUser,
         "direccion_sol_serv": formData.get('direccion'),
         "estado_sol_serv": 1,
         "hacedor": 39,
         "observaciones": formData.get('observaciones'),
         "tipo_servicio": ServiFinal[0],
         "valor_ofrecido": formData.get('monto')
      })
    };
    fetch(urlPOST, config)
    .then((response) => response.json())
    .then(data => setRespuesta(data))

    setTimeout(() => {
      const getData = async () => {
        try {
          const data = await fetch(endpoints.GETNumSolicitud)
           setgetNumSol(data)
          
          console.log("ESTE SERIA EL NUMERO DE SOLICITUD DE SERVICIO" + getNumSol)
        } catch (error) {
          console.error(error)
        }
      }
      getData()
      try {
        fetch(endpoints.GETNumSolicitud)
        .then((response) => response.json())
        .then((data) => setgetNumSol(data))
        
        console.log("ESTE SERIA EL NUMERO DE SOLICITUD DE SERVICIO" + getNumSol)
      } catch (error) {
        console.error(error)
      }
      
    }, 5000);

    setTimeout(() => {
      try {
        fetch(endpoints.GETHacedoresAptos+ CityFinal[0] + "&" + ServiFinal[0] + "&" + MontoFinal )
        .then((response) => response.json())
        .then((data) => setlistAptos(data))
        .catch((error) => console.log(error));
        
        console.log(endpoints.GETHacedoresAptos+ CityFinal[0] + "&" + ServiFinal[0] + "&" + MontoFinal)
      } catch (error) {
        console.error(error)
      }
      
    }, 7000);
        
        setTimeout(() => {
         
          let datosAptos = [];
          for (let dato of listAptos) {
            datosAptos.push(dato)
                        
          }
          console.log(datosAptos)

          for (let x = 0; x < datosAptos.length; x++) {
            let Apto = datosAptos[x];
              let config2 = {method: 'POST',
                headers:{'Acept': 'application/json',
                  'Content-Type': 'application/json'},
                body: JSON.stringify({
                   "ciudad_servicio": CityFinal[0],
                   "cliente": idUser,
                   "direccion_sol_serv": formData.get('direccion'),
                   "estado_sol_serv": 1,
                   "hacedor": 39,
                   "hacedor_apto": Apto[0],
                   "idsolserv": getNumSol,
                   "observaciones": formData.get('observaciones'),
                   "tipo_servicio": ServiFinal[0],
                   "valor_ofrecido": formData.get('monto')
                })
              };
              fetch(endpoints.POSTInsertarHacedoresAptos, config2)
              .then((response) => response.json())
              .then(data => setRespuesta(data))
          
          }


        }, 8000);

  } catch (error) {
    console.log(error)
  }
};

  return (
    <>
      <div className="container">
        <h4>Registro de Solicitud de Servicio</h4>

        <h5>idUsuario - {state[0].id_cliente} {state[0].tipo_usuario} </h5>
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
        <hr></hr>
<form ref={form}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group mb-12">
                <div className="col-md-12">
                  <label for="validationDefault04" className="form-label">
                    Departamento
                  </label>
                  <select
                    className="form-select"
                    id="validationDefault04"
                    required
                    onChange={(event)=>{cargaCiudades(event)}}
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
            </div>
            <div className="col">
              <div className="input-group mb-12">
                <div className="col-md-12">
                  <label for="validationDefault04" className="form-label">
                    Ciudad
                  </label>
                  <select
                    className="form-select"
                    id="ciudad" name="ciudad"
                    required
                    
                  >
                    <option selected disabled value="">
                      Seleccione Ciudad...
                    </option>
                    {listCiudades.map((item) => (
                      <>
                        <option key={item.id_ciudad} >{item.id_ciudad}-{item.nombre_ciudad}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">Dirección</span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la direccion donde necesitas el servicio"
                  id="direccion" name="direccion"
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group mb-3">
                <label className="input-group-text">Barrio</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa el barrio"
                  id="barrio" name="barrio"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <div className="input-group mb-12">
                <div className="col-md-12">
                  <label for="validationDefault04" className="form-label">
                    Servicio a Solicitar
                  </label>
                  <select
                    className="form-select"
                    id="servicio" name="servicio"
                    required
                    
                  >
                    <option selected disabled value="">
                      Seleccione un Servicio...
                    </option>
                    {listServicios.map((item) => (
                      <>
                        <option key={item.id_tipo_servicio}>{item.id_tipo_servicio}-{item.nombre_tipo_servicio}</option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col">
              <label for="validationDefault05" className="form-label">
                Valor Ofrecido por el Servicio
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  placeholder="Cuanto estas dispuesto a pagar por el servicio"
                  id="monto" name="monto"
                />
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
        <label for="validationDefault06" className="form-label">
          Observaciones Adicionales
        </label>
        <div className="input-group">
          <span className="input-group-text">Comentarios</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            placeholder="Registra aca las Observaciones que creas que debe saber el Hacedor"
            id="observaciones" name="observaciones"
          ></textarea>
        </div>

        <button className="btn" onClick={(event)=>{createSolicitudServicio(event)}}>
          <i className="fas fa-file-upload"></i> Solicitar Servicio
        </button>
        </form>
      </div>
      
    </>
  );
};

export default SolicitarServicio;
