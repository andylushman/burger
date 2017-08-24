var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var handlebars = require("express-handlebars");

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

//Testing connection
var connection = require("./config/connection.js");

app.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


function readProducts() {
  console.log("Selecting all burgers...\n");
  connection.query("SELECT * FROM burgers", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}
readProducts();
