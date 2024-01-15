const axios = require('axios')
const { Router } = require('express')
const router = new Router()

const swapiUrl = process.env.SWAPI_URL;

async function fetchAll(currentPage, searchTerm) {
  const response = await axios.get(`https://${swapiUrl}/api/starships/?page=${currentPage}&search=${searchTerm}`);
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
        starship_class,
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
        starship_class,
        films,
        pilots,
      };
    });

  return starships;
}


router.get('/api/starships', (req, res) => {
  let page = req.query.page || 1
  const searchTerm = req.query.search;

  const data = fetchAll(page, searchTerm)
      .then(values => {
          res.json(values);
      })
}) 

module.exports = router