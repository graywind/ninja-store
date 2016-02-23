var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


client.indices.delete({
	index: 'ninjastore'
}, function (error, response) {
});



