const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const port = process.env.PORT || 3000

require('dotenv').config()

//Connect mongodb via mongoose
const db = process.env.DB_MONGO
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err)
     console.error(err)
  else
     console.log("Connected to the mongodb") 
});

//Routes
const indexRoute = require('./routes/index')
const apiRoute = require('./routes/api')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Cors 
//Open x-auth-token for auth
const corsOptions = {
    exposedHeaders: 'x-auth-token',
  };
app.use(cors(corsOptions))

app.use('/', indexRoute)
app.use('/api', apiRoute)

app.listen(port, function(){
    console.log('connected to port ' + port)
})