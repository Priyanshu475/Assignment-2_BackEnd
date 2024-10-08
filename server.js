require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const weatherSummaryRoutes = require('./routes/weatherSummaryRoutes');

// express app
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json())


// calling apis 
app.use('/api/weather-summary', weatherSummaryRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
