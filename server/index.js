const express = require('express');
const cors = require('cors');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
const recipes = require('./routes/api/recipes');

app.use(cors());

app.use('/', serveStatic(path.join(__dirname, '/client/dist')))
app.use('/recipe', recipes);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

