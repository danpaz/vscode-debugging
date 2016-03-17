const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text/plain');
  res.statusCode = 200;

  setTimeout(function second() {
    res.write('2\n');
  }, 0);

  setTimeout(function first() {
    res.write('1\n');
    res.end();
  }, 0);


  res.write('3\n');
});

server.listen(8147);
console.log('Listening on port 8147');
