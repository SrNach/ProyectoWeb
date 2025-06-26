# ProyectoWeb
Proyecto de Ingeniería Web y Móvil

## Descripción
La aplicación "The Burgers" es una página e-commerce de hamburguesas, bebidas y papas fritas, desarrollado con Ionic + Angular en front-end.

Integrantes:
- Daniel Cepeda Donoso
- Davor Serey Guzmán
- Ignacio Silva Rubio
- Nicolás Torfan Bdewi
- Bruno Toro Carrasco

## Preparación previa
- Se requiere tener Node.js instalado.
- Se requiere tener Ionic /CLI instalado.
- Se requiere tener Angular /CLI instalado.
- Se requiere de un editor de código como VSCode.
- Se requiere tener Express.js instalado.
- Se requiere tener MySQL Workbench o XAMPP Control para el alojamiento de la base de datos.
- (Opcional) Tener Postman o Insomnia para las pruebas de las APIs.

## Características actuales
- Implementación completa de front-end en Ionic + Angular.
- Implementación de server back-end.
- Definición de la navegación entre páginas y UI/UX.
- Prototipos UI/UX en Figma (Enlace: ).
- Base de datos en Usuarios.sql.
- API REST local en apidata.json.
- Manejo de sesiones implementado.
- Pruebas POST y GET de API y DB en TheBurgersTest.json.
- Implementación de seguridad contra inyecciones SQL/XSS.
- Encriptacion de contraseñas.
- Integración API externa de envío de correos para recuperar contraseña.

## Instrucciones de uso
- Descargar carpeta "ProyectoWeb" del repositorio e ingresar a /ProyectoBurger.
- Abrir carpeta con VSCode o similares.
- Utilizar el comando "npm install" para instalar dependencias.
- Importar Usuarios.sql a herramienta de alojamiento de bases de datos.
- Abrir terminal e iniciar servidor backend con "node backend/index.js".
- Abrir otra terminal e iniciar el proyecto con "ionic serve".
- (Opcional) Se puede probar las pruebas con Postman o Insomnia.

## Requerimientos funcionales
Gestión de cuenta
1. El usuario debe poder registrarse con correo electrónico, nombre de usuario, dirección, número telefónico, contraseña y confirmación contraseña.
2. El usuario debe poder iniciar sesión con correo electrónico y contraseña.
3. El usuario debe poder cambiar su contraseña.
4. El sistema debe poder enviar un correo cuando el usuario desee cambiar su contraseña.

Gestión de productos y pedidos
1. El usuario debe poder ver detalles de los productos (Descripción, imagen, precio).
2. El usuario debe poder ver los detalles de su pedido.
3. El usuario debe poder agregar productos su pedido.
4. El usuario es capaz de eliminar productos de su pedido.
5. El usuario debe poder aumentar la cantidad de producto de su pedido. 
6. El usuario debe poder disminuir la cantidad de producto de su pedido.
7. El sistema avisa el error al registrarse.
8. El sistema avisa el error al iniciar sesión.

## Requerimientos no funcionales
1. El sistema debe contar con una interfaz de usuario intuitiva, amigable y fácil de navegar, con transiciones claras y colores simples y contrastados.
2. El sistema debe contrar con una interfaz de usuario adaptable para aplicación web y móvil.
4. El sistema debe realizar las interacciones de productos y/o eventos de manera fluida.
5. El sistema debe contar con una base de datos MySQL.
6. El sistema debe contar con una API REST con los datos de los menús de la tienda e-commerce. 
7. El sistema debe contar con una API externa para enviar correos.

## Experiencia de usuario
Se busca que el usuario se sienta tranquilo y seguro con The Burgers, implementando una interfaz simple y fácil de entender y navegar, con indicaciones claras de que hace cada elemento de la página de e-commerce. The Burgers contiene colores y elementos simples de diferenciar, aumentando la accesibilidad. Se busca que el usuario se sienta confiado con sus acciones, dándole énfasis a la interactividad y navegación. Los colores de la página son simples y contrastan mucho entre si, teniendo un fondo blanco que mantiene una pantalla limpia. The Burgers está preparada para dispositivos móviles, ajustando sus elementos según el tamaño de la pantalla.
Actualmente, se hizo una mejora en la interfaz y experiencia de usuario, avisando correctamente los errores dentro de las páginas de registro e inicio de sesión, detallando específicamente que está fallando, ya sea el formato o campos incorrectos ingresados por el usuario.

## Definición de navegación
The Burgers cuenta con distintas pantallas:
1. Home: Pantalla principal, donde se puede ingresar a los menús de combos, hamburguesas y acompañamientos.
2. Login: Inicio de sesión, que aparecerá en el Header cuando el usuario no esté con la cuenta iniciada, desde esta pantalla se puede ir a la página de registro y a la página de cambiar contraseña (Si se da al botón después de rellenar los datos de los campos, se puede iniciar sesión).
3. SignUp: Registrarse, que aparecerá en el Header cuando el usuario no esté con la cuenta iniciada, desde esta pantalla se puede ir a la pantalla de inicio de sesión (Si se da al botón después de rellenar los datos de los campos, se puede registrar). 
4. MenuCombo: Contiene el menú de los combos, se puede navegar a los detalles de los combos, o a los menús de hamburguesas y/o acompañamientos.
5. MenuBurger: Contiene el menú de las hamburguesas, se puede navegar a los detalles de las hamburguesas, o a los menús de combos y/o acompañamientos.
6. MenuPapita: Contiene el menú de los acompañamientos, se puede navegar a los detalles de los acompañamientos, o a los menús de combos y/o hamburguesas.
7. ProductDetail: Contiene la información del producto seleccionado en cualquier menú, si se da al botón de "Agregar a pedido", se añadirá al pedido/carrito correctamente.
8. Profile: Contiene los datos de la cuenta con la sesión iniciada. Se puede ingresar desde el Header si ya se inició sesión. Tiene un botón funcional de cerrar sesión.
9. Carrito/Pedido: Se tienen todos los elementos del pedido actual del usuario, con la cantidad y el precio. Hay un botón de pagar que redirecciona a una simulación de pago; y un botón de seguir comprando que redirecciona a el menú de combos.
10. Pago: Es sólo una simulación de pago, donde se espera unos segundos y redirecciona a Home.
11. Componente Header: Contiene el logo, donde si se clickea direcciona al usuario a Home; además hay un botón de carrito que despliegua los elementos del pedido actual del usuario. Si no se ha iniciado sesión, saldrá el botón de registrarse e iniciar sesión; Si ya se inición sesión, saldrá un botón de Mi Cuenta.







