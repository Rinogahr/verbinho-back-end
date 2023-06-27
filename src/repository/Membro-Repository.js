const {querySync} = require("../../mysql/connection");
const UsuarioRepository = require("../repository/Usuario-Repository.js");

class MembroRepository{

    async queryBase(){
        let query =
        `SELECT
            id, nome, dataNasc,
            sexo, email, dpId,
            usuId, foto_membro
         FROM membro  `;

        return query;
    }

    async findAll(){
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

    async creater( req, res ){
        let objNewUsuario ={
            login: req.login,
            senha: req.senha,
            repeteSenha: req.repeteSenha
        }
        let query = queryBase;
        query += ` WHERE email = '${req.email}' `;

        let result = await querySync(query);

        if(result.length > 0){
            return result = {
                mensagem: "Não foi possivel registar esse membro, pois já existe alguém cadastrado com esse e-mal  " + result[0].email + " !",
                result: result
            }
        }else{
            let createUsuario = await UsuarioRepository.creater(objNewUsuario);
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


    async update( req, res ){}
    async destroy( req, res ){}

}

module.exports = new MembroRepository();