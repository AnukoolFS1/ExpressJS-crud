const express = require('express');
const routes = express.Router();
let tech = require('../models/data')


// Get method - (retieve to read)
routes.get('/', (req, res) => {
    res.status(200).json(tech)
})


// Post Method - (create)
routes.post('/', (req, res) => {
    const { name, developer } = req.body;
    const newTech = { name, developer };

    tech.push(newTech);

    res.status(200).json(tech)
})

// Put method - (edit)
routes.put('/:name', (req, res) => {
    const name = req.params.name;
    const found = tech.some(e => e.name === name);
    
    if (found) {
        let reWrite = tech.filter(e => {
            return e.name === name
        })[0];

        for (let keys in reWrite) {
            if (keys === Object.keys(req.body)[0]) {
                reWrite[keys] = Object.values(req.body)[0];
                break;
            }
        }

        res.status(200).json({ msg: `${name} has been edited successfully`, tech })
    } else {
        res.status(200).json({ msg: `${name} not found` })
    }
})

// Delete method - (delete!)
routes.delete('/delete/:name', (req, res) => {
    let { name } = req.params;
    let found = tech.some(e => {
        return e.name === name
    })
    if (found) {
        tech = tech.filter(e => {
            return e.name !== name
        });
        res.status(200).json({ msg: 'tech deleted successfully', tech })
    } else {
        res.status(404).json({ msg: 'tech not found' })
    }
})


module.exports = routes;