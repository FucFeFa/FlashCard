const cardModel = require('../models/cardModel');

const addCard = async (req, res) => {
    
    try {
        const flashcardId = req.params.flashcardId;
        const { cardTerm, cardDefinition } = req.body;

        if(!cardTerm) {
            return res.status(400).json({ message: 'Missing card term' });
        }

        if(!cardDefinition) {
            return res.status(400).json({ message: 'Missing card description' });
        }

        await cardModel.addCard(flashcardId, cardTerm, cardDefinition);
        res.status(200).json({ message: 'Add card successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding card' });
    }
}

module.exports = {
    addCard,
};