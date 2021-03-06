// import des modules
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.models.js')

// Routage de la ressource Auth
exports.login = (req, res) => {
    const { email, password } = req.body

    // Validation des données reçues
    if (!email || !password) {
        return res.status(400).json({ message: 'Bad email or password' })
    }

    User.findOne({ where: { email: email }, raw: true })
        // Vérification si l'utilisateur existe
        .then(user => {
            if (user === null) {
                return res.status(401).json({ message: 'This account does not exists !' })
            }
            // Vérification du mot de passe
            bcrypt.compare(password, user.password)
                .then(test => {
                    if (!test) {
                        return res.status(401).json({ message: 'Wrong password' })
                    }

                    // Génération du token et envoi
                    const token = jwt.sign({
                        id: user.id,
                        nom: user.nom,
                        prenom: user.prenom,
                        email: user.email
                    }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_DURING })

                    return res.json({ access_token: token })

                })
                .catch(err => res.status(500).json({ message: 'Login process failed', error: err }))
        })
        .catch(err => res.status(500).json({ message: 'Database Error', error: err }))
}
