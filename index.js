const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));
app.use('/documentation.html', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/documentation', (req, res) => {
  res.send('This is a secret url with super top-secret content.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080');
});
