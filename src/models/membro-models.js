const con = require("../mysql/connection");
const { json } = require("express");


module.exports = {
     listMembros : con.query(`SELECT * FROM membro`, ( error, query) => {
        if(error){
            return JSON.stringify(error);
            console.log("error > ", error);
        }else{
            return JSON.stringify(query)
            console.log("query > ", (JSON.stringify(query)));
        }
     })
}