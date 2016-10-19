var mongojs = require("mongojs");
var ObjectId = require("mongodb").ObjectId;
//make sure you install these too!

var db = mongojs("animaldb", ['animals']) //connection to db "animaldb" is your database name.  the array is your "collections" folder in robomongo.  this allows you multiple collections inside the same database.


  module.exports = {
    read: function(req, res){
      db.animals.find({}, function(err, result){//function returns either err or result as truthy or falsy
            //YOUR FUNCTION IS YOUR PROMISE?
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
    });
  },

  create: function(req, res){
    db.animals.insert(req.body, function(err, result){//req.body is new data
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  update: function(req, res) {
    var newObj = {
      query: {_id: ObjectId(req.params.id)}, //get this id
      update: {$set: req.body}, //set it to req.body
      new: false //it's new
    };
    db.animals.findAndModify(newObj, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },

  delete: function(req, res) {
    db.animals.remove({_id: ObjectId(req.params.id)}, function(err, result){//function returns either err or result as truthy or falsy
//err, result function is a callback function.  it's not a promise-you wait for it.  you only use promises on the front end.
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    }); //the value of query gets your obj id
  }
};
