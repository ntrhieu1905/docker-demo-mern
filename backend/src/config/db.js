const mongoose = require('mongoose');

const mongoUri = 'mongodb://mern-mongo:27017/docker-demo-mern';
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connection database mongodb');
  })
  .catch((e) => {
    console.log(`Connection database error: ${e.message}`);
  });

const db = mongoose.connection;

module.exports = db;