const db = require('../config/db');

//Model for user 
const userModel = {
    getAllUsers: () => {
        return db('users').select('*')
    }
}

module.exports = userModel;