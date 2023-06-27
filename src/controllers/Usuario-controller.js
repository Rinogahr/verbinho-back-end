const UsuarioRepository = require("../repository/Usuario-Repository.js")

class UsuarioDepartamentoController{

    async index( req, res ){
        let resultBD = await UsuarioRepository.findAll();

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            list: resultBD
           })
    }

    async finById( req,res ){
        let resultBD = await UsuarioRepository.finById(req.params.id);

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            usuario: resultBD
           });

    }

    async store(req,res){
        let resultBD = await UsuarioRepository.creater(req.body);

        return res.send(resultBD);
    }

    async update(req,res){
        let resultBD = await UsuarioRepository.update(req.body);

        return res.send(resultBD);
    }

    async delete(req,res){
        let resultBD = await UsuarioRepository.destroy(req.body);

        return res.send(resultBD);
    }
}

module.exports = new UsuarioDepartamentoController();