const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const tareaRoutes = require('./routes/tareaRoutes');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', tareaRoutes);

sequelize.authenticate().then(() => console.log('Base de datos conectada...'))
  .catch(err => console.error('Error al conectarse a la Base de datos:', err));

app.listen(port, () => {
  console.log(`Server corriendo en el puerto: ${port}`);
});
