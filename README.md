# Clínica Nutricional NutriVida

## Descripción

NutriVida es una aplicación web desarrollada como parte de la asignatura de Desarrollo FullStack.

El proyecto representa una clínica nutricional y permite presentar sus servicios, navegar entre distintas páginas, utilizar formularios con validaciones y acceder a un panel administrativo mediante un inicio de sesión simulado.

La aplicación se desarrolla progresivamente utilizando React y Vite.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML y JSX
- CSS
- Bootstrap
- React Router
- Vitest
- React Testing Library
- ESLint

## Funcionalidades implementadas

### Página de inicio
- Presentación de la Clínica Nutricional NutriVida.
- Información introductoria.
- Acceso a los servicios nutricionales.

### Página de servicios
- Visualización de servicios nutricionales.
- Componentes reutilizables.
- Uso de props.
- Buscador interactivo utilizando `useState`.

### Formulario de contacto
- Campos de nombre, correo electrónico y mensaje.
- Validación de campos obligatorios.
- Validación del formato del correo electrónico.
- Mensajes de error y confirmación.
- Limpieza del formulario después de un envío válido.

El formulario es una simulación académica y no envía información a un servidor.

### Inicio de sesión
- Formulario de correo electrónico y contraseña.
- Validación de campos obligatorios.
- Comprobación de credenciales de demostración.
- Simulación de sesión mediante `localStorage`.

**Credenciales de demostración:**

- Correo: `admin@nutrivida.cl`
- Contraseña: `Admin123`

Este mecanismo es únicamente educativo y no debe utilizarse como autenticación real en producción.

### Panel administrativo
- Página administrativa.
- Secciones informativas de Pacientes, Servicios y Consultas.
- Protección de la ruta administrativa.
- Redirección al Login cuando no existe una sesión activa.
- Funcionalidad de cierre de sesión.

Las secciones administrativas todavía no implementan operaciones reales de gestión de pacientes o consultas.

### Navegación y diseño
- Navegación mediante React Router.
- Layout compartido.
- Header y Footer reutilizables.
- Diseño responsivo con Bootstrap y CSS.

## Estructura principal del proyecto

```text
nutrivida/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── vitest.config.js
└── README.md
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TsukuMvA/nutrivida.git
```

### 2. Entrar al proyecto

```bash
cd nutrivida
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar la aplicación

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

## Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/servicios` | Servicios nutricionales |
| `/contacto` | Formulario de contacto |
| `/login` | Inicio de sesión |
| `/admin` | Panel administrativo protegido |

## Pruebas automatizadas

El proyecto utiliza Vitest y React Testing Library.

Para ejecutar las pruebas:

```bash
npm test
```

Para ejecutar las pruebas con cobertura:

```bash
npm run test:coverage
```

### Resultados de la Semana 9

- 12 archivos de pruebas aprobados.
- 39 pruebas automatizadas aprobadas.
- 0 pruebas fallidas.

### Cobertura reportada por Vitest

| Métrica | Cobertura |
|---|---|
| Statements | 100 % |
| Branches | 100 % |
| Functions | 100 % |
| Lines | 100 % |

Los porcentajes corresponden a los archivos incluidos en el informe de cobertura de Vitest.

## Calidad del código

Ejecutar ESLint:

```bash
npm run lint
```

Generar la compilación de producción:

```bash
npm run build
```

## Verificación responsiva

Se realizó una revisión visual de la aplicación utilizando las herramientas de desarrollador del navegador Brave.

Las páginas Inicio, Servicios, Contacto, Login y Admin fueron verificadas en las siguientes resoluciones:

- 360 px: dispositivos móviles.
- 768 px: tablets.
- 1280 px: computadores de escritorio.

Durante la revisión no se detectaron problemas evidentes de desbordamiento horizontal, distribución de componentes o legibilidad.

Se comprobó que los formularios, las tarjetas de servicios, la navegación y el panel administrativo se adaptan correctamente a los distintos tamaños de pantalla.

## Estado del proyecto

- **Semana 7:** implementación inicial del frontend con React.
- **Semana 8:** incorporación de Layout, formularios, Login, panel administrativo, rutas protegidas y pruebas automatizadas.
- **Semana 9:** revisión responsiva, ejecución de pruebas y medición de cobertura.

## Repositorio

https://github.com/TsukuMvA/nutrivida

## Observaciones

NutriVida es un proyecto académico en desarrollo. Las funcionalidades de autenticación, contacto y administración contienen simulaciones y no están conectadas a un backend de producción.