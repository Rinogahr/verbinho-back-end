const {querySync} = require("../../../mysql/connection");

class DepartamentoRepository{

     queryBase(){
        let query =
        `SELECT
            id, nome,
            sala, funcao
        FROM departamento  `;

        return query;
    }

    async findAll( req, res ){
        try {
            let list = await querySync(this.queryBase());
    
            return list
    
           } catch (error) {
                return error
           }
    }
    async findById( id ){
        try {
 
         let query = this.queryBase();
         query += ` WHERE id = ${id}`
 
         return await querySync(query);
 
        } catch (error) {
             return error
        }
     }
    async creater( req, res ){
        let params = {nome:req.nome, sala: req.sala == "" ? null : req.sala, funcao: req.funcao == "" ? null : req.funcao  }
        let query = `INSERT INTO departamento (nome, sala, funcao) VALUES ('${params.nome}','${params.sala}','${params.funcao}')`;

        try {
            let result = await querySync(query);
            if (result.affectedRows > 0) {
                query = {
                    erro: false,
                    mensagem: "Departamento Cadastrado com sucesso !",
                    res: result
                };
            }else{
                query = {
                    erro: true,
                    mensagem: "Não foi possivel cadastar esse Departamento favor entrar em contato com o suporte !",
                    res: result
                };
            }
        } catch (error) {
            return error
        }
        
        return query;
    }
    async update( req, res ){
        let params = {id: req.id, nome:req.nome, sala: req.sala == "" ? null : req.sala, funcao: req.funcao == "" ? null : req.funcao}
        let query = `UPDATE departamento SET nome = '${params.nome}', sala = '${params.sala}', funcao = '${params.funcao}' WHERE id = ${params.id}`;

        try {
            let result = await querySync(query);
            if (result.affectedRows > 0) {
                query = {
                    erro: false,
                    mensagem: `Departamento de código ${params.id}  Atualizado com sucesso !`,
                    res: result
                };
            }else{
                query = {
                    erro: true,
                    mensagem: "Não foi possivel atualizar o Departamento favor entrar em contato com o suporte !",
                    res: result
                };
            }

            return query;
        } catch (error) {
            return error;
        }
    }
    async destroy( req, res ){ 
        let result = {};
        let query = this.queryBase();
            query += ` where id = ${req}`;
        let resp = await querySync(query);
        if(resp.length > 0){
            try {
                let destroy  = await querySync(`DELETE FROM departamento  WHERE id = ${req}`);
            if( destroy.affectedRows > 0){
                return result = {
                    status: true,
                    mensagem: "sucesso: departamento excluido com sucesso!",
                    resp: destroy
                };
            }else{
                return result = {
                    status: false,
                    mensagem: "error: Não foi possivel realizar o procedimento, enter em contato com o Suporte!"
                };
            }
            } catch (error) {
                return error
            }
        }else{
            return result = {
                status: false,
                mensagem: "error: usuário não encontrado!"
            };
        }
    }
    
}

module.exports = new DepartamentoRepository();