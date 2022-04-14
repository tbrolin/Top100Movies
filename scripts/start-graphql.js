const express = require('express')
const cors = require('cors')
const gq = require('../server/graphql')
const app = express()

const PORT = process.env.PORT || 4000

app.use(cors())
app.use('/graphql', gq)
app.listen(PORT)
console.info('Server running...')
