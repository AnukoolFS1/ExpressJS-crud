const express = require('express');
const app = express();
const path = require('path');
const PORT = 8000;
const routes = require('./router/route')

app.use(express.json()) //middleware
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', routes)

app.listen(PORT, () => console.log('server initiated'))