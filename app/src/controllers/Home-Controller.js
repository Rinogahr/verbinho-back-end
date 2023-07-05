const homeRepository = require("../repository/Home-Repository.js");

class homeController{


    async home(){
        return await homeRepository.home();
    }
}

module.exports = new homeController();