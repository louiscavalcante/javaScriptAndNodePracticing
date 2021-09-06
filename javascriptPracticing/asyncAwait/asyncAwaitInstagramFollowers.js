function firstFunction() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(document.getElementsByClassName('_5f5mN       jIbKX  _6VtSN     yZn4P ')[0].click())
		}, Math.floor(Math.random() * (10000 - 6000 + 1000) + 6000))
	})
}

function secondFunction() {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(document.getElementsByClassName('_2dbep qNELH kIKUG')[9].click())
		}, Math.floor(Math.random() * (5000 - 3000 + 1000) + 3000))
	})
}

async function thirdFunction() {
	for (let i = 1; i <= 6000; i++) {
		await firstFunction()
		console.log(`Following: ${i}`)
		await secondFunction()
	}
}

thirdFunction()
