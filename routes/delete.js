var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});



exports.removeItem = function(req, res){
	function myawesome() {
		console.log ("I finished!");
		res.redirect('/items');
	}
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
	console.log(req.body);
	client.delete({
		index: 'ninjastore',
		type: 'ninjatype',
		id: req.body._method,
		refresh: true
	},myawesome)/*.done(function(error, response) {
		//res.render('items', { title: 'Ninja Store - Items', username: req.session.username, items:items })
		//TODO: AJAX call instead of lazy redirect
		res.redirect('/items')
	});*/

	//TODO: AJAX call instead of lazy redirect
	//res.redirect('/items')
	//res.end();
    }
};

