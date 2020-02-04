const seed = require('./seedDB');

module.exports = {
    getData,
    uniType,
    uniEffect
}

function getData() {
    return seed('cannabis')
}

function uniType() {
    return seed('cannabis')
        .distinct('Type');
}

function uniEffect() {
    return seed('cannabis')
        .distinct('Effects');
}