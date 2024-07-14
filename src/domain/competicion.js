export class competicion {
    #nombreCompeticion;
    #cantJugadores;
    #tipoPrivacidad;
    #contraseña;
    #usuarios;

    constructor() {
        this.#nombreCompeticion = "";
        this.#cantJugadores = 0;
        this.#tipoPrivacidad = "";
        this.#contraseña = "";
        this.#usuarios = [];
    }

    getNombreCompeticion() {
        return this.#nombreCompeticion;
    }

    getCantJugadores() {
        return this.#cantJugadores;
    }

    getTipoPrivacidad() {
        return this.#tipoPrivacidad;
    }

    getContraseña(){
        return this.#contraseña;
    }

    getUsuario(){
        return this.#usuarios;
    }

    setNombreCompeticion(nombreCompeticion) {
        this.#nombreCompeticion = nombreCompeticion;
    }

    setCantJugadores(cantJugadores) {
        this.#cantJugadores = cantJugadores;
    }

    setTipoPrivacidad(tipoPrivacidad) {
        this.#tipoPrivacidad = tipoPrivacidad;
    }

    setContraseña(contraseña) {
        this.#contraseña = contraseña;
    }

    addUsuario(user) {
        // Buscar en el array #usuarios
        const usuarioExistente = this.#usuarios.find(u => u.getNombreUsuario() === user);
        
        if (usuarioExistente) {
            throw new Error(`No se pudo agregar el usuario con el nombre: "${user}", ese nombre ya se ha registrado.`);
        }
        
        this.#usuarios.push(user);
    }

    verificarSiEsta(user){
        return this.#usuarios.includes(user);
    }

    eliminarUsuario(nombreUsuario) {
        const indiceUsuario = this.#usuarios.findIndex(u => u === nombreUsuario);

        if (indiceUsuario === -1) {
            return false;
        }

        this.#usuarios.splice(indiceUsuario, 1);
        return true;
    }

}