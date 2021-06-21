const User = require('../models/User')

class UserController {

    static getUsers(req, res) {

        User.find()
            .then(function(users) {
                res.status(200).json({message: "success", data: users})
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

    static createUser(req, res) {

        let obj = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        }

        User.create(obj)
            .then(function(user) {
                res.status(200).json({message: "success", data: user})
            })
            .catch(function(error){
                res.status(500).json({
                    message: "Internal Server Error",
                    error: error.message
                })
            })
    }

}

module.exports = UserController