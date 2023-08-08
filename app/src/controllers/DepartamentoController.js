const departamentoRepository = require("../repository/DepartamentoRepository");

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
    async findById( req,res ){
        let resultBD = await departamentoRepository.findById(req.params.id);

        return  res.json({result: resultBD});
    }

    async store(req,res){
        let resultBD = await departamentoRepository.creater(req.body);

        return res.send(resultBD);
    }

    async update(req,res){
        let resultBD = await departamentoRepository.update(req.body);

        return res.send(resultBD);
    }

    async delete(req,res){
        let resultBD = await departamentoRepository.destroy(req.query.id);

        return res.send(resultBD);
    }
}

module.exports = new DepartamentoController();