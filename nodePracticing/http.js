const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
	res.write('Hello from NodeJS')
	res.end()
})
server.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}/`)
})
