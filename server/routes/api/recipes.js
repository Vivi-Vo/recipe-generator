require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const url_base = 'https://api.spoonacular.com/recipes';

router.get('/:ingredients', (req, res) => {
    const params = new URLSearchParams({
    apiKey: process.env.VUE_APP_API_KEY,
    ingredients: req.params.ingredients
  });
  console.log(params.apiKey)
  const url = `${url_base}/findByIngredients?${params}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => res.json(data))
});

router.get('/instructions/:id', (req, res) => {
  const id = req.params.id
  const params = new URLSearchParams({
    apiKey: process.env.VUE_APP_API_KEY,
    ranking: 2
  });

  const url = `${url_base}/${id}/information?${params}`;
  fetch(url).then((res) => res.json()).then(data => res.json(data))
});

module.exports = router;
