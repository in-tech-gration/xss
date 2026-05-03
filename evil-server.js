const express = require('express');
const app = express();
const PORT = 3001;

app.use(function (req, res, next) {
  // Allows CORS requests:
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/cookie', function (req, res, next) {
  console.log('GET /cookie');
  console.log(req.query.data);
  res.send('Thanks!');
});

app.get('/keys', function (req, res, next) {
  console.log('GET /keys');
  console.log(req.query.data);
  res.send('I\'ll try to remember that..');
});

app.listen(PORT, function () {
  console.log(`"Evil" server listening at http://localhost:${PORT}`);
});
