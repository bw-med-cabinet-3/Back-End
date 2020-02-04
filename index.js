const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))