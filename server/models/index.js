import { url } from '../config/db.config.js'
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = {}

db.mongoose = mongoose
db.url = url
db.users = require('./user.model.js').default(mongoose)

module.exports = db