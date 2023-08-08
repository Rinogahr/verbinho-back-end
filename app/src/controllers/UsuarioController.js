const usuarioRepository = require("../repository/UsuarioRepository.js");
const usuarioService = require("../service/UsuarioService.js");

class UsuarioDepartamentoController{

    async index( req, res ){
        let resultBD = await usuarioRepository.findAll();

        return  res.json({result: resultBD});
    }

    async findById( req,res ){
        let resultBD = await usuarioRepository.findById(req.params.id);

        return  res.json({result: resultBD});
    }

    async store(req,res){
        let resultBD = await usuarioService.Create(req.body);

        return res.send(resultBD);
    }

    async update(req,res){
        let resultBD = await usuarioRepository.update(req.body);

        return res.send(resultBD);
    }

    async delete(req,res){
        let resultBD = await usuarioRepository.destroy(req.query.id);

        return res.send(resultBD);
    }
}

module.exports = new UsuarioDepartamentoController();