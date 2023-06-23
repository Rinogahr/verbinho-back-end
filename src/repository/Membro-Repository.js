const QueryBase = require("../middlewares/queryBase");
const {querySync} = require("../../mysql/connection");
const UsuarioRepository = require("../repository/Usuario-Repository.js");

class MembroRepository{

    async FindAll(){
        try {
         let list = await querySync(QueryBase.Membro());

         return list

        } catch (error) {
             return error
        }
     }

     async FindById( id ){
        try {

         let query = QueryBase.Membro();
         query += ` WHERE id = ${id}`

         return await querySync(query);

        } catch (error) {
             return error
        }
     }

    async Creater( req, res ){
        let objNewUsuario ={
            login: req.login,
            senha: req.senha,
            repeteSenha: req.repeteSenha
        }
        let query = QueryBase.Membro();
        query += ` WHERE email = '${req.email}' `;

        let result = await querySync(query);

        if(result.length > 0){
            return result = {
                mensagem: "Não foi possivel registar esse membro, pois já existe alguém cadastrado com esse e-mal  " + result[0].email + " !",
                result: result
            }
        }else{
            let createUsuario = await UsuarioRepository.Creater(objNewUsuario);
            if(createUsuario.result.affectedRows > 0){
                let idNewUsuario = createUsuario.result.insertId;

                let newMembro = await querySync("insert into membro (nome, datanasc, sexo, email, fone, dpId, usuId) values (?,?,?,?,?,?,?)",
                [   req.nome,
                    req.dataNasc,
                    req.sexo,
                    req.email,
                    req.fone,
                    parseInt(req.departamento),
                    parseInt(idNewUsuario)
                ]);

               if( newMembro.affectedRows > 0){
                return result = {
                    error: false,
                    mensagem: "Sucesso! membro cadastrado",
                    membro: newMembro
                }
               }else{
                return result = {
                    error: true,
                    mensagem: "Error: membro não cadastrado favor verificar com o suporte",
                    membro: newMembro
                }
               }
            }
        }

    }


    async Update( req, res ){}
    async Destroy( req, res ){}

}

module.exports = new MembroRepository();