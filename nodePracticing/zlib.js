const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip()
const gunzip = zlib.createGunzip()

// const readStream = fs.createReadStream('./data.txt', 'utf-8')
// const writeStream = fs.createWriteStream('dataGzip.txt.gz')
// readStream.pipe(gzip).pipe(writeStream)

fs.access('./dataGzip.txt.gz', fs.F_OK, err => {
	if (err) {
		console.log(err)
		return
	}
	const readStreamGunzip = fs.createReadStream('./dataGzip.txt.gz')
	const writeStreamGunzip = fs.createWriteStream('dataGunzip.txt')
	readStreamGunzip.pipe(gunzip).pipe(writeStreamGunzip)
	console.log('exists')
})
