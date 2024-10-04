const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users  = await userModel.getAllUsers();
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving users' });
    }
}

module.exports = {
    getAllUsers,
}