const express = require('express'),
bodyParser = require("body-parser"),
port = 3000,
app = express();

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server is running on port ' +port);
});

 
//Define request response in root URL (/)
app.get('/', (req, res)=> {
  res.send('App running successfully!');
})

//triangl
app.get('/triangle', (req, res)=> {
  console.log(req.body);
  if(!req.body.a || !req.body.b || !req.body.c){
    return res.status(401).json({
      message : "Mandatory params are missing!"
    })
  }
  else{
    const triangle = require('./app')(req.body);
    return res.status(200).json({
      message : triangle
    })
  }
})


