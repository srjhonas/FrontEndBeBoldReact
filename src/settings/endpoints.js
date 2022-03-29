const endpoints = {
    GETCiudadesXDepto: 'http://localhost:8080/api/ciudades/',
    GETCiudadesXhacedor: 'http://localhost:8080/api/CiudadXHacedor/',
    GETServiciosXhacedor: 'http://localhost:8080/api/ServicioXHacedor/',
    GETTipoServicio: 'http://localhost:8080/api/TipoServicio',
    GETListaSolicitudesXCliente: 'http://localhost:8080/api/ListaSolicitudServicioCli/',
    GETServiciosAsignadosXHacedor: 'http://localhost:8080/api/ListaSolicitudServicio/',
    GETMuroXHacedor: 'http://localhost:8080/api/MuroSolicitudes/',
    GETNumSolicitud:'http://localhost:8080/api/numSolicitud',
    GETHacedoresAptos: 'http://localhost:8080/api/HacedoresAptos/',
    LoginCliente: 'http://localhost:8080/api/clientes/login/',
    LoginHacedor: 'http://localhost:8080/api/hacedores/login/',
    POSTAdicionarCiudad: 'http://localhost:8080/api/CiudadXHacedor',
    POSTAdicionarServicio: 'http://localhost:8080/api/ServicioXHacedor',
    POSTCrearCliente:'http://localhost:8080/api/clientes',
    POSTCrearHacedor:'http://localhost:8080/api/hacedores',
    POSTCrearSolicitudServicio: 'http://localhost:8080/api/SolicitudServicio',
    POSTInsertarHacedoresAptos: 'http://localhost:8080/api/ServicioHacedorApto',
    PUTAceptarSolicitud: "http://localhost:8080/api/aceptarSolicitud/",
    DELETEHacedoresAptos: 'http://localhost:8080/api/HacedoresAptosLimpiar/',
    
}

export default endpoints;