const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    if (req.url === '/load') {
        const start = Date.now();
        while (Date.now() - start < 200) {
            Math.sqrt(Math.random() * 1000000);
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Heavy load processed by instance: ${os.hostname()}\n`);
    } else if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK\n');
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
      <html>
        <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
          <h1>AWS Auto Scaling Demo</h1>
          <p>Served by instance: <b>${os.hostname()}</b></p>
          <p>Try <code>/load</code> to simulate CPU stress, or <code>/health</code> for health check.</p>
        </body>
      </html>
    `);
    }
});

server.listen(80, () => {
    console.log('Server running on port 80');
});