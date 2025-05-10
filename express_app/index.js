const express = require('express');
const app = express();

// Import routes
const helloRoutes = require('./routes/hello');

// Use routes
app.use('/', helloRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
