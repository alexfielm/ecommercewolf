
    CONCEPTOS IMPORTANTES DE REACT.JS IMPLEMENTADOS

Durante el desarrollo de esta aplicación de comercio electrónico (E-Commerce Wolf), he aplicado los siguientes conceptos clave de React.js y su ecosistema:

1. COMPONENTES FUNCIONALES Y MODULARIDAD
--------------------------------------------------------------
Toda la interfaz de usuario está construida dividiéndola en pequeños bloques reutilizables llamados componentes funcionales. 
- Ejemplos: `NavBar`, `ItemListContainer`, `ItemDetailContainer`, `Button`, `Item`, etc. 
- La modularidad permite tener un código más limpio, mantenible y escalable.

2. PROPIEDADES (PROPS)
--------------------------------------------------------------
La comunicación principal para pasar datos de un componente padre a un componente hijo se ha dado mediante los `props`.
- Ejemplo: Al renderizar múltiples productos en `ItemListContainer`, mapeamos sobre `<Item id={...} title={...} price={...} image={...} />`. El componente `Item` recibe esta información por "props" y sabe qué mostrar.

3. ESTADO (STATE) Y EL HOOK `useState`
--------------------------------------------------------------
El hook `useState` permite que los componentes puedan guardar información propia que cambie durante el uso de la aplicación, ocasionando que la pantalla se vuelva a renderizar cuando esos datos cambian.
- Ejemplo: Se implementó un modal (Guía de talles) en el componente `ItemDetail.jsx` usando `const [showModal, setShowModal] = useState(false)`. Cuando el estado cambia a `true`, el modal de las tallas se muestra en la pantalla.

4. ENRUTAMIENTO O NAVEGACIÓN (React Router DOM)
--------------------------------------------------------------
Para la navegación entre distintas "páginas" (como Inicio, Verano, Invierno, Carrito y el Detalle del Producto) utilicé `react-router-dom`. Conceptos que implementé aquí:
- `<Routes>` y `<Route>`: En `App.jsx`, definen qué componente montar en la página cuando el usuario se encuentra en alguna URL específica (ej. `Route path='/Invierno'`).
- `<Link>`: Integrado en componentes como `NavList` o `Item` de cada producto para cambiar de página sin recargar la pantalla completa por el navegador. (Single Page Application - SPA).
- `useParams`: Un hook muy importante que extrae valores dinámicos configurados en las rutas (ej. `path='/ItemDetail/:id'`). Esto permite que en el componente de detalle del producto (`ItemDetail.jsx`), la app sepa exactamente qué producto con el `id` X el usuario ha clickeado para mostrar sus respectivos detalles.

5. RENDERIZADO DE LISTAS (.map)
--------------------------------------------------------------
La vista de muchos componentes (como las grillas de prendas) requerían que transformara toda la información desde el origen de datos (`products.js` u otros arreglos) hacia componentes individuales en la pantalla.
- Ejemplo: En el `ItemListContainer`, utilizo `filteredProducts.map(...)` para recorrer el array y retornar un bloque de código HTML/JSX individual (específicamente `<Item ... />`) por cada elemento en una sola línea de código concisa. Siempre empleando la regla del "key={product.id}".

6. RENDERIZADO CONDICIONAL
--------------------------------------------------------------
Permite a un componente decidir qué elemento debe renderizar basándose en condiciones y variables. Existen dos aplicaciones que realicé en el proyecto:
- Operadores Ternarios (`condicion ? esto : lo_otro`): Usado en `ItemListContainer` para saber si necesita filtrar por `category` o simplemente mostrar toda la base de datos de los productos si no hay categoría especificada.
- Operador Lógico AND (`&&`): En el caso del `ItemDetail.jsx`, la UI del modal (`<div className="modal-overlay">`) solo se despliega y renderiza en pantalla cuando `showModal && (...)` es verdadero.

--------------------------------------------------------------
Este proyecto sirvió no solo para practicar el maquetado (HTML/CSS adaptado para JSX), sino para dominar el enrutado, los hooks de efectos de interfaz visuales y la creación de una arquitectura SPA moderna en React. Link de la web: https://ecommercethewolf.vercel.app
==============================================================
