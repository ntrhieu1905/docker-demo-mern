const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

if (process.env.NODE_ENV != 'production') {
  dotenv.config({
    path: path.resolve(process.cwd(), '.env.development')
  });
}

const db = require('./config/db');
const router = require('./router');

const app = express();
const PORT = process.env.PORT || 6000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/v1', router);

console.log(process.env.APP_NAME);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
