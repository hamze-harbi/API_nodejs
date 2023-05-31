const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => res.send('hello, Express, number'))

app.listen(port, () => console.log('Notre Application node est demarre sur http://localhost::{port}'))