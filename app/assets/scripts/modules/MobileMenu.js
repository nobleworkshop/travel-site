import $ from 'jquery';

class MobileMenu {
	constructor() {
		// Bad jQuery spagetti code
		// $('.site-header__menu-icon').click(function(){
		// 	console.log("The top right icon was clicked");
		// })

		this.siteHeader = $('.site-header');
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.events();
	}

	events() {
		// We use .bind(this) - to save "this" 
		// and not to change it
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;