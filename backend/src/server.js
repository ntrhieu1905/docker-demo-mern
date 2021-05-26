const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./config');
const router = require('./router');

const app = express();
const PORT = 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
