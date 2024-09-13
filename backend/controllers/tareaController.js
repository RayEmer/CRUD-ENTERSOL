const Tarea = require('../models/tarea');

// Obtener todas las tareas
exports.getTareas = async (req, res) => {
  try {
    const tareas = await Tarea.findAll();
    res.send(tareas);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Obtener una tarea por ID
exports.getTarea = async (req, res) => {
  try {
    const tarea = await Tarea.findByPk(req.params.id);
    if (tarea) {
      res.send(tarea);
    } else {
      res.status(404).send({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Crear una nueva tarea
exports.createTarea = async (req, res) => {
  console.log("Datos recibidos:", req.body);
  try {
    const nuevaTarea = await Tarea.create(req.body);
    res.status(201).send(nuevaTarea);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// Actualizar una tarea existente
exports.updateTarea = async (req, res) => {
  try {
    const updated = await Tarea.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      res.send({ message: 'Tarea actualizada' });
    } else {
      res.status(404).send({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Eliminar una tarea
exports.deleteTarea = async (req, res) => {
  try {
    const deleted = await Tarea.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.send({ message: 'Tarea eliminada' });
    } else {
      res.status(404).send({ message: 'Tarea no encontrada' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
