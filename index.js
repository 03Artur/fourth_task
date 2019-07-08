const express = require('express');
const router = require('./router');
require('./db/mongoose');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(router);
app.use((err, req, res) => {
    if (!err.code) {
        res.state(500).send(err.message);
    } else {
        res.state(err.code).send(err.message);
    }
});

app.listen(PORT);
