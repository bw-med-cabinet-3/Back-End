const db = require('./db');

module.exports = {
    insertUser,
    getUsers,
    findUserByEmail,
    findUserByID,
    updateUser,
    getStrains,
    findStrain
}

function insertUser(user) {
    return db('Users')
        .insert(user);
}

function getUsers() {
    return db('Users');
}

function findUserByEmail(email) {
    return db('Users')
        .where('email', email)
        .first();
}

function findUserByID(id) {
    return db('Users')
        .where('user_id', id)
        .first();
}

function updateUser(id, updateUser) {
    return db('Users')
        .where('user_id', id)
        .update(updateUser)
}

function getStrains() {
    return db('Strains');
}

function findStrain(id) {
    return db('Strains')
        .where('strain_id', id)
        .first();
}