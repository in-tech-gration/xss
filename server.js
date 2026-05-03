const express = require('express');
const session = require('express-session');
const app = express();

// This serves the index.html file to the browser.
app.use(express.static('public'));

const PORT = 3000;

// Sessions are used by web applications to remember data about specific users.
// This is how when you login to a website, it remembers you for a while.
app.use(session({
  secret: 'some randomly generated secret',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: false,
    secure: false
  }
}));

// Start listening to requests on the local machine at port 3000.
app.listen(PORT, function () {
  console.log(`Server listening at http://localhost:${PORT}`);
});
