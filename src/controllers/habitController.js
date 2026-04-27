import Habit from '../models/habit.js'

// Crear hábito
export const crearHabit = async (req, res) => {
  try {
    const habit = new Habit(req.body)
    await habit.save()

    res.status(201).json({
      message: 'Hábito creado correctamente',
      habit
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener hábitos
export const obtenerHabitos = async (req, res) => {
  try {
    const habitos = await Habit.find()
    res.json(habitos)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}