const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/api/items', (req, res) => {
    const query = req.query.q
    const limit = req.query.limit
    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(function (response) {
      const items = response.data.results.splice(0, limit);
      const categories = [];
      if(response.data.filters.length > 0){
        response.data.filters.find(filter => filter.id == 'category').values.forEach(category => {
          category.path_from_root.forEach(path => {
            categories.push(path.name)
          });
        });
      }
      const data = {
        author: {
          name: '',
          lastname: ''
        },
        categories: categories,
        items: items.map(item => {
          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: Math.floor(item.price),
              decimals: Math.floor(item.price) - item.price, 
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
          }
        })
      }
      res.send(data);

    })
    .catch(function (error) {
      console.log(error);
      res.status(400).send(error)

    })
    .finally(function () {
      // always executed
    });
});



module.exports = router;