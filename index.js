const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/tasks', tasks);



const port = '5000';
const start = async () =>{
try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => { console.log(`Port is listening on: ${port}`); });
} catch (error) {
    console.log(error);
}
};

start();