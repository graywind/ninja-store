// our 'database'
var elasticsearch = require('elasticsearch'); 

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  //log: 'trace'
});

/*
function searchit(){
client.search({
  q: '*',
  index: 'ninjastore'
}).then(function (body) {
	return body.hits.hits;
}, function (error) {
  console.trace(error.message);
});
};
*/

exports.home = function(req, res){
    // if user is not logged in, ask them to login
    if (typeof req.session.username == 'undefined') {
	res.render('home', { title: 'Ninja Store'});
	}
    // if user is logged in already, take them straight to the items list
    else res.redirect('/items');
};

// handler for form submitted from homepage
exports.home_post_handler = function(req, res) {
    // if the username is not submitted, give it a default of "Anonymous"
    username = req.body.username || 'Anonymous';
    // store the username as a session variable
    req.session.username = username;
    // redirect the user to homepage
    res.redirect('/');
};

// handler for displaying the items
exports.items = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    //else res.render('items', { title: 'Ninja Store - Items', username: req.session.username, items:items });
    else {
	var items; 
	client.search({
	  q: '*',
	  index: 'ninjastore'
	}).then(function (body) {
		items = body.hits.hits;
	}, function (error) {
	  console.trace(error.message);
	}).then(function() {
		res.render('items', { title: 'Ninja Store - Items', username: req.session.username, items:items })
	});
    };

};

// handler for displaying individual items
exports.item = function(req, res) {
    // don't let nameless people view the items, redirect them back to the homepage
    if (typeof req.session.username == 'undefined') res.redirect('/');
    else {
	var item;
	client.get({
	  id: req.params.id,
	  index: 'ninjastore',
	  type: 'ninjatype'
	}).then(function (body) {
		item = body;
		console.log(item);
		console.log(item);
		console.log(item._source);
		console.log(item._source);
		console.log(item._source.name);
		console.log(item._source.price);
	}, function (error) {
	  console.trace(error.message);
	}).then(function() {
		console.log("I ran!");
	        res.render('item', { title: 'Ninja Store - ' + 'name', username: req.session.username, name: item._source.name, price:item._source.price });
		console.log("Me too!");
	});
    }
};

// handler for showing simple pages
exports.page = function(req, res) {
    var name = req.query.name;
    var contents = {
        about: 'Ninja Store sells the coolest ninja stuff in the world. Anyone shopping here is cool.',
        contact: 'You can contact us at <address><strong>Ninja Store</strong>,<br>1, World Ninja Headquarters,<br>Ninja Avenue,<br>NIN80B7-JP,<br>Nihongo.</address>'
    };
    res.render('page', { title: 'Ninja Store - ' + name, username: req.session.username, content:contents[name] });
};
