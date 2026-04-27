import express from 'express'
import { crearHabit, obtenerHabitos } from '../controllers/habitController.js'

const router = express.Router()

router.post('/', crearHabit)
router.get('/', obtenerHabitos)

export default router