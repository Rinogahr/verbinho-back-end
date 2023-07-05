const express = require('express')
const Routers = express.Router();
const DepartamentoController = require("../app/src/controllers/Departamento-Controller");
const MembroController = require("../app/src/controllers/Membro-Controller");
const UsuarioController = require("../app/src/controllers/Usuario-controller");
const LoginController = require("../app/src/controllers/Login-Controller.js");
const HomeController = require("../app/src/controllers/Home-Controller.js");
const UsuarioUploadImgController = require("../app/src/controllers/UsuarioUploadImg-Controller.js");

// DEPARTAMENTO, MEMBRO, USUARIO

// ROTAS DEPARTAMENTO
Routers.get('/departamento', DepartamentoController.index);
Routers.get('/departamento/:id', DepartamentoController.findById);
Routers.post('/new-departamento', DepartamentoController.store);
Routers.put('/upd-departamento', DepartamentoController.update);
Routers.delete('/del-departamento', DepartamentoController.delete);

// ROTAS MEMBRO
Routers.get('/membro', MembroController.index);
Routers.get('/membro/:id', MembroController.findById);
Routers.post('/new-membro', MembroController.store);
Routers.put('/upd-membro', MembroController.update);
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