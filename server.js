const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Express server listening');
});