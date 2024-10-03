const express = require('express');
const uuid = require('uuid')
let data = require('../models/heros');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json(data)
})

router.post('/', (req, res) => {
    const { name, hero } = req.body;
    if (!name && !hero) {
        res.status(400).json({ msg: 'please fill all required fields' })
    } else {
        const newHero = {
            id: uuid.v4(),
            name,
            hero,
            status: true
        }

        data.push(newHero)

        res.status(200).json(data)
    }
})

router.put('/:name', (req, res) => {
    
    const newData = req.body;
    const heroName = req.params.name
    const found = data.some(e => {
        return e.hero = heroName
    })

    if (found) {
        const unProcHero = data.filter(e => e.hero === heroName)[0];

        for (const k in unProcHero) {
            for (const key in newData) {
                if (key === k) {
                    unProcHero[k] = newData[key];
                    break;
                }
            }
        }

        res.status(200).json({ msg: 'details have been changed', data })
    } else {
        res.status(400).json({ msg: `${heroName} is not available in the record` })
    }
})


router.delete('/delete/:name', (req, res) => {
    const hero = req.params.name;

    const find = data.some(e => e.hero === hero);
    if (find) {
        data = data.filter(e => e.hero !== hero);
        res.status(200).json({ msg: 'hero deleted successfuly', data })
    }
    else res.status(400).json({ msg: `${hero} not found in the database` })
})


module.exports = router