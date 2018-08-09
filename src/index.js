'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const apicallRoutes = require('./routes/apicall');

/*============================================================================
// HTTP methodology to import the Api Call and Contact routes.
============================================================================*/
app.use('/', apicallRoutes);

/*============================================================================
// Set port to 5000 and initiate Morgan logging functionality.
============================================================================*/
app.set('port', port);
app.use(morgan('dev'));

/*============================================================================
// Static route initiated for public files. These files include the
// post build files from Create React App.
============================================================================*/
app.use(express.static(path.join(__dirname, '/static')));

/*============================================================================
// Error handling.
============================================================================*/
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: {
			message: err.message
		}
	});
})

/*============================================================================
// Begin listenserver. The server port will be used by default, and 5000
// is used when run locally.
============================================================================*/
app.listen((process.env.PORT || 5000), function() {
  	console.log('Server is now running!');
})

module.exports = {app};
