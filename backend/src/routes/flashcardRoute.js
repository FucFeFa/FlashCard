const express = require('express')
const flashcardController = require('../controllers/flashcardController')

const router = express.Router()


module.exports.setup = (app) => {
    
    app.use('/api/v1/flashcard', router)

    // Create library
    router.post('/create/:userId', flashcardController.addFlashcard)

    // Get all flashcards by user
    router.get('/data/:userId', flashcardController.getUserFlashcard)
}
