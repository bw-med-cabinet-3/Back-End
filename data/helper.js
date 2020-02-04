const db = require('./db');

module.exports = {
    insertUser,
    getUsers,
    findUser,
    insertStrain
}

function insertUser(user) {
    return db('Users')
        .insert(user);
}

function getUsers() {
    return db('Users');
}

function findUser(email) {
    return db('Users')
        .where('email', email)
        .first();
}

function insertStrain(strain) {
    return db('Strains')
        .insert(strain);
}