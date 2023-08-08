const usuarioUploadImgRepository = require("../repository/UsuarioUploadImgRepository.js");

class usuarioUploadImgController{

    async uploadFoto(req, res, next){

        if (!req.file) {
            return res.status(400).json({ error: 'Nenhuma imagem selecionada para upload.' });
          }
        
          const imageUrl = req.file.filename;
    
          return imageUrl;

        //return await  usuarioUploadImgRepository.storage(img);
    }

}

module.exports = new usuarioUploadImgController();