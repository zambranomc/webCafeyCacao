# React + Vite

# ☕ KFE & KKO — Tienda Online de Café y Cacao

¡Bienvenido al repositorio de **KFE & KKO**! Una aplicación web de comercio electrónico, diseñada para ofrecer una selección exclusiva de café y chocolate  artesanal.


🔗 **Enlaces a repositorios** 
GitHub: https://github.com/zambranomc/webCafeyCacao
Vercel: https://web-cafey-cacao.vercel.app/

---

## 🚀 Características principales
* **Catálogo dinámico:** Carga de productos gestionada de forma local a través de un archivo estructurado en formato JSON (`dataProducts.json`).
* **Navegación fluida (SPA):** Implementada con React Router DOM para una experiencia de usuario rápida y sin recargas de página.
* **Diseño responsivo:** Adaptado para verse de manera óptima tanto en dispositivos móviles como en pantallas de escritorio.


---

## 🛠️ Tecnologías y Herramientas
Este proyecto fue construido utilizando:
* **[React Router DOM](https://reactrouter.com/)** - Manejo de rutas y navegación.
* **[Vite](https://vitejs.dev/)** - Herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos.
* **[React](https://react.dev/)** - Biblioteca de JavaScript para la interfaz de usuario.
* **HTML5/Estructura y marcado semántico de la página web. 
* **CSS / Estilos personalizados** - Diseño visual y estructuración de componentes
* **[GitHub](https://github.com/)** - Control de versiones y alojamiento del repositorio de código. 
* **[Vercel](https://vercel.com/)** - Hosting y despliegue continuo.

---

## 📂 Estructura de Datos
La información de los artículos mostrados en la tienda se encuentra centralizada en un archivo local:

src/
 ├── assets/
          └── dataProducts.json  # Contiene el listado, precios y descripciones de café y cacao
 ├── components/ 
	└── AboutCoffee.jsx
   	└──ContactForm.jsx # Formulario
	└──ContactInfo.jsx
	└──Footer.jsx 
	└──Navbar.jsx
	└──ProductsCart.jsx
	└──ProductsDetail.jsx
 ├──  pages/         # Vistas principales conectadas por React Router Dom
	└──About.jsx
	└──Contact.jsx
	└──Home.jsx
	└──Products.jsx
 └── App.jsx
 └── Index.css

