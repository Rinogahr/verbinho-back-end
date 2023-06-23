const LoginRepository = require("../repository/Login-Repository.js");

class LoginController{

    async Login(req, res){
        let resultBD = await LoginRepository.search(req.body);

        return  res.json({
            status: true,
            mensagem: `Usuário valido`, //texto de exemplo
            result: resultBD
        });
}
}


module.exports = new LoginController();