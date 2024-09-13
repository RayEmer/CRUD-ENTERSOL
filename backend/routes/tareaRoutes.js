const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');

router.get('/tareas', tareaController.getTareas);
router.get('/tareas/:id', tareaController.getTarea);
router.post('/tareas', tareaController.createTarea);
router.put('/tareas/:id', tareaController.updateTarea);
router.delete('/tareas/:id', tareaController.deleteTarea);

module.exports = router;
