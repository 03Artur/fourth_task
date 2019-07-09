const express = require('express');
const router = require('./router');
const {ApplicationError} = require('./utils/errors');
require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);


app.use((err, req, res, next) => {
    if (err instanceof ApplicationError) {
        res.status(err.status).send(err.message);
    } else {
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT);
