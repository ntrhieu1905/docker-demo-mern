const mongoose = require('mongoose');

const mongoUri = `mongodb://${process.env.MONGO_URI}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE_NAME}`;
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