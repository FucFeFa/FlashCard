const db = require('../config/db');

// Model for flashCardSet

const flashCardModel = {
    // Add flashCardSet for new user
    addFlashCard: (userId, flashcardTitle, flashcardDescription) => {
        return db('flashcard_set').insert({
            user_id: userId,
            flashcard_title: flashcardTitle,
            flashcard_description: flashcardDescription
        });
    },
}

module.exports = flashCardModel;