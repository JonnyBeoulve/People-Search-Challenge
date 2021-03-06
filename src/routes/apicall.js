const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const request = require('request');

router.use(bodyParser.json());

/*============================================================================
// Upon the client performing a fetch from the DataFinder API, the Node
// Express server will perform the get request before sending the response
// back to the client. All three parameters are passed in from state as
// request query parameters.
============================================================================*/
router.get('/peoplesearch', function(req, res, next) {
	request(`https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=${req.query.firstName}&d_last=${req.query.lastName}&d_state=${req.query.usState}`, function (error, response, body) {
	  if (!error) {
			res.send(body);
	  } else {
			console.log(error);
	  }
	})
})

module.exports = router;