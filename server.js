const express = require('express');
const app = express();

// Secret key to avoid logging random visitors
const SECRET_KEY = 'mySecretTestKey';

app.get('/', (req, res) => {
  const key = req.query.key;

  if (key === SECRET_KEY) {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    console.log('Test visit IP:', ip);
  }

  // Redirect regardless of logging
  res.redirect('https://example.com');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
