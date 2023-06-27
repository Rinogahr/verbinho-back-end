const {querySync} = require("../../mysql/connection");

class DepartamentoRepository{

    async queryBase(){
        let query =
        `SELECT
            id, nome,
            sala, funcao
        FROM departamento  `;

        return query;
    }

    async findAll( req, res ){
        try {
            let list = await querySync(queryBase);
    
            return list
    
           } catch (error) {
                return error
           }
    }
    async findById( id ){
        try {
 
         let query = queryBase;
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