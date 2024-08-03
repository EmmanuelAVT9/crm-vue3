import api from "../lib/axios";

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
    agregarCliente(data) {
        return api.post('/clientes', data)
    },
    obtenerCliente(id) {
        //console.log(id)
        return api.get('/clientes/' + id)
    },
    actualizarCliente(id, data){
        //onsole.log(id)
        return api.patch('/clientes/' + id, data)
    },
    cambiarEstado(id, data){
        console.log(data)
        return api.patch('/clientes/' + id, data)
    }
}