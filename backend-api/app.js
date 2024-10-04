const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/userRoute')

const app = express();

app.use(express.json());
app.use(cors());

userRoute.setup(app)


module.exports = app