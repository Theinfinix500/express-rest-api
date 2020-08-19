require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Middlewares

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postsRoutes);

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello ali!');
});

//Connect to DB
mongoose.connect(
  'mongodb+srv://theinfinix500:anaali123.0@cluster0.2i8vw.mongodb.net/test',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);

//Start listening
app.listen(3000);
