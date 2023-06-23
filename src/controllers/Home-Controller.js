const HomeRepository = require("../repository/Home-Repository.js");

class HomeController{


    async Home(){
        return await HomeRepository.Home();
    }
}

module.exports = new HomeController();