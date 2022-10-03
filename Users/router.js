const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/', (req, res) => {
  res.send('Got a POST request')
})

router.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

module.exports = router
