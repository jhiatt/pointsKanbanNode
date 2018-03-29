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

  app.get('/api/test/:id', function(req, res) {

    Tests.findById({ _id: req.params.id }, function(err, test) {
      if (err) throw err;

      res.send(test);
    });
  });

  app.post('/api/test', function(req, res) {
    
    //check if this is an UPDATE (id is created by database so you wouldn't add it to the req)
    if (req.body.id) {
      Tests.findByIdAndUpdate(req.body.id, {
        test: req.body.test
      }, function(err, test) {
          if (err) throw err;

          res.send('success');
      });
    } else {

      var newTest = Tests({
        username: 'jhiatt',
        test: req.body.test
      });
      newTest.save(function(err) {
        if (err) throw err;
        res.send('Success');
      })
    }

  });
}