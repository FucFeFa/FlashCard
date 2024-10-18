const flashcardModel = require('../models/flashcardModel');

const addFlashcard = async (req, res) => {
    
    try {
        const userId = req.params.userId;
        const { flashcardTitle, flashcardDescription } = req.body;

        if(!flashcardTitle) {
            return res.status(400).json({ message: 'Missing flashcard title' });
        }

        if(!flashcardDescription) {
            return res.status(400).json({ message: 'Missing flashcard description' });
        }

        await flashcardModel.addFlashcard(userId, flashcardTitle, flashcardDescription);
        res.status(200).json({ message: 'Flashcard added successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error adding flashcard' });
    }
}

const getUserFlashcard = async (req, res) => {
    try {
        const userId = req.params.userId;
        const flashcard = await flashcardModel.getUserFlashcard(userId);
        res.status(200).json({ data: flashcard });
    } catch (err) {
        console.error(error);
        res.status(500).json({ message: 'Error getting user flashcards' });
    }
}

module.exports = {
    addFlashcard,
    getUserFlashcard,
};