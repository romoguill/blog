const path = require('path');

const express = require('express');

const blogRoute = require('./routes/blog');

const app = express();
const PORT = 4000;

// Set up view engine with EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(blogRoute);

app.listen(PORT, () => {
  `Listening on port ${PORT}`;
});
