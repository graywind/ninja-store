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
		id: req.body._method
	}).then(function() {
		//res.render('items', { title: 'Ninja Store - Items', username: req.session.username, items:items })
		//TODO: AJAX call instead of lazy redirect
		res.redirect('/items')
	});

	//TODO: AJAX call instead of lazy redirect
	//res.redirect('/items')
	//res.end();
    }
};

