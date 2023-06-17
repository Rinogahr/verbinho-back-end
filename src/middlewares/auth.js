require("dotenv").config();
const jwt = require("jsonwebtoken");
const { request } = require("https");
const { promisify } = require("util");

































// rota utilizadas
//http://localhost:3002/ < esse precisa do token gerado
// http://localhost:3002/login < essa cria o token

//https://www.youtube.com/watch?v=F4SEC4f5hAE&t=123s << continuar assitindo a esse video