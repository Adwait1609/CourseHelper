 const app = require("../index"); 

 app.listen(5000, () => {
   console.log("Server running on port 5000");
 });
 module.exports = (req, res) => app(req, res);
 
