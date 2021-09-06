const fs = require('fs')

fs.writeFile('example.txt', 'text inside the file', err => {
	if (err) {
		console.log(err)
	} else {
		console.log('File created!')
		fs.readFile('./example.txt', 'utf8', (err, file) => {
			if (err) {
				console.log(err)
			} else {
				console.log(file)
				fs.rename('example.txt', 'example2.txt', err => {
					if (err) {
						console.log(err)
					} else {
						console.log('File renamed!')
						fs.appendFile('example2.txt', '\nText appended to the file', err => {
							if (err) {
								console.log(err)
							} else {
								console.log('Now the file has data appended!')
								fs.readFile('./example2.txt', 'utf8', (err, file) => {
									if (err) {
										console.log(err)
									} else {
										console.log(file)
										fs.unlink('./example2.txt', err => {
											if (err) {
												console.log(err)
											} else {
												console.log('File deleted!')
											}
										})
									}
								})
							}
						})
					}
				})
			}
		})
	}
})

fs.mkdir('./exampleDir', err => {
	if (err) {
		console.log(err)
	} else {
		console.log('Directory created!')
		fs.writeFile('./exampleDir/1.txt', '', 'utf8', err => {
			if (err) {
				console.log(err)
			} else {
				console.log('File created!')
				fs.readdir('./exampleDir', (err, files) => {
					if (err) {
						console.log(err)
					} else {
						console.log(files)
						for (let file of files) {
							fs.unlink(`./exampleDir/${file}`, err => {
								if (err) {
									console.log(err)
								} else {
									console.log('Files deleted!')
									fs.rmdir('./exampleDir', err => {
										if (err) {
											console.log(err)
										} else {
											console.log('Directory deleted!')
										}
									})
								}
							})
						}
					}
				})
			}
		})
	}
})
