const express = require('express')
const ip = require('ip')
const os = require('os')
const getId = require('docker-container-id')

const app = express()

app.get('/whoami', async (req, res) => {
  const cid = await getId()

  res.send({ message: `hi from ${ip.address()}, ${os.hostname()}, ${cid}` })
})

app.get('/large', (req, res) => {
  const payload = []

  for (let i = 0; i < 10000; i++) {
    payload.push({
      id: i,
      body: 'this is a string'
    })
  }

  res.send({ payload })
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
