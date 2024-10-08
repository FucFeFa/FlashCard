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

// Sign up
const signup = async (req, res) => {
    
    try{
        const { username, password, confirmPassword, email, date } = req.body;

        if (!username || !email || !password || !confirmPassword) {
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

        if(password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
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

// Sign in
const signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const getUsername = await userModel.getUsername(username)

        if (!getUsername) {
            return res.status(401).json({ message: 'Username is not exists' });
        }

        const getPassword = await userModel.getPassword(username)
        const match = await bcrypt.compareSync(password, getPassword)

        if(!match) {
            return res.status(401).json({ message: 'Wrong password' });
        } else {
            res.json({ message: 'Success' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error signing in' });
    }
}

module.exports = {
    getAllUsers,
    signup,
    signin,
}