const MembroRepository = require("../repository/Membro-Repository.js");

class MembroController{

    async index( req, res ){
        let resultBD = await MembroRepository.FindAll();

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            list: resultBD
           })
    }

    async finById( req,res ){
        let resultBD = await MembroRepository.FindById(req.params.id);

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            usuario: resultBD
           });

    }

    async store(req,res){
        let resultBD = await MembroRepository.Creater(req.body);

        return res.send(resultBD);
    }

    async update(req,res){}

    async delete(req,res){}
}

module.exports = new MembroController();