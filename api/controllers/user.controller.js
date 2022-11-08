const Users = require('../models/user.model')
const bcrypt = require('bcrypt')



function getAllUsers(req, res) {
    Users
        .find(req.query)
        .then((users) => res.json(users))
        .catch((err) => res.json(err))
}
function getUser(req, res) {
    Users
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch((err) => res.json(err))
}

function createUser(req, res) {
    Users.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.json(err))
}
function updateUser(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    Users.findByIdAndUpdate(req.params.id, req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
}
function deleteUser(req, res) {
    Users.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json(err))
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
