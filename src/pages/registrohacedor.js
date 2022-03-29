
import React, { useRef, useState }from "react";
import endpoints from "../settings/endpoints";
import { useNavigate } from "react-router-dom";


const RegistroHacedor = () => {
  let navegar = useNavigate();
  const urlPOST = endpoints.POSTCrearHacedor;
  const form = useRef(null);

  const [respuesta, setRespuesta] = useState([]);
  function createHacedor(event){
     fetchHacedorCreate(urlPOST);
     navegar("/HomeHacedor");
  }

  const fetchHacedorCreate = (urlPOST) => {
    try {
      const formData = new FormData(form.current);
      let config = {
        method: 'POST',
        headers:{
          'Acept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "nombre_hacedor": formData.get('userName'),
          "emailhacedor": formData.get('email'),
          "telefono_hacedor": formData.get('telefono'),
          "password_hacedor": formData.get('password'),
          "tipo_usuario": "Hacedor"
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
    <div className="container">
      <h4>Registro de Hacedor</h4>
      <form ref={form}>
      <div className="col-md-4">
        <label className="form-label">Nombre Completo del Hacedor</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-helmet-safety"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre completo"
            name="userName" id="userName"
            required
          />
        </div>
      </div>

      <div className="col-md-4">
        <label className="form-label">Correo Electronico del Hacedor</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-envelope-open-text"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese correo electronico"
            name="email" id="email"
            required
          />
        </div>
      </div>

      <div className="col-md-4">
        <label className="form-label">Telefono del Hacedor</label>
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-phone"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese telefono de Contacto"
            name="telefono" id="telefono"
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
            name="password" id="password"
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
            placeholder="Hacedor"
            disabled
          />
        </div>
      </div>

      <div className="col-12">
        <button className="btn" onClick={(event)=>{createHacedor(event)}}>Registrarse</button>
      </div>
      </form>
    </div>
  );
};

export default RegistroHacedor;
