const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
app.get('/api/status', (req, res) => res.send({ status: 'Backend is running!' }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));