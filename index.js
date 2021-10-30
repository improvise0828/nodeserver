const express = require('express');
const cors = require('cors')
const fs = require('fs');

const app = express();
const PORT = 80;

const whitelist = ['http://localhost:3000', 'http://localhost:3001', 'http://freedevfree.cf', 'https://freedevfree.cf'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get('/users', function(req, res) {
  res.send('hello world! this is endpoint /users');
});

app.get('/cookie', function(req, res) {
  res.cookie('TestCookie', 'This is cookie for test', {
    maxAge: 10000,
    secure: true,
  });
  res.send('hello world! this is endpoint /cookie');
});

app.get('/', function(req, res) {
  res.send('hello world! this is endpoint /');
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});