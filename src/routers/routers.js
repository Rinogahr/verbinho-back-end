const express = require('express')
const Routers = express.Router();
const DepartamentoController = require("../controllers/Departamento-Controller");
const MembroController = require("../controllers/Membro-Controller");
const UsuarioController = require("../controllers/Usuario-controller");
const LoginController = require("../controllers/Login-Controller.js");
const HomeController = require("../controllers/Home-Controller.js");
const UsuarioUploadImgController = require("../controllers/UsuarioUploadImg-Controller.js");

// DEPARTAMENTO, MEMBRO, USUARIO

// ROTAS DEPARTAMENTO
Routers.get('/departamento', DepartamentoController.index);
Routers.get('/departamento/:id', DepartamentoController.finById);
Routers.post('/new-departamento', DepartamentoController.store);
Routers.put('/up-departamento', DepartamentoController.update);
Routers.delete('/del-departamento', DepartamentoController.delete);

// ROTAS MEMBRO
Routers.get('/membro', MembroController.index);
Routers.get('/membro/:id', MembroController.finById);
Routers.post('/new-membro', MembroController.store);
Routers.put('/up-membro', MembroController.update);
Routers.delete('/del-membro', MembroController.delete);

// ROTAS USUÁRIO
Routers.get('/usuario', UsuarioController.index);
Routers.get('/usuario/:id', UsuarioController.findById);
Routers.post('/new-usuario', UsuarioController.store);
Routers.put('/upd-usuario', UsuarioController.update);
Routers.delete('/del-usuario', UsuarioController.delete);


//ROTAS UNICAS
Routers.post('/login', LoginController.login);
Routers.get('/home', HomeController.home);
Routers.post('uploadFoto', UsuarioUploadImgController.uploadFoto);



module.exports = Routers;