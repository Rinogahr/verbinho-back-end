const departamentoRepository = require("../repository/Departamento-Repository");

class DepartamentoController{

    async index(req,res){
        let resultBD = await departamentoRepository.findAll();

        if(!resultBD){
            return  res.json({
                status: 200,
                mensage: "Consulta sem resultado!",
                list: resultBD
               })
        }else{
            return  res.json({
                status: 200,
                mensage: "Consulta realizada com sucesso!",
                list: resultBD
                })
        }
    }
    async finById( req,res ){
        let resultBD = await departamentoRepository.finById(req.params.id);

        return  res.json({
            status: 200,
            mensage: "Consulta realizada com sucesso!",
            usuario: resultBD
           });

    }
    async store(req,res){}
    async update(req,res){}
    async delete(req,res){}
}

module.exports = new DepartamentoController();