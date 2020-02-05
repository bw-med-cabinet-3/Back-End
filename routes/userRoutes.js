const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../data/helper');
const restricted = require('../auth/restricted');

const router = express.Router();

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    db.insertUser(user)
        .then(saved => res.status(201).json(saved))
        .catch(error => res.status(500).json(error))
});

router.post('/login', (req, res) => {
    let {email, password} = req.body;

    db.findUserByEmail(email)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.first_name}`,
                    token,
                    user
                })
            } else {
                res.status(401).json({message: 'Incorrect email or password'})
            }
        })
        .catch(() => res.status(500).json({message: 'error occured'}))
});

router.put('/:id/email', restricted, (req, res) => {
    const id = req.params.id;

    if(req.body.email) {
        db.findUserByID(id)
            .then(user => {
                const updateUser = {
                    ...user,
                    email: req.body.email
                }
                db.updateUser(id, updateUser)
                    .then(() => res.sendStatus(204));
            })
    } else {
        res.status(400).json({message: 'please provide an email to update with'});
    }
});

function generateToken(user) {
    const payload = {
        subject: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name
    }

    const tokenSecret = process.env.JWT_SECRET || '1505DD2604A3609761740BAE8BA63CCF567A88B2A4222B68B1EB6DC2EC7E524B';

    const options = {
        expiresIn: '1h',
    };

    return jwt.sign(payload, tokenSecret, options);
}

module.exports = router;