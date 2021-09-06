function ArrayChallenge(arr) {
	console.log('-------------------------------')
	console.log('Array inicial:')
	console.log(arr)

	let greatestNumber = Math.max(...arr)
	console.log('-------------------------------')
	console.log('Maior número do array:')
	console.log(greatestNumber)

	let [...arrFiltered] = arr.filter(lowNumbers => greatestNumber > lowNumbers)
	console.log('-------------------------------')
	console.log('Array filtrado:')
	console.log(arrFiltered)

	console.log('-------------------------------')
	let sum = 0

	for (let i_index = 0; i_index < arrFiltered.length; i_index++) {
		sum += arrFiltered[i_index]

		for (let j_index = 0; j_index < arrFiltered.length; j_index++) {
			if (i_index != j_index) {
				sum += arrFiltered[j_index]
				if (sum == greatestNumber) {
					return true
				}
			}
		}

		for (let k_index = 0; k_index < arrFiltered.length; k_index++) {
			if (i_index != k_index) {
				sum -= arrFiltered[k_index]
				if (sum == greatestNumber) {
					return true
				}
			}
		}

		sum = 0
	}

	return false
}
console.log('Resultado: ', ArrayChallenge(readline()))
console.log('-------------------------------')

// ------- CHALLENGE PROXY ARRAY / DON'T USE IT -------
// >>>>>>>>>> TRUE <<<<<<<<<<
function readline() {
	return (randomArray = [4, 6, 23, 10, 1, 3])
}

// >>>>>>>>>> FALSE <<<<<<<<<<
// function readline() {
//     return randomArray = [ 5, 7, 16, 1, 2 ]
// }

// >>>>>>>>>> TRUE <<<<<<<<<<
// function readline() {
//     return randomArray = [ 3, 5, -1, 8, 12 ]
// }

// ------- CHALLENGE PROXY ARRAY / DON'T USE IT -------
