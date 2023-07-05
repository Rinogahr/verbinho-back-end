const loginRepository = require("../repository/Login-Repository.js");

class loginController{

    async login(req, res){
        let resultBD = await loginRepository.search(req.body);

        return  res.json({
            status: true,
            mensagem: `Usuário valido`, //texto de exemplo mudar depois
            result: resultBD
        });
}
}


module.exports = new loginController();