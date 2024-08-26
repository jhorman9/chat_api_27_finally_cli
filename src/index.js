import express from "express";
import morgan from "morgan";
import cors from "cors";
import 'dotenv/config';

const app = express();

const PORT = 8000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({message: 'OK'});    
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}: http://localhost:${PORT}/`);
});                 