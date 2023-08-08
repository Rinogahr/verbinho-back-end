const homeRepository = require("../repository/HomeRepository.js");

class homeController{


    async home(){
        return await homeRepository.home();
    }
}

module.exports = new homeController();