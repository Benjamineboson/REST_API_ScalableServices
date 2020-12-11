const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const quotes = require('./routes/quotes')
const app = express();
const PORT = process.env.port || 3000;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/quotes',quotes);

app.listen(PORT,()=>{
    console.log('listening on '+PORT)
});