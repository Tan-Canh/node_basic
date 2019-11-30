const express = require('express');
const mongoose = require('mongoose');
const app = express();

const USER_ROUTER = require('./routes/User')

app.use(express.urlencoded({}))
app.use(express.json())

app.use('/users', USER_ROUTER)

const port = process.env.PORT || 3000;
const uri = 'mongodb://localhost:27017/demo-boss'

mongoose.connect(uri);
mongoose.connection.once('open', ()=>{
    app.listen(port, () => console.log('Server started at port 3000'));
})