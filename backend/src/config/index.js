const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/docker-demo-mern';
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