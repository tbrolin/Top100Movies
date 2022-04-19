const express = require('express')
const cors = require('cors')
const gq = require('./graphql')
const app = express()

const GQL_PORT = process.env.GQL_PORT || 4000

app.use(cors())
app.use('/graphql', gq)
app.listen(GQL_PORT)
console.info('Server running...')