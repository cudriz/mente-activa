# Mente Activa

## Descripción del proyecto

Mente Activa es una aplicación diseñada para ayudar a los usuarios a gestionar hábitos saludables y llevar un seguimiento de sus actividades diarias.

El sistema permite registrar usuarios, crear hábitos personalizados, consultar información, actualizar registros y eliminar datos cuando sea necesario. La solución busca fomentar la organización personal y el desarrollo de rutinas positivas.

---

## Objetivo

Desarrollar una aplicación web que permita la gestión de hábitos personales mediante una arquitectura cliente-servidor, implementando buenas prácticas de desarrollo de software y utilizando tecnologías modernas para el almacenamiento y administración de la información.

---

## Tecnologías utilizadas

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Documentación

- Swagger
- Swagger UI Express

### Control de versiones

- Git
- GitHub

### Herramientas de desarrollo

- Nodemon
- Dotenv

---

## Arquitectura del sistema

El proyecto utiliza una arquitectura Cliente - Servidor basada en API REST.

```text
Frontend
    │
    ▼
Backend (Express)
    │
    ▼
MongoDB Atlas
```

### Componentes

#### Frontend

Interfaz de usuario encargada de interactuar con la API.

#### Backend

Implementado con Express.js.

Responsabilidades:

- Gestión de usuarios.
- Gestión de hábitos.
- Validación de solicitudes.
- Comunicación con la base de datos.

#### Base de datos

MongoDB Atlas almacena:

- Usuarios.
- Hábitos.

---

## Estructura del proyecto

```text
backend/
│
├── controllers/
│   ├── userController.js
│   └── habitController.js
│
├── models/
│   ├── User.js
│   └── habit.js
│
├── routes/
│   ├── userRoutes.js
│   └── habitRoutes.js
│
├── docs/
│   └── swagger.js
│
├── .env
├── server.js
└── package.json
```

---

## Instalación

### Clonar repositorio

```bash
git clone https://github.com/cudriz/mente-activa.git
```

Entrar al proyecto:

```bash
cd mente-activa/backend
```

---

### Instalar dependencias

```bash
npm install
```

---

### Configurar variables de entorno

Crear archivo `.env`

```env
MONGO_URI=tu_cadena_de_conexion
PORT=3000
```

---

## Ejecutar el proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo normal:

```bash
node server.js
```

Servidor:

```text
http://localhost:3000
```

---

## Documentación Swagger

Una vez iniciado el servidor:

```text
http://localhost:3000/api-docs
```

Allí se encuentran documentados todos los endpoints disponibles.

---

## Endpoints principales

### Usuarios

| Método | Endpoint |
|----------|----------|
| POST | /api/users/register |
| GET | /api/users |
| GET | /api/users/{id} |
| PUT | /api/users/{id} |
| DELETE | /api/users/{id} |
| GET | /api/users/{id}/habits |

---

### Hábitos

| Método | Endpoint |
|----------|----------|
| POST | /api/habits |
| GET | /api/habits |
| GET | /api/habits/{id} |
| PUT | /api/habits/{id} |
| DELETE | /api/habits/{id} |

---

## Funcionalidades implementadas

### Gestión de usuarios

- Registro de usuarios.
- Consulta de usuarios.
- Actualización de usuarios.
- Eliminación de usuarios.

### Gestión de hábitos

- Creación de hábitos.
- Consulta de hábitos.
- Actualización de hábitos.
- Eliminación de hábitos.

### Relación usuario-hábitos

- Consulta de hábitos asociados a un usuario específico.

---

## Equipo de desarrollo

Proyecto académico desarrollado para la asignatura Proyecto de Software.

Integrantes:

- Carlos
- Juan
- Yuleidy

---

## Estado del proyecto

Versión MVP funcional.

Funcionalidades implementadas:

- CRUD Usuarios.
- CRUD Hábitos.
- Documentación Swagger.
- Conexión MongoDB Atlas.
- API REST funcional.

---

## Licencia

Proyecto académico desarrollado con fines educativos.
