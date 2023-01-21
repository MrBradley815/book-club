const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: 'http://localhost:8081'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database...')
  })
  .catch(() => {
    console.log('Cannot connect to the database')
    process.exit()
  })

app.get('/', (req, res) => {
  res.json({ message: "Welcome to the book club api" })
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`)
})