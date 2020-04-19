const express = require('express'),
bodyParser = require("body-parser"),
port = 4000,
app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server is running on port ' +port);
});

 
//Define request response in root URL (/)
app.get('/', (req, res)=> {
  res.status(200).send('App running successfully!');
})

//triangle
app.get('/triangle', (req, res)=> {
  
  if(!req.body.a || !req.body.b || !req.body.c){
    return res.status(401).json({
      message : "Mandatory params are missing! require a, b and c"
    })
  }

  const triangle = require('./app')(req.body);

  if(triangle ==="NOT INTEGER"){
    return res.status(401).json({
      message: "Some Params are strings"
    })
  }

  return res.status(200).json({
    message : triangle
  })
})

module.exports = app;