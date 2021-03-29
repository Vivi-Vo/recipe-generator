require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const url_base = 'https://api.spoonacular.com/recipes';

router.get('/:ingredients', (req, res) => {
  const params = new URLSearchParams({
  //  apiKey: process.env.VUE_APP_API_KEY,
  apiKey: "b51e4d59d50246cc93a8a0545843b45c",  
  ingredients: req.params.ingredients
  });
  const url = `${url_base}/findByIngredients?${params}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
      .then((data) => res.json(data))
});

router.get('/instructions/:id', (req, res) => {
  const id = req.params.id
  const params = new URLSearchParams({
  //  apiKey: process.env.VUE_APP_API_KEY,
  apiKey: "b51e4d59d50246cc93a8a0545843b45c",  
  }); 

  const url = `${url_base}/${id}/information?${params}`;
  fetch(url).then((res) => res.json()).then(data => res.json(data))
});

module.exports = router; 