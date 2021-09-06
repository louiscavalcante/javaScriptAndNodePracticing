const fs = require('fs')
const readStream = fs.createReadStream('./data.txt', 'utf-8')
const writeStream = fs.createWriteStream('data2.txt')
readStream.on('data', chunk => {
	writeStream.write(chunk)
})
