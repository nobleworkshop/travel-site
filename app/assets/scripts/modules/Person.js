function Person(name, favouriteColor) {
	this.name = name;
	this.favouriteColor = favouriteColor;
	this.greet = function(){
		console.log("Hello, my name is " + this.name + ", and my favourite color is " + this.favouriteColor + ".");
	}
}

// module.exports = Person;

console.log("Hello from Person.js");

exports.exampleProperty = "Super magical example value";
exports.exampleFunction = function(){
	alert("This is an example");
}