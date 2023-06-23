require("dotenv").config();
const crypto = require("crypto");

const DATA_CRIPTO = {
    alg: process.env.VERBINHO_DB_ALG,
    pwd: process.env.VERBINHO_DB_PWD,
    tipo: process.env.VERBINHO_DB_TIPO,
    chaset: process.env.VERBINHO_DB_CHARSET,
}


class Config{

    Crypto(senha){
       const cipher = crypto.createCipher(DATA_CRIPTO.alg, DATA_CRIPTO.pwd);
       const crypterSenha = cipher.update(senha,DATA_CRIPTO.chaset, DATA_CRIPTO.tipo);

       return crypterSenha;
    }

    Decrypto(senha){
        const cipher = crypto.createDecipher(DATA_CRIPTO.alg, DATA_CRIPTO.pwd);
        const crypterSenha = cipher.update(senha,DATA_CRIPTO.chaset, DATA_CRIPTO.tipo);

        return crypterSenha;
    }
}

module.exports = new Config();