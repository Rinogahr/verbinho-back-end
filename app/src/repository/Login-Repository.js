require("dotenv").config();
const QueryBase = require("../middlewares/queryBase");
const {querySync} = require("../../../mysql/connection");
const config = require("../middlewares/Config");
const jwt = require("jsonwebtoken");

class loginRepository{

    async search(req, res){
        let result = {};
        let senha = config.crypto(req.senha);
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


module.exports = new loginRepository();