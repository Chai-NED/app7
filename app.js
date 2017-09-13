const express = require('express')
const os = require('os').hostname()
const platform = require('os').platform()
const app = express()

app.get('/', function (req, res) {


	 var i = 1,
	 max = 5;


	  //set the appropriate HTTP header
	  res.setHeader('Content-Type', 'text/html')
	  res.write('<br><h1> This response is from '+platform+' server: &nbsp' +  os + '</h1>')
	  res.write('<br> <br>')
	  res.write('<h4> powered by node.js and express</h4>')
	  //send multiple responses to the client
//	      for (i=1; i< max; i++) {
//	          res.write('<h2>This is the Response #: ' + i + '</h2>')
//	       }
	
	  //end the response process
	  res.end();

})


server  = require('http').createServer(app);

server.listen(9999, function () {

	  console.log('Example app listening on port 3000!')
	  console.log(server.address())
          console.log(os)
          console.log(platform)
})

