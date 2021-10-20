const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use('/api/v1/tasks', tasks);



const port = '5000';
app.listen(port, () => {
    console.log(`Port is listening on: ${port}`);
});