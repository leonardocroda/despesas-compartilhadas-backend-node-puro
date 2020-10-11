const express = require('express');
const app = express();
const router = require('./routes');
require('./database');

app.use(express.json());
app.use(router);

app.listen(3030, '0.0.0.0');
