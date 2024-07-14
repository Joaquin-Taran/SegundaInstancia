import { contador } from '../contador';

describe("contador", () => {
    let cont;

    beforeEach(() => {
        cont = new contador();
    });

    test("inicializar contador correctamente", () => {
        expect(cont.getCantidadCompes()).toEqual(0);
    });

    test("incrementar cantidad de competencias", () => {
        cont.incrementarCantidadCompes();
        expect(cont.getCantidadCompes()).toEqual(1);
    });

    test("establecer cantidad de competencias", () => {
        cont.setCantidadCompes(5);
        expect(cont.getCantidadCompes()).toEqual(5);
    });

    test("lanzar error al establecer cantidad negativa de competencias", () => {
        expect(() => {
            cont.setCantidadCompes(-1);
        }).toThrowError('La cantidad de competencias debe ser un número positivo.');
    });

    test("lanzar error al establecer cantidad no numérica de competencias", () => {
        expect(() => {
            cont.setCantidadCompes("texto");
        }).toThrowError('La cantidad de competencias debe ser un número positivo.');
    });
});