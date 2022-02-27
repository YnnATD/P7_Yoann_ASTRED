// import modules
const express = require('express')
const cors = require('cors')
const checkTokenMiddleware = require('./jsonwebtoken/check')

// import connexion DB
let DB = require('./db.config')

//  initialisation api
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// import module routage
const user_router = require('./routes/users.routes')
const auth_router = require('./routes/auth.routes')

// mise en place routage
app.get('/', (req, res) => res.send("i'm on"))

app.use('/users',checkTokenMiddleware, user_router)

app.use('/auth', auth_router)

app.get('*', (req, res) => res.status(501).send('WTF'))

// start server et test DB
DB.authenticate()
    .then(() => console.log('DB connected '))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`server is runing on ${process.env.SERVER_PORT} `);
        })
    }) 
    .catch(err=>console.log('DB error', err))