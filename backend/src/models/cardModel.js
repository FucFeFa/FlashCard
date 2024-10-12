const db = require('../config/db');

// Model for card 

const cardModel = {
    // Add card
    addCard: (flashcardId, cardTerm, cardDefinition) => {
        return db('card').insert({
            flashcard_id: flashcardId,
            card_term: cardTerm,
            card_definition: cardDefinition
        });
    },
}

module.exports = cardModel;