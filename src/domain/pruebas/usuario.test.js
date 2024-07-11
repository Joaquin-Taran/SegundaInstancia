import { usuario } from '../usuario';

describe('Usuario Class', () => {
  test('Crear una instancia de Usuario y verificar el nombre inicial', () => {
    const user = new usuario(); // Aquí usamos 'usuario' con minúscula
    expect(user).toBeDefined(); // Verificar que la instancia se haya creado correctamente
    expect(user.getNombreUsuario()).toBe(''); // El nombre de usuario debería estar inicialmente vacío
  });

  test('Establecer y obtener el nombre de usuario', () => {
    const user = new usuario(); // Aquí también usamos 'usuario' con minúscula
    user.setNombreUsuario('Pedro');
    expect(user.getNombreUsuario()).toBe('Pedro'); // Verificar que el nombre de usuario se estableció correctamente
  });
});