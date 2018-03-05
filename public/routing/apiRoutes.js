// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var axios = require('axios');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.post("/api/queryall", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table

    function getAllApis (object) {
      axios({
  	      url:'https://api.nytimes.com/svc/search/v2/articlesearch.json',
  	      params:{ 'api-key': "7ca74794a0a64d579de04b287793ce32",
  	            'q': object.topic,
  	            'begin_date': object.startDate,
  	            'end_date': object.endDate}
  	    })
  	      .then(function(response) {
  	      // console.log(response);
          // res.json(true);
  	      res.json(response.data.response.docs);
  	    });
    }

    getAllApis(req.body);

  });

};
