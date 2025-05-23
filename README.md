# Tenpo Challenge - React Application

Esta aplicación es un desafío técnico que incluye:
- Pantalla de login con fake-login
- Home protegida que muestra una lista de 2000 elementos
- Funcionalidad de logout

## Tecnologías utilizadas

- React 19
- TypeScript
- Vite
- React Router Dom
- Material UI
- Axios
- Context API para manejo de estado

## Características

- **Autenticación**: Sistema de fake-login con almacenamiento de token en memoria
- **Interfaz de usuario**: Diseño moderno y responsive con Material UI
- **Lista de datos**: Visualización de 2000 elementos con paginación y búsqueda
- **Arquitectura**: Separación clara entre contextos públicos y privados
- **Configuración de Axios**: Interceptores para incluir automáticamente el token en las peticiones

## Requisitos previos

- Node.js (versión 18 o superior)
- pnpm

## Instalación

1. Clona este repositorio
2. Instala las dependencias:
   ```bash
   pnpm install
   ```

## Ejecución

Para iniciar la aplicación en modo desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en [http://localhost:5173](http://localhost:5173)

## Estructura del proyecto

```
src/
├── api/                # Configuración de API y servicios
├── components/         # Componentes reutilizables
├── contexts/           # Contextos de React (AuthContext)
├── features/           # Características de la aplicación
│   ├── auth/           # Funcionalidades de autenticación
│   └── home/           # Pantalla principal
|__ pages/              # Páginas genéricas
├── App.tsx             # Componente principal
└── main.tsx            # Punto de entrada
```

## Documentación adicional

### Persistencia del token

El token se almacena en memoria dentro del contexto de autenticación. Se utilizan interceptores de Axios para incluir automáticamente el token en cada solicitud.

### Arquitectura de rutas

La aplicación implementa una estructura de rutas que separa el contexto público (login) del privado (home), permitiendo un crecimiento escalable.

- **Rutas públicas**: Accesibles sin autenticación
- **Rutas protegidas**: Requieren autenticación para ser accedidas