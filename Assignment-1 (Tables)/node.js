const express = require('express');
const app = express();
const port = 8080;  // Change to a safe port

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
