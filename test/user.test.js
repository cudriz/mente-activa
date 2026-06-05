import request from 'supertest'
import app from '../src/app.js'

describe('API Usuarios', () => {

  test('Debe obtener todos los usuarios', async () => {

    const response = await request(app)
      .get('/api/users')

    expect(response.statusCode).toBe(200)

  })

  test('Debe crear un usuario', async () => {

    const response = await request(app)
      .post('/api/users/register')
      .send({
        nombre: 'Usuario Test',
        email: `test${Date.now()}@gmail.com`,
        password: '123456'
      })

    expect(response.statusCode).toBe(200)

  })

})

test('Debe obtener un usuario por ID', async () => {

  // Crear usuario
  const nuevoUsuario = await request(app)
    .post('/api/users/register')
    .send({
      nombre: 'Carlos Test',
      email: `carlos${Date.now()}@gmail.com`,
      password: '123456'
    })

  // Buscar el usuario creado
  const usuarios = await request(app)
    .get('/api/users')

  const usuarioCreado = usuarios.body[usuarios.body.length - 1]

  const response = await request(app)
    .get(`/api/users/${usuarioCreado._id}`)

  expect(response.statusCode).toBe(200)

})

test('Debe actualizar un usuario', async () => {

  const nuevoUsuario = await request(app)
    .post('/api/users/register')
    .send({
      nombre: 'Usuario Actualizar',
      email: `actualizar${Date.now()}@gmail.com`,
      password: '123456'
    })

  const usuarios = await request(app)
    .get('/api/users')

  const usuario = usuarios.body[usuarios.body.length - 1]

  const response = await request(app)
    .put(`/api/users/${usuario._id}`)
    .send({
      nombre: 'Nombre Actualizado'
    })

  expect(response.statusCode).toBe(200)

})

test('Debe eliminar un usuario', async () => {

  await request(app)
    .post('/api/users/register')
    .send({
      nombre: 'Usuario Eliminar',
      email: `eliminar${Date.now()}@gmail.com`,
      password: '123456'
    })

  const usuarios = await request(app)
    .get('/api/users')

  const usuario = usuarios.body[usuarios.body.length - 1]

  const response = await request(app)
    .delete(`/api/users/${usuario._id}`)

  expect(response.statusCode).toBe(200)

})
