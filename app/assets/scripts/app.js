function Person(name, favouriteColor) {
	this.name = name;
	this.favouriteColor = favouriteColor;
	this.greet = function(){
		console.log("Hello, my name is " + this.name + ", and my favourite color is " + this.favouriteColor + ".");
	}
}

var john = new Person("John Doe", "green");
john.greet();

var jane = new Person("Jane Smith", "blue");
jane.greet();

