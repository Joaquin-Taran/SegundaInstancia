export class competicionLista{
    #listaCompe;

    constructor(){
        this.#listaCompe = [];
    }

    add(competencia) {
        const competenciaEnLista = this.#listaCompe.some(
            (c) => c.getNombreCompeticion() === competencia.getNombreCompeticion()
        );
        if (!competenciaEnLista) {
            this.#listaCompe.push(competencia);
        } else {
            throw new Error(`No se pudo agregar la competición con el nombre: "${competencia.getNombreCompeticion()}", ese nombre ya se ha registrado.`);
        }
    }

    getCompe(){
        return this.#listaCompe;
    }

    encontrarCompeticion(nombre){
        return this.#listaCompe.find((c) => c.getNombreCompeticion() === nombre);
    }
}