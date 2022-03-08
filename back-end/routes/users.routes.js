// import des modules
const express = require('express')
const userCtrl = require('../controllers/user.controllers')
const checkTokenMiddleware = require('../jsonwebtoken/check')

// recuperation router express
let router = express.Router()

// Middleware pour logger dates de requete
router.use( (req, res, next) => {
    const event = new Date()
    console.log('User Time:', event.toString())
    next()
})

// routage ressource User
router.get('/',checkTokenMiddleware, userCtrl.getAllUsers)

router.get('/:id',checkTokenMiddleware, userCtrl.getUser)

router.put('', userCtrl.addUser)

router.patch('/:id',checkTokenMiddleware, userCtrl.updateUser)

router.post('/untrash/:id',checkTokenMiddleware, userCtrl.untrashUser)

router.delete('/trash/:id',checkTokenMiddleware, userCtrl.trashUser)
    
router.delete('/:id',checkTokenMiddleware, userCtrl.deleteUser)

module.exports = router