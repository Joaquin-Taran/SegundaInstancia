export class contador {
    #cantidadCompes;

    constructor() {
        this.#cantidadCompes = 0;
    }

    getCantidadCompes() {
        return this.#cantidadCompes;
    }

    incrementarCantidadCompes() {
        this.#cantidadCompes++;
    }

    // En caso de que se introduzca de forma manual por algun motivo
    setCantidadCompes(cantidad) {
        if (typeof cantidad === 'number' && cantidad >= 0) {
            this.#cantidadCompes = cantidad;
        } else {
            throw new Error('La cantidad de competencias debe ser un número positivo.');
        }
    }
}