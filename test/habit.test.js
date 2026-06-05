import request from 'supertest'
import app from '../src/app.js'

describe('API Hábitos', () => {

  test('Debe obtener todos los hábitos', async () => {

    const response = await request(app)
      .get('/api/habits')

    expect(response.statusCode).toBe(200)

  })

})

test('Debe crear un hábito', async () => {

  const response = await request(app)
    .post('/api/habits')
    .send({
      titulo: 'Prueba Jest',
      descripcion: 'Prueba automática',
      usuarioId: '69f22f277949db63a2de13ab'
    })

  expect(response.statusCode).toBe(201)

})

test('Debe obtener un hábito por ID', async () => {

  const crear = await request(app)
    .post('/api/habits')
    .send({
      titulo: 'Leer',
      descripcion: '30 minutos',
      usuarioId: '69e95a3d5d3c5e7a7916f182'
    })

  const id = crear.body.habit._id

  const response = await request(app)
    .get(`/api/habits/${id}`)

  expect(response.statusCode).toBe(200)

})

test('Debe actualizar un hábito', async () => {

  const crear = await request(app)
    .post('/api/habits')
    .send({
      titulo: 'Caminar',
      descripcion: '20 minutos',
      usuarioId: '69e95a3d5d3c5e7a7916f182'
    })

  const id = crear.body.habit._id

  const response = await request(app)
    .put(`/api/habits/${id}`)
    .send({
      titulo: 'Caminar Actualizado'
    })

  expect(response.statusCode).toBe(200)

})

test('Debe eliminar un hábito', async () => {

  const crear = await request(app)
    .post('/api/habits')
    .send({
      titulo: 'Eliminar',
      descripcion: 'Prueba',
      usuarioId: '69e95a3d5d3c5e7a7916f182'
    })

  const id = crear.body.habit._id

  const response = await request(app)
    .delete(`/api/habits/${id}`)

  expect(response.statusCode).toBe(200)

})