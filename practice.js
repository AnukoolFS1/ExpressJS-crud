const express = require('express');
const app = express();
const router = require('./router/router')
const PORT = 3000

app.use(express.json());

app.use('/hero', router)

app.listen(PORT, () => console.log(`Server initiated over port ${PORT}`))