const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

// session
const session = require('express-session');
const crypto = require('crypto')
const secretKey = crypto.randomBytes(64).toString('hex');

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

userRoute.setup(app)


module.exports = app