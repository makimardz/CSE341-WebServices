const express = require('express');
const app = express();

// Define a route that returns a name
app.get('/', (req, res) => {
  const name = 'Mardz Izech'; // return with the name of someone I know
  res.send(name);
});

// Start the server
const port = 3000; // You can change the port number if needed
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
