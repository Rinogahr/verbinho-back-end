const UsuarioRepository = require("../repository/Usuario-Repository.js")

class UsuarioDepartamentoController{

    async index( req, res ){
        let resultBD = await UsuarioRepository.FindAll();

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            list: resultBD
           })
    }

    async finById( req,res ){
        let resultBD = await UsuarioRepository.FindById(req.params.id);

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            usuario: resultBD
           });

    }

    async store(req,res){
        let resultBD = await UsuarioRepository.Creater(req.body);

        return res.send(resultBD);
    }

    async update(req,res){
        let resultBD = await UsuarioRepository.Update(req.body);

        return res.send(resultBD);
    }

    async delete(req,res){
        let resultBD = await UsuarioRepository.Update(req.body);

        return res.send(resultBD);
    }
}

module.exports = new UsuarioDepartamentoController();