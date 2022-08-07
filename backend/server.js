const http = require("http")

const port = 3000;

http.createServer((req,res) => {
  const message ="HELLO!";
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(message);
  res.end();
})
  .listen(port);
