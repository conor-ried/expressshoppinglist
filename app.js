const express = require("express")
const app = express();
const itemsRoutes = require("./items")
const ExpressError = require("./expressError")



app.use(express.json());
app.use("/items", itemsRoutes);




app.use(function (req, res, next) {
    return new ExpressError("Not Found", 404);
  });
  
  /** general error handler */
  
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err.message,
    });
  });
  app.listen(3000, function() {
    console.log('Server started on port 3000.');
  });
  
  module.exports = app ;