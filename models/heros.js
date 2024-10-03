const uuid = require('uuid')

let heros = [
    {
        id: uuid.v4(),
        name: 'bruce wayne',
        hero: 'Batman',
        status: true
    }, {
        id: uuid.v4(),
        name: 'Clark Kent',
        hero:'Superman',
        status: false
    }, {
        id: uuid.v4(),
        name: 'Barry',
        hero: 'Flash',
        status: true
    }
]

module.exports = heros;