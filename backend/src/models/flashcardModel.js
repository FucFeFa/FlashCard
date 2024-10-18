const db = require('../config/db');

// Model for flashCardSet

const flashCardModel = {
    // Add flashcard
    addFlashcard: (userId, flashcardTitle, flashcardDescription) => {
        return db('flashcard_set').insert({
            user_id: userId,
            flashcard_title: flashcardTitle,
            flashcard_description: flashcardDescription
        });
    },

    getUserFlashcard: (userId) => {
        return db('flashcard_set').select('*').where({ user_id: userId })
    }
}

module.exports = flashCardModel;