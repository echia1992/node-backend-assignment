/** @format */

const http = require("http");

// Create the HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end("Hello world");
});

const port = 8000;

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
