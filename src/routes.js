const { Router} = require('express');

const UserController = require('./app/controllers/UserController');
const LoginController = require('./app/controllers/LoginController');

const routes = new Router();
//Conexão com o banco de dados

/*routes.get('/insert', async(req, res) =>{
    await User.create({
        name: 'Palloma',
        email: 'pallomapilin@gmail.com',
        password: '123'
    }), function(error, User){
        if(error) return res.status(400).json({message: "Erro: Usuário não foi cadastrado!"})
        return res.status(200).json({
            message: "Success: Usuário cadastrado com sucesso!"
        });
    }
});*/

routes.post('/users', UserController.store);
routes.post('/users/:id', UserController.delete);
routes.post('/login', LoginController.store);

routes.get('/', (req, res) =>{
    let name = "Palloma, tudo bem ?!";
    res.send(`Hello World ${name}!`);
})

module.express = routes;