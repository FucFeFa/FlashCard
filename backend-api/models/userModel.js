const db = require('../config/db');


//Model for user 
const userModel = {
    getAllUsers: () => {
        return db('users').select('*');
    },

    getUsername: (username) => {
        return db('users').where({ user_username: username }).first();
    },

    getEmail: (email) => {
        return db('users').where({ user_email: email }).first();
    },
    
    signup: (username, password, email, date) => {
        return db('users').insert({
            user_fullname: username,
            user_username: username,
            user_password: password,
            user_email: email,
            user_date_signup: date
        })
    }
}

module.exports = userModel;