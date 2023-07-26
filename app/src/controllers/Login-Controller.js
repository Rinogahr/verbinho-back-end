const LoginService = require('../service/Login-Service');

class loginController{

    async login(req, res){
        let resultBD = await LoginService.AuthService(req.body);
        return  res.send(resultBD);
}
}


module.exports = new loginController();