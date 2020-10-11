const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const recipes = require('./routes/api/recipes');
app.use('/recipe', recipes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));

