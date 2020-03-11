const express = require('express')
const cors = require('cors')
const ip = require('ip')
const os = require('os')
const getId = require('docker-container-id')

const app = express()

app.use(cors())

app.get('/whoami', async (req, res) => {
  const cid = await getId()

  res.send({ message: `hi from ${ip.address()}, ${os.hostname()}, ${cid}` })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
