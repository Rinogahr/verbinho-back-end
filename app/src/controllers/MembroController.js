const membroRepository = require("../repository/MembroRepository.js");

class MembroController{

    async index( req, res ){
        let resultBD = await membroRepository.findAll();

        return  res.json({result: resultBD});
    }

    async findById( req,res ){
        let resultBD = await membroRepository.findById(req.params.id);

        return  res.json({result: resultBD});
    }

    async store(req,res){
        let resultBD = await membroRepository.creater(req.body);

        return res.send(resultBD);
    }

    async update(req,res){}

    async delete(req,res){}
}

module.exports = new MembroController();