const bcryptjs = require('bcrypt.js');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

class LoginController{
    async store(req, res){
        const {email, password} = req.body;
        const userExist = await User.findOne({email:email});
        if(!userExist){
            return res.status(401).json({
                error: true,
                code: 110,
                massage: "Error: Usuário nãoo encontrado!"
            })
        }
        if(!(await bcryptjs.compare(password, userExist.password))){
            return res.status(401).json({
                error: true, 
                code: 111,
                message: "Error: Senha inválida!"
            })
        }
        return res.json({
            user: {
                id: userExist._id,
                name: userExist.name,
                email: userExist.email
            }
        })
    }
}

module.exports  = new LoginController();