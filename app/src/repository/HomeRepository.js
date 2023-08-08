const {querySync} = require("../../../mysql/connection");

class homeRepository{

    async Home(req, res){
        const authContent = req.header.token;

    }

}


module.exports = new homeRepository();