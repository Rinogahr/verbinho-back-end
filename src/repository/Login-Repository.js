require("dotenv").config();
const QueryBase = require("../middlewares/queryBase.js");
const {querySync} = require("../../mysql/connection.js");
const Config = require("../middlewares/Config.js");
const jwt = require("jsonwebtoken");

class LoginRepository{

    async search(req, res){
        let result = {};
        let senha = Config.Crypto(req.senha);
        let query = QueryBase.AllRegister();
        query += ` AND login = '${req.login}' AND senha = '${senha}' AND dpId = '${req.departamento}'`;

        try {
            let resultbd = await querySync(query);

            if(resultbd.length > 0){
              let token = jwt.sign({resultbd}, process.env.VERBINHO_JWT_KEY,{expiresIn: 600});
              return token;
            }else{
                return result = {
                    error: true,
                    mensagem: "Não foi encontrado registros com esses parametros"
                }
            }
        } catch (error) {
            console.error(error);
        }

    }

}


module.exports = new LoginRepository();