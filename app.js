require('dotenv').config();
const express = require("express");
const routes = require("./src/routes/routes");
const cors = require("cors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { eAdmin } = require("./src/middlewares/auth"); //arquivo para autentificação com as configurações de adm ou não apenas criado com adm
const { json } = require("express");

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);





app.listen(process.env.PORT_CONECTION, () => {
    console.info(`Servidor iniciado na porta ${process.env.PORT_CONECTION} acess: http://localhost:${process.env.PORT_CONECTION}`);
});