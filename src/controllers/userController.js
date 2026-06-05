import User from "../models/User.js";
import Habit from "../models/habit.js";

export const registerUser = async (req, res) => {
  try {
    const { nombre, email, password } = req.body

    const user = new User({ nombre, email, password })
    await user.save()

    res.json({ message: 'Usuario creado correctamente' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find()

    res.json(usuarios)

  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

// Obtener usuario por ID
export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }

    res.json(usuario);

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Actualizar usuario
export const actualizarUsuario = async (req, res) => {
  try {

    const usuario = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!usuario) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      message: 'Usuario actualizado correctamente',
      usuario
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Eliminar usuario
export const eliminarUsuario = async (req, res) => {
  try {

    const usuario = await User.findByIdAndDelete(
      req.params.id
    );

    if (!usuario) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      message: 'Usuario eliminado correctamente'
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

// Obtener hábitos de un usuario
export const obtenerHabitosUsuario = async (req, res) => {
  try {

    const habitos = await Habit.find({
      usuarioId: req.params.id
    });

    res.json(habitos);

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};