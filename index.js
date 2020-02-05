const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const strainRoutes = require('./routes/strainRoutes');
const seedDB = require('./data/seedHelper');

const server = express();
server.use(express.json());
server.use(cors());

server.use('/api/users', userRoutes);
server.use('/api/strains', strainRoutes);

server.get('/seed', (req, res) => {
    seedDB.getData()
    .then(data => {
        const convertData = data.map((strain, index) => {
            return {
                strain_id: index + 1,
                strain_name: strain.Strain,
                strain_type: strain.Type,
                strain_rating: strain.Rating,
                strain_description: strain.Description,
                strain_effects: strain.Effects,
                strain_flavors: strain.Flavor
            }
        });
        res.send(convertData.slice(142, 284));
    });
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))