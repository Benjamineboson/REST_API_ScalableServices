const quotes = require('find-quote');

function findQuote (keyWord){
    return quotes.getQuote(keyWord) === "" ? "No quote found" : quotes.getQuote(keyWord);
}
exports.quotes = {findQuote};