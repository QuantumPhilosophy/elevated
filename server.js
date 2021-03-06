'use strict'

require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const db = require('./models')
const passport = require('./config/passport')
const app = express()
const PORT = process.env.PORT || 3030

// Middleware
app.use(express.urlencoded({
  extended: false
}))
app.use(express.json())
app.use(express.static('public'))

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// Handlebars
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

// Routes
require('./routes/authRoutes')(app)
require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

const syncOptions = {
  force: false
}

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    )
  })
})

module.exports = app
