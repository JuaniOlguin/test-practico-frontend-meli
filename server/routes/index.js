const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/api/items", (req, res) => {
	const query = req.query.q;
	const limit = req.query.limit;
	axios
		.get(`${process.env.ML_API_URL}/sites/MLA/search?q=${query}`)
		.then((response) => {
			const items = response.data.results.splice(0, limit);
			const categories = [];
			if (response.data.filters.length > 0) {
				response.data.filters
					.find((filter) => filter.id == "category")
					.values.forEach((category) => {
						category.path_from_root.forEach((path) => {
							categories.push(path.name);
						});
					});
			}
			const data = {
				author: {
					name: process.env.AUTHOR_NAME,
					lastname: process.env.AUTHOR_LASTNAME,
				},
				categories: categories,
				items: items.map((item) => {
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
						free_shipping: item.shipping.free_shipping,
						address: `${item.address.city_name}, ${item.address.state_name}`,
					};
				}),
			};
			res.send(data);
		})
		.catch(function (error) {
			console.log(error);
			res.status(400).send(error);
		});
});

router.get("/api/items/:id", (req, res) => {
	const productId = req.params.id;

	let description = "";
  let categories = [];
	axios
		.get(`${process.env.ML_API_URL}/items/${productId}`)
		.then((item) => {
      axios
        .get(`${process.env.ML_API_URL}/categories/${item.data.category_id}`)
        .then(category => {
          categories = category.data.path_from_root.map(cat => cat.name);
          axios
            .get(`${process.env.ML_API_URL}/items/${productId}/description`)
            .then((descr) => {
              description = descr.data.plain_text;
              const data = {
                author: {
									name: process.env.AUTHOR_NAME,
									lastname: process.env.AUTHOR_LASTNAME,
								},
                item: {
                  id: item.data.id,
                  title: item.data.title,
                  price: {
                    currency: item.data.currency_id,
                    amount: Math.floor(item.data.price),
                    decimals: Math.floor(item.data.price) - item.data.price,
                  },
                  picture: item.data.pictures[0].url,
                  condition: item.data.condition,
                  free_shipping: item.data.shipping.free_shipping,
                  sold_quantity: item.data.sold_quantity,
                  description: description,
                  categories
                },
              };
              res.send(data);
            })
            .catch((error) => {
              console.log(error);
              res.status(400).send(error);
            });
        })
        .catch((error) => {
					console.log(error);
					res.status(400).send(error);
				});
		})
		.catch((error) => {
			console.log(error);
			res.status(400).send(error);
		});
});

module.exports = router;
