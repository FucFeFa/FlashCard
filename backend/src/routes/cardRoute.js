const express = require('express')
const cardController = require('../controllers/cardController')

const router = express.Router()


module.exports.setup = (app) => {
    
    app.use('/api/v1/card', router)

    router.post('/create/:flashcardId', cardController.addCard)

}
