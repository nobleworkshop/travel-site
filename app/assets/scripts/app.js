var $ = require('jquery');

// require is the part of node.js
// var Person = require("./modules/Person");

// New ES6 import feature
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + "now owes $0 in taxes.");	
	}
}

var john = new Person("John Doe", "green");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();