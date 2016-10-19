// to start up your program, create your directories & initial files then:
// npm init
// npm install -- save cors body-parser express

// you will need to npm install --save mongodb mongojs.  these are required in EACH controller

//so this is our server file.
//now, require the packages you installed and saved:
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

//invoking a method or function runs the function.  instantiating puts the function on standby to use when needed.
//so, instantiate express
var animalCtrl = require("./controllers/animalCtrl");
var app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());//you have to set up bodyParser to convert to json
app.use(bodyParser.urlencoded());//for your html parsing
app.use(express.static(__dirname + '/public'));//this looks in public for your front end documents

//end points
var animalCtrl = require("./controllers/animalCtrl")

app.get("/animals", animalCtrl.read);
app.post("/animals", animalCtrl.create);
app.put("/animals/:id", animalCtrl.update); //req.params.key
app.delete("/animals/:id", animalCtrl.delete);


app.listen(7000, function(){
  console.log("oh hiiii, 7000");

});
