const path = require('path');

const express = require('express');

const blogRoute = require('./routes/blog');
const db = require('./data/database');
const { urlencoded } = require('express');

const app = express();
const PORT = 4000;

// Set up view engine with EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(blogRoute);

db.connectToDatabase().then(
  app.listen(PORT, () => {
    `Listening on port ${PORT}`;
  })
);
