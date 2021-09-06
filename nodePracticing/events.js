const event = require('events')
const eventEmmitter = new event()
eventEmmitter.on('trigger', (a, b) => {
	console.log(a + b)
})
eventEmmitter.emit('trigger', 1, 2)
// 3

class PersonClass extends event {
	constructor(prop) {
		super()
		this._name = prop
	}
	get prop() {
		return this._name
	}
}
let person = new PersonClass('Luiz')
person.on('name', () => {
	console.log(person.prop)
})
person.emit('name')
// Luiz
