const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs')
const uuid = require('uuid')

const PORT = 3000;

const arr = [
    {
        id: 1,
        name: 'anukool',
        email: 'anukool@gmail.com',
        status: true
    }
]
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

app.get('/test', (req, res) => {
    res.status(200).json(arr)

    // res.send('<h1>hello</h1>')
    // fs.readFile(path.join(__dirname,'public','index.html'),(er,dat)=>{
    //     res.writeHead(200, {"Content-Type":"text/html"});
    //     res.end(dat)
    // })
})

app.get('/test', (req, res) => {
    res.status(200).json(arr)
})

app.get('/test/:name', (req, res) => {
    let name = req.params.name;
    let found = arr.some(e => e.name === name);
    if (found) {
        let render = arr.filter(e => e.name === name)
        res.status(200).json(render)
    } else {
        res.status(404).json({ msg: 'name not found' })
    }
})

app.post('/test', (req, res) => {
    let { name, email } = req.body;

    const newPerson = {
        id: uuid.v4(),
        name,
        email,
        status: true
    }

    arr.push(newPerson)

    res.status(200).json({ msg: 'new person added', arr })
})

app.delete('/test/delete/:name', (req, res) => {
    const delelte = req.params.name;

    let found = arr.some(e => e.name === delelte);
    if (found) {
        let render = arr.filter(e => {
           return e.name !== delelte
        })
        res.status(200).json(render)
    } else {
        res.status(404).json({ msg: 'name not found' })
    }

})

app.listen(PORT, () => console.log('server initiated'));