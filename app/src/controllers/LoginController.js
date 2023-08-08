const LoginService = require('../service/LoginService');

class loginController{

    async login(req, res){
        let resultBD = await LoginService.AuthService(req.body);
        return  res.send(resultBD);
}
}


module.exports = new loginController();