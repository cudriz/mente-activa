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

// Obtener hábito por ID
export const obtenerHabitPorId = async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id)

    if (!habit) {
      return res.status(404).json({
        message: 'Hábito no encontrado'
      })
    }

    res.json(habit)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

// Actualizar hábito
export const actualizarHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!habit) {
      return res.status(404).json({
        message: 'Hábito no encontrado'
      })
    }

    res.json({
      message: 'Hábito actualizado correctamente',
      habit
    })

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

// Eliminar hábito
export const eliminarHabit = async (req, res) => {
  try {
    const habit = await Habit.findByIdAndDelete(req.params.id)

    if (!habit) {
      return res.status(404).json({
        message: 'Hábito no encontrado'
      })
    }

    res.json({
      message: 'Hábito eliminado correctamente'
    })

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}