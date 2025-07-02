import authService from '../services/Auth.services.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await authService.register(username, email, password);
    res.status(201).json({ message: 'Usuario creado correctamente', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

