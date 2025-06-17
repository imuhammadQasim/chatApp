const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONN_STR);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => {
  console.log('MongoDB connected successfully');
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = db;