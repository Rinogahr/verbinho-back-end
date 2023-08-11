const express = require('express');
const multer = require('multer');
const path = require('path');
const Routers = express.Router();
const DepartamentoController = require("../app/src/controllers/DepartamentoController");
const MembroController = require("../app/src/controllers/MembroController");
const UsuarioController = require("../app/src/controllers/UsuarioController");
const LoginController = require("../app/src/controllers/LoginController.js");
const HomeController = require("../app/src/controllers/HomeController.js");
const UsuarioUploadImgController = require("../app/src/controllers/UsuarioUploadImgController.js");


// Configurando o armazenamento dos arquivos de upload
const storage = multer.diskStorage({
    destination: '../app/public/assets',
    filename: function (req, file, cb) {
      const originalName = path.parse(file.originalname).name;
      const username = 'teste'//req.user.username; // Supondo que o nome do usuário logado esteja disponível no objeto de solicitação (req.user.username)
      const uniqueFileName = `${username}-${originalName}-${Date.now()}${path.extname(file.originalname)}`;
      cb(null, uniqueFileName);
    },
  });

  const upload = multer({ storage: storage });

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

Routers.post('/uploadfoto', upload.single('imagem'), UsuarioUploadImgController.uploadFoto);



module.exports = Routers;