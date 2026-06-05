import express from 'express'
import { registerUser, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario, obtenerHabitosUsuario } from '../controllers/userController.js'

const router = express.Router()

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario encontrado
 */
router.post('/register', registerUser)

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
router.get('/', obtenerUsuarios)

/**
 * @swagger
 * /api/users/{id}/habits:
 *   get:
 *     summary: Obtener hábitos de un usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de hábitos del usuario
 */
router.get('/:id/habits', obtenerHabitosUsuario)

router.get('/:id', obtenerUsuarioPorId)

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Usuario actualizado correctamente
 */
router.put('/:id', actualizarUsuario)

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado correctamente
 */
router.delete('/:id', eliminarUsuario)

export default router