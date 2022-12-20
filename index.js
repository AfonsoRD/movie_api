const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use(express.static('public'));

let topTenMovies = [];

app.get('/', (req, res) => {
  res.send('Welcome to myFlix APP!');
});

app.get('/movies', (req, res) => {
  res.json(topTenMovies);
});

app.get('/documentation', (req, res) => {
  res.sendFile('public/documentation.html', { root: __dirname });
});

// ERROR Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

//Listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
