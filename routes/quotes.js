const express = require('express');
const quotes = require('../modules/quotes-module')
const router = express.Router();
const fetch = require('node-fetch');

router.get("/:keyword",(req,res) => {
    let keyWord = req.params.keyword
    let quote = quotes.quotes.findQuote(keyWord);
    let body = {
        quote : quote
    }
    res.json(body);
})

router.post("/find/:keyword",(req,res) => {
    let keyWord = req.params.keyword
    let quote = quotes.quotes.findQuote(keyWord);
    let body = {
        quote : quote
    }
    fetch('https://httpbin.org/post', {
            method: 'POST', 
            body: JSON.stringify(body),
    })
    .then(res => res.json())
    .then(json => res.send(json.json));
})



 


module.exports = router;