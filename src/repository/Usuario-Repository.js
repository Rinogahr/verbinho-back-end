const {querySync} = require("../../mysql/connection");
const config = require("../../middlewares/Config");

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
        }

        } catch (err) {
            return {status: false, mensagem: "Erro na consulta favor verificar !", err: err}
        }
    }

    async creater( req, res ){
        let result ={};
        if(req.senha != req.repeteSenha){
            return result = {
                status: false,
                mensagem: "senha e Repetir Senha não são as mesmas"
            };
        }else{
            let senhaCripto = await config.crypto(req.senha);

            let newUsuario = await querySync("insert into usuario (login, senha) values (?,?)",
            [  req.login,
                senhaCripto,
            ]);

            if(newUsuario.affectedRows > 0){
                return result = {
                    result: newUsuario,
                    status: true,
                    mensagem: "Usuário gravado com sucesso!",
                };
            }else{
                return result = {
                    result: newUsuario,
                    status: false,
                    mensagem: "nao foi possivel gravar",
                };
            }

        }

    }

    async update( req, res ){

        let result = {};
        if(req.senha != req.repeteSenha){
            return result = {
                status: false,
                mensagem: "senha e Repetir Senha não são as mesmas"
            };
        }else{
            let query = queryBase;
                query += ` where id = ${req.id}`;
            let resp = await querySync(query);

            if(resp.length > 0){
                let upsenha = config.crypto(req.senha);
                let update  = await querySync(` UPDATE
                                                    usuario
                                                SET
                                                    login = '${req.login}',
                                                    senha = '${upsenha}'
                                                WHERE
                                                    id = ${req.id}`);
                if( update.affectedRows > 0){
                    return result = {
                        status: true,
                        mensagem: "sucesso: atualização foi realizada!",
                        resp: update
                    };
                }else{
                    return result = {
                        status: false,
                        mensagem: "error: Não foi possivel atualizar o usuário enter em contato com o Suporte!"
                    };
                }
            }else{
                return result = {
                    status: false,
                    mensagem: "error: usuário não encontrado!"
                };
            }
        }
    }

    async destroy( req, res ){ }

}

module.exports = new UsuarioRepository();