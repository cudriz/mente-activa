import swaggerJSDoc from 'swagger-jsdoc'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Mente Activa',
      version: '1.0.0',
      description: 'Documentación de la API del proyecto Mente Activa'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },

  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec