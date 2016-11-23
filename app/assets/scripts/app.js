
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
// var revealOnScroll = new RevealOnScroll();

new RevealOnScroll( $(".feature-item"), "85%");
new RevealOnScroll( $(".testimonial"), "60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();


/*
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
*/