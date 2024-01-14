const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/starships', async (req, res) => {
  try {
    const response = await axios.get('https://swapi.dev/api/starships/');
    const starships = response.data.results.map((starship) => {
        const {
          name,
          model,
          manufacturer,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          hyperdrive_rating,
          MGLT,
          films,
          pilots,
        } = starship;
  
        return {
          name,
          model,
          manufacturer,
          cost_in_credits,
          length,
          max_atmosphering_speed,
          crew,
          passengers,
          cargo_capacity,
          consumables,
          hyperdrive_rating,
          MGLT,
          films,
          pilots,
        };
      });
      
    res.json(starships);
  } catch (error) {
    console.error('Error fetching starships from SWAPI:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://192.168.0.36:${port}`);
});
