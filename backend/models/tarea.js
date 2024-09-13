const { DataTypes } = require('sequelize');
const { sequelize } = require('./');

const Tarea = sequelize.define('Tarea', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  estado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'tarea',
  timestamps: false
});

module.exports = Tarea;
