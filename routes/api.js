const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')
const auth = require('../middlewares/auth')

router.get('/', function(req, res) {
    res.status(200).json({message: 'Hello World!', status: 'Connected to API Route'})
})

router.get('/users', auth, UserController.getUsers)

router.post('/create/user', auth, UserController.createUser)


module.exports = router