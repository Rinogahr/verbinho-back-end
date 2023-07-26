const loginRepository = require("../repository/Login-Repository");

class LoginService  {

  async AuthService(request){
        let user = await loginRepository.Find(request.login); 

        
    }
}

module.exports = new LoginService();