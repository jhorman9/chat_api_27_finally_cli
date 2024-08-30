const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT | 8080;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'});    
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}: http://localhost:${PORT}/`);
});