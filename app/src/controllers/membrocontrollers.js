const  membroModels  = require("../models/membromodels");
const { json } = require("express");

module.exports = {
    index: ( req, res ) => { //o index vai trazer a listagem  de todos os membros
        return res.json([
            {
                erro: true,
                res: membroModels.listMembros
            }
        ]).status(200);
    }
}