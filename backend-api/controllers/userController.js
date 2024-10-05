const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

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

// Signup
const signup = async (req, res) => {
    
    try{
        const { username, password, email, date } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const existUsername = await userModel.getUsername(username);
        const existEmail = await userModel.getEmail(email);

        if(existUsername ){
            return res.status(400).json({ message: 'Username already exists'});
        }

        if(existEmail){
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.signup(username, hashedPassword, email, date);
        res.json(user);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Error signing up' });
    }
}

module.exports = {
    getAllUsers,
    signup,
}