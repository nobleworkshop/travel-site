// ES5
// function Person(name, favouriteColor) {
// 	this.name = name;
// 	this.favouriteColor = favouriteColor;
// 	this.greet = function(){
// 	}
// }


// ES6
class Person {
	constructor(fullName, favColor){
		this.name = fullName;
		this.favouriteColor = favColor;
	}

	greet() {
		console.log("Hi, my name is " + this.name + " and my fav color is " + this.favouriteColor + ".");
	}
}

// node.js way of export
// module.exports = Person;

// New ES6 way of export
export default Person;



