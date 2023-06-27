const usuarioUploadImgRepository = require("../repository/UsuarioUploadImg-Repository.js");

class usuarioUploadImgController{

    async uploadFoto(){

        let img = single('img');

        return await  usuarioUploadImgRepository.storage(img);
    }

}

module.exports = new usuarioUploadImgController();