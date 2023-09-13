const express = require('express');
const router = require('./routes/router');
const cors = require('cors');
const app = express();

app.use(express.json({limit: '10mb'}));
app.use(cors());
app.use(router);

app.listen(3000, () => {
    console.log('Server is running!');
});
