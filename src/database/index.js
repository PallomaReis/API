const mongoose =  require('mongoose');

class Database {
    constructor(){
        this.mongoDataBase();
    }
    mongoDataBase(){
        mongoose.connect('mongoose://localhost/api', {
            useNewUrlParser: true,
        }).then(()=>{
            console.log("Sucess: Conexão com o MongoDb realizado com sucesso!");
        }).catch((error)=>{
            console.log("Erro: conexão com o MongoDb não foi realizado com sucesso!" + error);
        });
    }
}

module.exports = new Database();