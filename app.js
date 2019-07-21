const express = require('express')
const app = express()
const port = process.env.PORT;

const path = require('path')

app.get('/', (req, res) => res.send('Hello World!'))

const absolutePath = path.resolve(__dirname, 'index.html')
console.log(absolutePath)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))