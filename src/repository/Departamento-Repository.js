const QueryBase = require("../middlewares/queryBase");
const {querySync} = require("../../mysql/connection");

class DepartamentoRepository{

    async findAll( req, res ){
        try {
            let list = await querySync(QueryBase.Departamento());
    
            return list
    
           } catch (error) {
                return error
           }
    }
    async findById( id ){
        try {
 
         let query = QueryBase.Departamento();
         query += ` WHERE id = ${id}`
 
         return await querySync(query);
 
        } catch (error) {
             return error
        }
     }
    async creater( req, res ){}
    async update( req, res ){}
    async destroy( req, res ){}
    
}

module.exports = new DepartamentoRepository();