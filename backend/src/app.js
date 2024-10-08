const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

// session
const session = require('express-session');
const crypto = require('crypto')
const secretKey = crypto.randomBytes(64).toString('hex');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:8080', 'http://localhost:3000'], // Cho phep ca 2 cong
    credentials: true // Cho phep gui cookie qua cac request
}));

app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        httpOnly: true, // Ngan chan truy cap JavaScript phia client
        maxAge: 1000 * 60 * 60 * 24, // Cookie ton tai trong 1 ngay
    }
}))

userRoute.setup(app)


module.exports = app