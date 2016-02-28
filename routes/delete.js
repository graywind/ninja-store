var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

exports.removeItem = function(req, res){
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
	console.log(req.body);
	res.redirect('/items')
	//res.end();
    }
};

