require("dotenv").config();
const QueryBase = require("../middlewares/queryBase");
const {querySync} = require("../../../mysql/connection.js");
const config = require("../middlewares/Config");
const jwt = require("jsonwebtoken");

class loginRepository{

    queryBase(){
        let query =
        `SELECT
            id, login, senha
        FROM usuario `;

        return query;
    }

    // async search(req, res){
    //     let result = {};
    //     let senha = config.crypto(req.senha);
    //     let query = QueryBase.AllRegister();
    //     query += ` AND login = '${req.login}' AND senha = '${senha}' AND dpId = '${req.departamento}'`;

    //     try {
    //         let resultbd = await querySync(query);

    //         if(resultbd.length > 0){
    //           let token = jwt.sign({resultbd}, process.env.VERBINHO_JWT_KEY,{expiresIn: 600});
    //           return token;
    //         }else{
    //             return result = {
    //                 error: true,
    //                 mensagem: "Não foi encontrado registros com esses parametros"
    //             }
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }

    // }

    async Find(login){
        try {
            let query = this.queryBase();
            query += ` WHERE login = '${login}'`;
       
            return await querySync(query); 
        } catch (error) {
            return error;
        }
    }

}


module.exports = new loginRepository();