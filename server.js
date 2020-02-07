const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const strainRoutes = require('./routes/strainRoutes');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/users', userRoutes);
server.use('/api/strains', strainRoutes);

module.exports = server;