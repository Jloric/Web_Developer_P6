const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./route/user.route')
const saucesRoutes = require('./route/sauce.route')
const path =require('path');



mongoose.connect('mongodb+srv://master:ua2peausfjP8HgoS@cluster0.0hrae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log(err),console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images',express.static(path.join(__dirname,'images')));


app.use('/api/auth',userRoutes);
//app.use('/api/sauces',saucesRoutes);

module.exports = app;
