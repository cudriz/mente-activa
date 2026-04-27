import User from "../models/User.js";

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