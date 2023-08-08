const {querySync} = require("../../../mysql/connection");

class UsuarioRepository{

    queryBase(){
        let query =
            `SELECT
                id, login, senha
            FROM usuario`;
    
            return query;
    }

    async findAll(){
       try {
        let query = await querySync(this.queryBase());

        if(query.length > 0){
            return {status: true, mensagem: "Consulta realizada com sucesso!", query: query}; 
        }else{
            return {status: false, mensagem: "Sem resultado!", query: result}; 
        }

    } catch (err) {
        return {status: false, mensagem: "Erro na consulta favor verificar !", err: err}
       }
    }

    async findById( id ){
       try {
        let query = this.queryBase();
        query += ` WHERE id = ${id}`
        let result = await querySync(query);
        if(result.length > 0){
            return {status: true, mensagem: "Consulta realizada com sucesso!", query: result}; 
        }else{
            return {status: false, mensagem: "Sem resultado!", query: result}; 
        }

        } catch (err) {
            return {status: false, mensagem: "Erro na consulta favor verificar !", err: err}
        }
    }

    async destroy( id ){
       try {
        let result = await querySync(`DELETE FROM usuario  WHERE id = ${id}`);

        if(result.length > 0){
            return {status: true, mensagem: "Consulta realizada com sucesso!", query: result}; 
        }

        } catch (err) {
            return {status: false, mensagem: "Erro na consulta favor verificar !", err: err}
        }
    }



}

module.exports = new UsuarioRepository();