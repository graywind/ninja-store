var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


var body1 = { shortName: 'SKN', name:'Shuriken', price:100 };
var body2 = { shortName: 'ASK', name:'Ashiko', price:690 };
var body3 = { shortName: 'CGI', name:'Chigiriki', price:250 };
var body4 = { shortName: 'NGT', name:'Naginata', price:900 };
var body5 = { shortName: 'KTN', name:'Katana', price:1000 };

client.index({
	index: 'ninjastore',
	type: 'ninjatype',
	body: body1
}, function (error, response) {
});

client.index({
	index: 'ninjastore',
	type: 'ninjatype',
	body: body2
}, function (error, response) {
});

client.index({
	index: 'ninjastore',
	type: 'ninjatype',
	body: body3
}, function (error, response) {
});

client.index({
	index: 'ninjastore',
	type: 'ninjatype',
	body: body4
}, function (error, response) {
});

client.index({
	index: 'ninjastore',
	type: 'ninjatype',
	body: body5
}, function (error, response) {
});



