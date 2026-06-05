import express from 'express'
import { crearHabit, obtenerHabitos,obtenerHabitPorId, actualizarHabit, eliminarHabit } from '../controllers/habitController.js'

const router = express.Router()

/**
 * @swagger
 * /api/habits:
 *   post:
 *     summary: Crear un nuevo hábito
 *     tags:
 *       - Hábitos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               usuarioId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hábito creado correctamente
 */
router.post('/', crearHabit)

/**
 * @swagger
 * /api/habits:
 *   get:
 *     summary: Obtener todos los hábitos
 *     tags:
 *       - Hábitos
 *     responses:
 *       200:
 *         description: Lista de hábitos
 */
router.get('/', obtenerHabitos)

/**
 * @swagger
 * /api/habits/{id}:
 *   get:
 *     summary: Obtener hábito por ID
 *     tags:
 *       - Hábitos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del hábito
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hábito encontrado
 *       404:
 *         description: Hábito no encontrado
 */
router.get('/:id', obtenerHabitPorId)

/**
 * @swagger
 * /api/habits/{id}:
 *   put:
 *     summary: Actualizar un hábito
 *     tags:
 *       - Hábitos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del hábito
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *     responses:
 *       200:
 *         description: Hábito actualizado correctamente
 */
router.put('/:id', actualizarHabit)

/**
 * @swagger
 * /api/habits/{id}:
 *   delete:
 *     summary: Eliminar un hábito
 *     tags:
 *       - Hábitos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del hábito
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hábito eliminado correctamente
 *       404:
 *         description: Hábito no encontrado
 */
router.delete('/:id', eliminarHabit)
export default router

