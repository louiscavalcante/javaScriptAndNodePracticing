const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

let num1 = 2
let num2 = 3
let answer = num1 + num2
rl.question(`Type the sum of ${num1} + ${num2} \n`, userInput => {
	if (userInput.trim() == answer) {
		rl.close()
	} else {
		rl.setPrompt(`Incorrect, try again... \n`)
		rl.prompt()
		rl.on('line', userInput => {
			if (userInput.trim() == answer) {
				rl.close()
			} else {
				rl.setPrompt(`Wrong, try again... \n`)
				rl.prompt()
			}
		})
	}
})
rl.on('close', () => {
	console.log('Correct!')
})
