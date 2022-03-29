import React, {useRef, useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import endpoints from "../settings/endpoints";
import AppContext from "../context/AppContext";


const Inicio = () => {
  const {updateDataUser} = useContext(AppContext);
  const form = useRef(null);
  let navegar = useNavigate();
  const [userDataCLI,setUserDataCLI] = useState([]);
  const [userDataHAC,setUserDataHAC] = useState([]);

  const Logueo = (evento) =>{
    evento.preventDefault();
    const formData = new FormData(form.current);
    const perfil = formData.get('perfil')
    const mailIngreso = formData.get('mail')
    const pwdRegistrada = formData.get('password')
    if(perfil === "Cliente"){
      const url = endpoints.LoginCliente + mailIngreso;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserDataCLI(data))
      .catch((error) => console.log(error));
      console.log(userDataCLI)
      updateDataUser(userDataCLI);  
      console.log(url)  

      if(pwdRegistrada === userDataCLI[0].password_cliente){
        navegar("/HomeCliente")

      }else{
        console.log(pwdRegistrada + "esta es la que trae el back" + userDataCLI[0].password_cliente)
        console.log("Error en Mail o Password")
      }
    

    }else{
      const url = endpoints.LoginHacedor + mailIngreso;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUserDataHAC(data))
      .catch((error) => console.log(error));  
      console.log(userDataHAC)
      console.log(url)
      updateDataUser(userDataHAC);  

      if(pwdRegistrada === userDataHAC[0].password_hacedor){
        navegar("/HomeHacedor")

      }else{
        console.log("Error en Mail o Password")
      }
    }
    
  }
  


  return (
    <>
      <h1>Semillero BeBold</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <label>Registrate como cliente para solicitar nuestros servicios</label>
            <button type="button" className="btn" onClick={() => navegar("/RegistroCliente")}>Registro Cliente</button>
            <label>Registra tus habilidades como Hacedor y ofrece tus servicios</label>
            <button type="button" className="btn" onClick={() => navegar("/RegistroHacedor")}>Registro Hacedor</button>
          </div>
          <div className="col">
            <div className="Login">
              <div className="container">
                <div className="card">
                  <div className="flex">
                    <div className="container">
                      <h4 className="display-6">Ya estas Registrado?</h4>
                      <h3>Selecciona tu perfil e ingresa Aqui</h3>
                      <form ref={form}>                      
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="fa-solid fa-envelope"></i>Email
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="CorreoElectronico"
                          aria-label="CorreoElectronico"
                          aria-describedby="addon-wrapping"
                          name="mail" id="mail"
                        />
                      </div>
                      <br />
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i className="fas fa-key"></i>Contraseña
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                          aria-describedby="addon-wrapping"
                          name="password" id="password"
                        />
                      </div>
                      <br />
                      <div className="card">
                        <div className="input-group mb-6">
                          <div className="col-md-4">
                            <label
                              for="validationDefault04"
                              className="form-label"
                            >
                              Seleccione Perfil
                            </label>
                          </div>
                          <div className="col-md-6">
                            <select
                              className="form-select"
                              required
                              name="perfil" id="perfil"
                            >
                              <option selected disabled value="">
                                Seleccione Perfil...
                              </option>
                              <option>Cliente</option>
                              <option>Hacedor</option>
                              <option>Admin</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="text-center">
                        <button type="button" className="btn"  onClick={(event)=>{Logueo(event)}} >
                          Iniciar Sesion
                        </button>
                        <br />
                      </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
