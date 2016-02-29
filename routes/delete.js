var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

exports.removeItem = function(req, res){
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
	console.log(req.body);
	client.delete({
		index: 'ninjastore',
		type: 'ninjatype',
		id: req.body._method,
		refresh: true //needed to ensure reload reflects delete immediately
	}).then(function(error, response) {
		//TODO: AJAX call instead of lazy redirect
		res.redirect('/items')
	});
    }
};

