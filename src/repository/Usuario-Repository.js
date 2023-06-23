const QueryBase = require("../middlewares/queryBase");
const {querySync} = require("../../mysql/connection");
const Config = require("../middlewares/Config");

class UsuarioRepository{

    async FindAll(){
       try {
        let list = await querySync(QueryBase.Usuario());

        return list

       } catch (error) {
            return error
       }
    }

    async FindById( id ){
       try {

        let query = QueryBase.Usuario();
        query += ` WHERE id = ${id}`

        return await querySync(query);

       } catch (error) {
            return error
       }
    }

    async Creater( req, res ){
        let result ={};
        if(req.senha != req.repeteSenha){
            return result = {
                status: false,
                mensagem: "senha e Repetir Senha não são as mesmas"
            };
        }else{
            let senhaCripto = await Config.Crypto(req.senha);

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

    async Update( req, res ){

        let result = {};
        if(req.senha != req.repeteSenha){
            return result = {
                status: false,
                mensagem: "senha e Repetir Senha não são as mesmas"
            };
        }else{
            let query = QueryBase.Usuario();
                query += ` where id = ${req.id}`;
            let resp = await querySync(query);

            if(resp.length > 0){
                let upsenha = Config.Crypto(req.senha);
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

    async Destroy( req, res ){ }

}

module.exports = new UsuarioRepository();