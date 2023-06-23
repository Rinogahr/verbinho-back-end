const UsuarioUploadImgRepository = require("../repository/UsuarioUploadImg-Repository.js");

class UsuarioUploadImgController{

    async UploadFoto(){

        let img = single('img');

        return await  UsuarioUploadImgRepository.storage(img);
    }

}

module.exports = new UsuarioUploadImgController();