# Desportillados
​
Desportillados es un e-commerce para la venta de productos relacionados al Ratón Perez
​
Cuenta con
​
- registro y login de usuarios: los campos son validados al realizar el registro (todavia no)
-  filtro por categorías: tomando las categorías de la base de datos se generan filtros de productos
- carrito: cuenta vista completa de los items del carrito, su total, y la opción de sacar un productos del carrito 
- vistas de listas de productos: vista general de productos con foto y detalles mínimos
- vista de detalles: vista con todos los detalles del producto y la opción de agregar/quitar una cantidad del mismo, esto se ve reflejado en el carrito
- control de stock: revisa que los usuarios no puedan agregar más items al carrito de los que hay disponibles, y revisa el stock real al momento de generar la compra
- Para finalizar compra se piden datos que se validan segun longitud y se pide 2 veces el correo para verificar que sea correcto y coincidan las dos entradas. Una vez que se preciona pagar se muestra en pantalla el codigo de la orden de compra.
​
## Instalación
​
1. Forkeá y cloná el repositorio
​
2. Parado en la raíz del proyecto corré el comando 
​
   ```
   npm install
   ```
​
    para instalar todas las dependecias del proyecto
​
3. Usá 
​
   ```
   npm start
   ```
​
    para correr el proyecto, que estará disponible en http://localhost:3000
​
​
​
## Dependencias
​
Uso de material ui para los componentes
​
Uso de React Router Dom para la navegación
​
​
## Aplicación en funcionamiento
​
![Desportillados en funcionamiento](https://github.com/lauradt/DesportilladosDovalTemporelli/blob/main/desportillados/src/DesportilladosGifFinal.gif)
​
### Autor
​
Laura Doval Temporelli
​
2021 - Curso de React en CoderHouse