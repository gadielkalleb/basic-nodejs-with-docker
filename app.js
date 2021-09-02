import fs from 'fs'
import https from 'https'

const port = process.env?.PORT ?? 8080

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}

https
  .createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  })
  .listen(port, () => console.log(`listen on port: ${port}`))
