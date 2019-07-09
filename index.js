const express = require('express');
const router = require('./router');
const errorHandler = require('./utils/middlewares/errorHandler');
const {PORT} =require('./utils/constants');
require('./db/mongoose');

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT);
