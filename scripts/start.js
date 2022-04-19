const express = require('express')
const cors = require('cors')
const path = require('path')
const gq = require('../server/graphql')
const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())
app.use('/graphql', gq)
app.use(express.static(path.join(__dirname, '../build')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(PORT)
console.info('Server running...')
