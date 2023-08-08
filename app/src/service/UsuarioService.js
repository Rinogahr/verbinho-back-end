const UsuarioRepository = require("../repository/UsuarioRepository");
const config = require("../middlewares/Config");

class UsuarioService  {

  async Create( req, res ){
      let result ={};
      if(req.senha != req.repeteSenha){
          return result = {
              status: false,
              mensagem: "senha e Repetir Senha não são as mesmas"
          };
      }else{
          let query = UsuarioRepository.queryBase();
          query += ` WHERE login = "${req.login}"`;
          let result = await querySync(query);
          if(result.length > 0){
              return result = {
                  mensagem: "Não foi possivel registrar, já existe um usuário cadastrado"
              }
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

  }

  
  async Update( req, res ){

    let result = {};
    if(req.senha != req.repeteSenha){
        return result = {
            status: false,
            mensagem: "senha e Repetir Senha não são as mesmas"
        };
    }else{
        let query = UsuarioRepository.queryBase();
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

async Destroy( req, res ){ 
    let result = {};
    let query = UsuarioRepository.queryBase();
        query += ` where id = ${req}`;
    let resp = await querySync(query);
    if(resp.length > 0){
        try {
            let destroy  = await UsuarioRepository.destroy(id); 
        if( destroy.affectedRows > 0){
            return result = {
                status: true,
                mensagem: "sucesso: usuário excluido com sucesso!",
                resp: destroy
            };
        }else{
            return result = {
                status: false,
                mensagem: "error: Não foi possivel o procedimento, enter em contato com o Suporte!"
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

module.exports = new UsuarioService();