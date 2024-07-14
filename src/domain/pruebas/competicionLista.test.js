import { competicionLista } from '../competicionLista';
import { competicion } from '../competicion';

describe("competicionLista", () => {
  let listaCompes;

  beforeEach(() => {
    listaCompes = new competicionLista();
  });

  test("la lista se inicializa correctamente", () => {
    expect(listaCompes.getCompe()).toEqual([]);
  });


  test("agregar una competencia a la lista", () => {
    const comp1 = new competicion();
    comp1.setNombreCompeticion('Competencia 1');
    listaCompes.add(comp1);
    expect(listaCompes.getCompe()).toContain(comp1);
  });

  test("lanzar error al agregar una competicion con el mismo nombre", () => {
    const competencia1 = new competicion();
    competencia1.setNombreCompeticion("Competencia1");
  
    const competencia2 = new competicion();
    competencia2.setNombreCompeticion("Competencia1");
  
    listaCompes.add(competencia1);
  
    expect(() => {
      listaCompes.add(competencia2);
    }).toThrowError(`No se pudo agregar la competición con el nombre: "Competencia1", ese nombre ya se ha registrado.`);
  });

  test("encontrar una competencia por nombre", () => {
    const comp1 = new competicion();
    comp1.setNombreCompeticion('Competencia 1');
    listaCompes.add(comp1);
  
    const comp2 = new competicion();
    comp2.setNombreCompeticion('Competencia 2');
    listaCompes.add(comp2);
  
    expect(listaCompes.encontrarCompeticion('Competencia 1')).toEqual(comp1);
    expect(listaCompes.encontrarCompeticion('Competencia 3')).toBeUndefined();
  });

})