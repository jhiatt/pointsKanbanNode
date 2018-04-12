var Tests = require('../models/testModel.js');
var Cards = require('../models/cardData.js');
var bodyParser = require('body-parser');


module.exports = function(app) {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  //CARD ROUTES
  app.get('/api/card/:uname', function(req, res) {
    Cards.find({ username: req.params.uname },
      function(err, card) {
        if (err) throw err;
        res.send(card);
      });
  });

  app.get('/api/card/:id', function(req, res) {
    Cards.findById({ _id: req.params.id }, 
      function(err, card) {
        if (err) throw err;
        res.send(card);
      });
  });

  app.post('/api/card', function(req, res) {
    if (req.body.id) {
      Cards.findByIdAndUpdate(req.body.id, {

        cardTitle: req.body.cardTitle,
        cardDescription: req.body.cardDescription

      });
    } else {
      var newCard = Cards({
        username: req.body.username,
        cardTitle: req.body.cardTitle,
        cardDescription: req.body.cardDescription
      }, function(err, card) {
        if (err) throw err;
        res.send('Sucessfully updated');
      });
      newCard.save(function(err) {
        if(err) throw err;
        res.send('Sucessfully created');
      });
    };
  });

  app.delete('/api/card/:id', function(req, res) {
    Cards.findByIdAndRemove(req.body.id, function (err) {
      if (err) throw err;
      res.send('Deleted');
    });
  });


  //TEST ROUTES
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