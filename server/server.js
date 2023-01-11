const express = require('express')

const app = express()
const port = 3000

app.get('/api/book-club', (req, res) => {
  res.send('<h1>The Reading Dead Book Club</h1>')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`)
})