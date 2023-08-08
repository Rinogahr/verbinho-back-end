const loginRepository = require("../repository/LoginRepository");

class LoginService  {

  async AuthService(request){
        let user = await loginRepository.Find(request.login); 

        
    }
}

module.exports = new LoginService();