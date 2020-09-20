const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
const posts = require('./routes/api/posts');

app.use('/', posts);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server started on port ${port}`));

