import React, { useRef, useState} from "react";
import endpoints from "../settings/endpoints";

const RegistroCliente = () => {
  const urlPOST = endpoints.POSTCrearCliente;
  const form = useRef(null);
  const [respuesta,setRespuesta] = useState([]);
  function createCliente(event) {
        fetchClientesCreate(urlPOST);
    }
  const fetchClientesCreate = (urlPOST) => {
      try {
        const formData = new FormData(form.current);
        let config = {method: 'POST',
          headers:{'Acept': 'application/json',
            'Content-Type': 'application/json'},
          body: JSON.stringify({
            "nombre_cliente": formData.get('userName'),
            "emailCliente": formData.get('email'),
            "telefono_cliente": formData.get('telefono'),
            "password_cliente": formData.get('password'),
            "tipo_usuario": "Cliente"
          })
        };
        fetch(urlPOST, config)
        .then((response) => response.json())
        .then(data => setRespuesta(data))
        console.log(respuesta)
       
      } catch (error) {
        console.log(error)
      }
  
    };

  return (
    <>
    
      <div className="container">
        <h4>Registro de Cliente</h4>
        <form ref={form}>
        <div className="col-md-4">
          <label className="form-label">Nombre Completo del Cliente</label>
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
            <input type="text" className="form-control" name="userName" id="userName" placeholder="Ingrese su nombre completo" required />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Correo Electronico del Cliente</label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="fa-solid fa-envelope-open-text"></i>
            </span>
            <input type="text" className="form-control" name="email" id="email" placeholder="Registre su correo electrónico" required/>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Telefono del Cliente</label>
          <div className="input-group">
            <span className="input-group-text"><i className="fa-solid fa-phone"></i></span>
            <input type="text" className="form-control" name="telefono" id="telefono" placeholder="Registre su telefono de Contacto" required />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Registre su contraseña</label>
          <div className="input-group"><span className="input-group-text"><i className="fas fa-key"></i></span>
            <input type="password" className="form-control" name="password" id="password" placeholder="Password" required />
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">Perfil</label>
          <div className="input-group">
          <span className="input-group-text"><i className="fa-solid fa-hand-point-up"></i></span>
          <input type="password" className="form-control" placeholder="Cliente" disabled/>
        </div>
        </div>

        
        <div className="col-12">
          <button className="btn" onClick={(event)=>{createCliente(event)}}>Registrarse</button>
        </div>
        </form>
      </div>
      
    </>
  );
};

export default RegistroCliente;
