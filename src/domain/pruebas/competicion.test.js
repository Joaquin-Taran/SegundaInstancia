const { competicion } = require('../competicion');

describe("competicion", () => {
    let comp;

    beforeEach(() => {
        comp = new competicion();
    });

    test("inicialización", () => {
        expect(comp.getNombreCompeticion()).toBe("");
        expect(comp.getCantJugadores()).toBe(0);
        expect(comp.getTipoPrivacidad()).toBe("");
        expect(comp.getContraseña()).toBe("");
        expect(comp.getUsuario()).toEqual([]); // Verificar que el array de usuarios esté vacío inicialmente
    });

    test("set y get de nombre de competición", () => {
        comp.setNombreCompeticion("Competencia1");
        expect(comp.getNombreCompeticion()).toBe("Competencia1");
    });

    test("set y get de cantidad de jugadores", () => {
        comp.setCantJugadores(10);
        expect(comp.getCantJugadores()).toBe(10);
    });

    test("set y get de tipo de privacidad", () => {
        comp.setTipoPrivacidad("Privado");
        expect(comp.getTipoPrivacidad()).toBe("Privado");
    });

    test("set y get de contraseña", () => {
        comp.setContraseña("contraseña123");
        expect(comp.getContraseña()).toBe("contraseña123");
    });

    test("agregar usuario", () => {
        comp.addUsuario("Usuario1");
        expect(comp.getUsuario()).toEqual(["Usuario1"]); // Verificar que el usuario se agregó correctamente

        // Intentar agregar el mismo usuario debería lanzar un error
        expect(() => {
            comp.addUsuario("Usuario1");
        }).toThrowError('No se pudo agregar el usuario con el nombre: "Usuario1", ese nombre ya se ha registrado.');
    });

    test("verificar si usuario está", () => {
        comp.addUsuario("Usuario2");
        expect(comp.verificarSiEsta("Usuario2")).toBe(true); // Verificar que el usuario está en la competición
        expect(comp.verificarSiEsta("Usuario3")).toBe(false); // Verificar que el usuario no está en la competición
    });
});