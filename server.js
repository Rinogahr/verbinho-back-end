require('dotenv').config();
const express = require("express");
const routes = require("./routes/api");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { eAdmin } = require("./app/src/middlewares/auth"); //arquivo para autentificação com as configurações de adm ou não apenas criado com adm
const { json } = require("express");

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);





app.listen(process.env.VERBINHO_NODE_PORT, () => {
    console.info(`Servidor iniciado na porta ${process.env.VERBINHO_NODE_PORT} 
    acess: ${process.env.VERBINHO_NODE_HOST}${process.env.VERBINHO_NODE_PORT}`);
});