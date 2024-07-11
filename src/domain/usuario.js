export class usuario{
    #nombreUsuario;

    constructor(){
        this.#nombreUsuario = "";
    }

    getNombreUsuario(){
        return this.#nombreUsuario;
    }

    setNombreUsuario(nombre){
        this.#nombreUsuario = nombre;

    }
}