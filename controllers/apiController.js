var Tests = require('../models/testModel.js');
var bodyParser = require('body-parser');


module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/test/:uname', function(req, res) {

    Tests.find({ username: req.params.uname },
    
      function(err, test) {
        if (err) throw err;

        res.send(test);
    });

  });
}