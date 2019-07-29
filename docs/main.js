(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bio/bio.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bio/bio.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"padding container column\" style=\"text-align:center;margin-top:10em\">\n  <div class=\"banner\">\n    \"It is our choices that show who we truly are, far more than our abilities\"\n  </div>\n  <!-- <div class=\"text\">\n    - Albus Dumbledore\n  </div> -->\n</div>\n<div class=\"container\" style=\"position:relative;padding-top:8vw;padding-bottom:2vw\">\n  <span class=\"name\">RYAN MICHAEL TAN</span>\n  <div>\n    <img class=\"responsive\" src=\"../../assets/bio/profile.png\" alt=\"profile\" style=\"height:calc(300px + (700 - 300) * ((100vw - 300px) / (1600 - 300)));width:auto;\">\n  </div>\n  <div class=\"text\" style=\"padding-top:5.5em;padding-left:2vw;text-align:justify;min-width:400px\">\n    <span style=\"padding-right:3rem\"></span>I am a senior currently studying at Nanyang Technological University under the Renaissance Engineering\n    Programme (REP). My major is in Computer Science with a specific focus towards Artificial Intelligence.\n    Outside of academics, I enjoy rock climbing and making covers of songs on the piano.\n  </div>\n</div>\n<div class=\"container column padding\" >\n  <div>\n    <h4 class=\"lines\"><span style=\"padding: 10px 20px\">Background</span></h4>\n  </div>\n  <div class=\"padding\" style=\"align-self:center;width:50%;min-width:400px\">\n    <div>\n      <img src=\"../../assets/bio/circle.png\" alt=\"circle\" style=\"height:1rem\">\n      <span class=\"line-background\"></span>\n      <span class=\"date\">AUG 2016</span>\n      <div class=\"content\">\n        <h4>Nanyang Technological University</h4>\n        <p class=\"text\" style=\"text-align:justify\">I enrolled in NTU under the Renaissance Engineering\n          Programme(REP). The curriculum for the first year consisted on a variety of engineering courses\n          ranging widely from Mechanical to Chemical Engineering. In my second year, I chose to major in\n          Computer Science.</p>\n      </div>\n    </div>\n    <div>\n      <img src=\"../../assets/bio/circle.png\" alt=\"circle\" style=\"height:1rem\">\n      <span class=\"line-background\"></span>\n      <span class=\"date\">MAY 2018</span>\n      <div class=\"content\">\n        <h4>SURF</h4>\n        <p class=\"text\" style=\"text-align:justify\">My senior launched a startup earlier that year\n        which focused on promoting recycling in Singapore through corporate campaigns and household\n        campaigns. I decided to join the startup as a Software Engineer Intern and worked on implementing\n        features on their website.</p>\n      </div>\n    </div>\n    <div>\n      <img src=\"../../assets/bio/circle.png\" alt=\"circle\" style=\"height:1rem\">\n      <span class=\"line-background\"></span>\n      <span class=\"date\">AUG 2018</span>\n      <div class=\"content\">\n        <h4>University of California, Berkeley</h4>\n        <p class=\"text\" style=\"text-align:justify\"> I was extremely fortunate to have the opportunity\n        to study on exchange for a year in the US. Studying in an overseas university was incredibly surreal\n        and eye opening. The computer science courses here were extremely rigorous and I definitely learnt a lot.</p>\n      </div>\n    </div>\n    <div>\n      <img src=\"../../assets/bio/circle.png\" alt=\"circle\" style=\"height:1rem\">\n      <span class=\"line-background\"></span>\n      <span class=\"date\">MAY 2019</span>\n      <div class=\"content\">\n        <h4>Tribalist</h4>\n        <p class=\"text\" style=\"text-align:justify\">I interned as a Software Engineer Intern at Tribalist which\n        is located in San Francisco. My role involved pushing new features for their mobile application as well\n        as developing tools for customer acquisition.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"background\" style=\"margin-top:2rem;padding-top:7rem;padding-bottom:7rem;\">\n  <div class=\"container\">\n    <div class=\"title\">CONTACT</div>\n  </div>\n</div>\n<form class=\"container column padvertical\" [formGroup]=\"checkoutForm\" (ngSubmit)=\"onSubmit(checkoutForm.value)\">\n  <div>\n    <label class=\"text\" for=\"name\">\n      Name\n    </label><br/>\n    <input class=\"outline\" id=\"name\" type=\"text\" formControlName=\"name\">\n  </div>\n  <div>\n    <label class=\"text\" for=\"email\">\n      Email\n    </label><br/>\n    <input class=\"outline\" id=\"email\" type=\"text\" formControlName=\"email\">\n  </div>\n  <div>\n    <label class=\"text\" for=\"message\">\n      Message\n    </label><br/>\n    <textarea class=\"outline\" name=\"message\" formControlName=\"message\" rows=\"8\" cols=\"50\"></textarea>\n  </div>\n  <div style=\"text-align:left\">\n    <button class=\"button outline\" type=\"submit\"><a>Submit</a></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- fullsize nav bar-->\n<div class=\"header\" *ngIf=\"resize=='full'\">\n  <div class=\"section-header\">\n    <a style=\"padding-left:3em\" [appStyle]=\"'black'\">\n      <span [ngStyle]=\"{color: onActive('Projects')}\" [routerLink]=\"['/']\" class=\"outline\">Projects</span>\n    </a>\n    <a class=\"section\" style=\"padding-left:2em\" [appStyle]=\"'black'\">\n      <span [ngStyle]=\"{color: onActive('Bio')}\" [routerLink]=\"['/bio']\" class=\"outline\">Bio</span>\n    </a>\n    <a class=\"section\" style=\"padding-left:2em\" [appStyle]=\"'black'\">\n      <span [ngStyle]=\"{color: onActive('Hobbies')}\" [routerLink]=\"['/hobbies']\" class=\"outline\">Hobbies</span>\n    </a>\n  </div>\n  <a class=\"title\" [appStyle]=\"'black'\"><span [routerLink]=\"['/']\" class=\"outline\">RYAN MICHAEL TAN</span></a>\n  <div class=\"section-header\">\n    <a style=\"padding-right:3em\" [appStyle]=\"'black'\">\n      <span [ngStyle]=\"{color: onActive('Let\\'s Chat')}\" [routerLink]=\"['/contact']\" class=\"outline\">Let's Chat</span>\n    </a>\n  </div>\n</div>\n<!-- small width nav bar-->\n<div class=\"header\" *ngIf=\"resize=='small'\">\n  <div class=\"dropdown\" [ngStyle]=\"{display:dropdown == true ? 'block' : 'none'}\">\n    <img class=\"menu\" src=\"../../assets/img/menu.png\" alt=\"menu\" (click)=\"onPress()\">\n    <div class=\"dropdown-content\" [ngStyle]=\"{display: (dropdown == true) ? 'block' : 'none'}\">\n      <a [appStyle]=\"'black'\">\n        <span [ngStyle]=\"{color: onActive('Projects')}\" [routerLink]=\"['/']\" class=\"outline\">Projects</span>\n      </a>\n      <a class=\"section\" [appStyle]=\"'black'\">\n        <span [ngStyle]=\"{color: onActive('Bio')}\" [routerLink]=\"['/bio']\" class=\"outline\">Bio</span>\n      </a>\n      <a class=\"section\" [appStyle]=\"'black'\">\n        <span [ngStyle]=\"{color: onActive('Hobbies')}\" [routerLink]=\"['/hobbies']\" class=\"outline\">Hobbies</span>\n      </a>\n    </div>\n  </div>\n  <a class=\"title\" [appStyle]=\"'black'\"><span [routerLink]=\"['/']\" class=\"outline\">RYAN MICHAEL TAN</span></a>\n  <div class=\"section-header\">\n    <a style=\"padding-right:3em\" [appStyle]=\"'black'\">\n      <span [ngStyle]=\"{color: onActive('Let\\'s Chat')}\" [routerLink]=\"['/contact']\">Let's Chat</span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/hobby/hobby.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/hobby/hobby.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"background\" style=\"margin-top:2rem;padding-top:7rem;padding-bottom:7rem;\">\n  <div class=\"container\">\n    <div class=\"title\">ROCK CLIMBING</div>\n  </div>\n</div>\n<div class=\"container\" style=\"padding-top:3em;width:90%\">\n  <div>\n    <img class=\"responsive\" src=\"../../assets/hobbies/climbing1.jpg\" alt=\"climbing1\"\n      style=\"height:calc(200px + (450 - 200) * ((100vw - 300px) / (1600 - 300)));\">\n  </div>\n  <div class=\"text padding\" style=\"text-align:justify;width:40%;min-width:400px\">\n    In December 2018, a good friend and I went on a rock climbing trip to Red Rocks and\n    Joshua Tree National Park. This was probably as close to a dirtbag experience as we were\n    gonna get, from camping out at Walmarts to eating micro-waved eggs and cheese and to clearing\n    out the waste from the RV. The boulders were really challenging and I didn't manage to send\n    the routes that I wanted to, but definitely will be back one day.\n  </div>\n</div>\n<div class=\"container padvertical\" style=\"width:90%\">\n  <div style=\"padding-top:2em\">\n    <img class=\"responsive\" src=\"../../assets/hobbies/climbing2.jpg\" alt=\"climbing2\"\n      style=\"height:calc(200px + (450 - 200) * ((100vw - 300px) / (1600 - 300)));\">\n  </div>\n  <div style=\"padding-left:5vw;padding-top:2em\">\n    <img class=\"responsive\" src=\"../../assets/hobbies/climbing4.jpg\" alt=\"climbing4\"\n      style=\"height:calc(200px + (450 - 200) * ((100vw - 300px) / (1600 - 300)));\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/portfolio/portfolio.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"background\" style=\"margin-top:2rem;padding-top:7rem;padding-bottom:7rem;\">\n  <div class=\"container\" style=\"flex-direction:row\">\n    <div class=\"banner\" style=\"padding-bottom:3.3vw;padding-right:1vw\">\n      Portfolio\n    </div>\n    <span class=\"line-design\"></span>\n    <div class=\"banner\" style=\"padding-top:3.3vw;padding-left:1vw\">\n      Website\n    </div>\n  </div>\n</div>\n<div class=\"container\" style=\"padding-top:3em\">\n  <img class=\"responsive\" src=\"../../assets/img/webdesign.jpeg\" alt=\"mock-up\" style=\"height:calc(300px + (500 - 300) * ((100vw - 300px) / (1600 - 300)))\">\n</div>\n<div class=\"container column\" style=\"width:50vw;padding-bottom:3em;padding-top:2em;min-width:400px;\">\n  <p class=\"text\">Skills: Angular & Typescript</p>\n  <p class=\"text\" style=\"text-align:justify\">\n    <span style=\"padding-right:3em\"></span>I started building this portfolio website as a way to experiment with and\n    learn a new programming language. For this project, I decided on Angular as the framework to work on as I\n    had already been using React during my internship. It was also enjoyable to design the layout of the website and play\n    around with various CSS features. I also gave myself a challenge of not using third party libraries such as Bootstrap.\n    However, since this is just a static website, there are still plenty of Angular\n    concepts that I have yet to explore. That could probably come in a subsequent project where more complex features\n    are required. We'll see what happens~\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/projects/projects.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"container\">\n    <div style=\"width:80%;margin:auto;\">\n      <h1 class=\"title\">\n        I am a Software Engineer.\n      </h1>\n    </div>\n    <div style=\"padding-top:3rem;padding-bottom:10rem\">\n      <h4 style=\"font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));\">Currently working as an intern @ Tribalist in San Francisco</h4>\n    </div>\n</div>\n<div class=\"container\" style=\"padding-bottom:2rem\">\n  <div>\n    <h4 class=\"lines\"><span style=\"padding: 10px 20px\">Internships</span></h4>\n  </div>\n  <div class=\"container-row\" style=\"padding-bottom:2rem\">\n    <div class=\"tribalist outline\" [routerLink]=\"['/projects/tribalist']\" style=\"cursor:pointer\">\n      <img class=\"responsive\" src=\"../../assets/img/tribalist.png\" alt=\"Tribalist\" style=\"height:4rem;\">\n    </div>\n    <div class=\"surf\" [routerLink]=\"['/projects/surf']\" style=\"cursor:pointer\">\n      <img class=\"responsive\" src=\"../../assets/img/surf.webp\" alt=\"SURF\" style=\"height:4rem\">\n    </div>\n  </div>\n  <div>\n    <h4 class=\"lines\"><span style=\"padding: 10px 20px\">Projects</span></h4>\n  </div>\n  <div class=\"container-row\">\n    <div class=\"portfolio\" [routerLink]=\"['/projects/portfolio']\" style=\"cursor:pointer\">\n      <h2 style=\"font-size:3rem;margin-bottom:0;padding-right:3rem;\">Portfolio</h2>\n      <span class=\"line-design\"></span>\n      <h2 style=\"font-size:3rem;padding-left:3rem\">Website</h2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/surf/surf.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/surf/surf.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"background\" style=\"margin-top:2rem;padding-top:7rem;padding-bottom:7rem;\">\n  <div class=\"container\">\n    <img src=\"../../assets/img/surf.webp\" alt=\"SURF\" style=\"height:5rem\">\n  </div>\n</div>\n<div class=\"container\" style=\"padding-top:3em\">\n  <img src=\"../../assets/img/surf-sg.jpg\" alt=\"Tribalist Website\" style=\"width:40em\">\n</div>\n<div class=\"container\" style=\"width:50%;padding-bottom:1em\">\n  <p class=\"padding text\" style=\"text-align:center\">\n    In the summer of 2018, I worked at SURF as a Software Engineering Intern. During my stint here,\n    I was tasked to work on improving their website's design and user interface.\n  </p>\n</div>\n<div class=\"container\" style=\"padding-bottom:3em\">\n  <div style=\"border: 6px solid #AAAAAA;\">\n    <img class=\"responsive\" src=\"../../assets/img/surf-sg2.jpg\" alt=\"surf-sg\" style=\"height:calc(140px + (400 - 140) * ((100vw - 300px) / (1600 - 300)))\">\n  </div>\n  <div style=\"margin:0 4rem;margin-top:3rem;width:40%;min-width:400px\">\n    <p class=\"title\">WEB DEVELOPMENT</p>\n    <div class=\"container column\">\n      <p class=\"text\">Language: PHP</p>\n      <p class=\"text\">Framework: CodeIgniter</p>\n      <p class=\"text\" style=\"text-align:justify\">\n        SURF was a startup launched by my senior and was an initiative to promote recyling in Singapore. Other\n        than working on the website, we also went out to potential clients to pitch our ideas on recycling and how it can be\n        integrated into their business.\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tribalist/tribalist.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tribalist/tribalist.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header\n  [active]=\"active\">\n</app-header>\n<div class=\"background\" style=\"margin-top:2rem;padding-top:7rem;padding-bottom:7rem;\">\n  <div class=\"container\">\n    <img src=\"../../assets/img/tribalist.png\" alt=\"Tribalist\" style=\"height:calc(40px + (110 - 40) * ((100vw - 300px) / (1600 - 300)));\">\n  </div>\n</div>\n<div class=\"container\" style=\"padding-top:3em\">\n  <img class=\"responsive\" src=\"../../assets/img/website.png\" alt=\"Tribalist Website\" style=\"height:35em\">\n</div>\n<div class=\"container\" style=\"width:55%;padding-bottom:1em; min-width:400px\">\n  <p class=\"padding text\" style=\"text-align:center\">In the summer of 2019, I worked at Tribalist\n    as a Software Engineer. My role involved developing a Twitter Tool as part of their customer acquisition\n    strategy. I was also part of a team that worked on implementing new features for their mobile application.\n  </p>\n</div>\n<div class=\"container\">\n  <div style=\"border: 6px solid #AAAAAA;\">\n    <img class=\"responsive\" src=\"../../assets/img/iphone1.jpg\" alt=\"iphone1\" style=\"height:30em\">\n    <img class=\"responsive\" src=\"../../assets/img/iphone2.jpg\" alt=\"iphone2\" style=\"height:30em\">\n  </div>\n  <div style=\"padding:0 4vw;margin-top:1rem;width:50%;min-width:400px\">\n    <p class=\"title\">APP DEVELOPMENT</p>\n    <div class=\"container column\">\n      <p class=\"text\">Skills: React & Redux</p>\n      <p class=\"text\" style=\"text-align:justify\">\n        As an intern, I worked on client-side updates such as implementing new features and fixing bugs on their mobile application.\n        It was definitely exciting to be working on such a large project and I learnt a lot.\n      </p>\n    </div>\n  </div>\n</div>\n<div class=\"container\" style=\"padding-top:3em;padding-bottom:2em\">\n  <div>\n    <img class=\"responsive\" src=\"../../assets/img/twitterbot.png\" alt=\"twitter-bot\" style=\"height:25em\">\n  </div>\n  <div style=\"padding:0 4vw;margin-top:1rem;width:50%;min-width:400px\">\n    <p class=\"title\">Twitter Tool</p>\n    <div class=\"container column\">\n      <p class=\"text\">Front-end: React</p>\n      <p class=\"text\">Back-end: Node.js, Express & MySQL</p>\n      <p class=\"text\" style=\"text-align:justify\">The twitter tool is able to reply Tweets based off of keywords from the user using the\n        Twitter API and is hosted on Heroku. The tool definitely helped to increase the number of users for both the website and mobile app.</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".responsive {\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzcG9uc2l2ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _style_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.directive */ "./src/app/style.directive.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _tribalist_tribalist_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tribalist/tribalist.component */ "./src/app/tribalist/tribalist.component.ts");
/* harmony import */ var _surf_surf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./surf/surf.component */ "./src/app/surf/surf.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _bio_bio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bio/bio.component */ "./src/app/bio/bio.component.ts");
/* harmony import */ var _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hobby/hobby.component */ "./src/app/hobby/hobby.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");















//This is the root module, which is an NgModule class
//An NgModule is defined by a class decorated with @NgModule()
//In TypeScript, a decorator can be attached to a class declaration, using the
//form @expression
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        //The components, directives and pipes that belong to this NgModule
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
            _style_directive__WEBPACK_IMPORTED_MODULE_7__["StyleDirective"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _tribalist_tribalist_component__WEBPACK_IMPORTED_MODULE_9__["TribalistComponent"],
            _surf_surf_component__WEBPACK_IMPORTED_MODULE_10__["SurfComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"],
            _bio_bio_component__WEBPACK_IMPORTED_MODULE_12__["BioComponent"],
            _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_13__["HobbyComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"]
        ],
        //Other modules whose exported classes are needed by component templates
        //declared in this NgModule
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                { path: '', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] },
                { path: 'projects/tribalist', component: _tribalist_tribalist_component__WEBPACK_IMPORTED_MODULE_9__["TribalistComponent"] },
                { path: 'projects/surf', component: _surf_surf_component__WEBPACK_IMPORTED_MODULE_10__["SurfComponent"] },
                { path: 'projects/portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"] },
                { path: 'bio', component: _bio_bio_component__WEBPACK_IMPORTED_MODULE_12__["BioComponent"] },
                { path: 'hobbies', component: _hobby_hobby_component__WEBPACK_IMPORTED_MODULE_13__["HobbyComponent"] },
                { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"] },
            ])
        ],
        exports: [],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bio/bio.component.css":
/*!***************************************!*\
  !*** ./src/app/bio/bio.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.background{\n  background-color:#6B7A8F;\n}\n\n.padding{\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n.text{\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.banner{\n  font-size:calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.name{\n  position:absolute;\n  background:rgba(7,7,7,1);\n  font-size:2.2vw;\n  font-weight:700;\n  color:white;\n  padding:0.1em 0.3em;\n  margin-top:1em;\n  margin-left:6rem;\n}\n\n.lines {\n  width:80;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-pack:center;\n          justify-content:center;\n  text-align:center;\n  -webkit-box-align:center;\n          align-items:center;\n}\n\n.lines:before, .lines:after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: 1px;\n    background: #CCCCCC;\n    min-width: 2px;\n}\n\n.line-background{\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  min-height: 1px;\n  background: white;\n  width: 3rem;\n  margin-left:0.2em;\n  background: #CCCCCC;\n}\n\n.date{\n  background: #000000;\n  font-weight:600;\n  font-family:\"Lato\";\n  font-size:0.75em;\n  color:white;\n  padding:0.3em 0.5em;\n  margin-left:0.2em;\n  border-radius:2px;\n}\n\n.content{\n  margin-left:0.5em;\n  padding-left:2em;\n  padding-top:4em;\n  padding-bottom:4em;\n  border-left: 1px solid;\n  border-left-color:#CCCCCC;\n}\n\n.responsive {\n  width: 100%;\n  height: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvRUFBb0U7RUFDcEUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUVBQW1FO0VBQ25FLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsbUJBQVk7RUFBWixZQUFZO0VBQ1osdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsd0JBQWtCO1VBQWxCLGtCQUFrQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFZO1lBQVosWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYmlvL2Jpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbi5jb2x1bW57XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM2QjdBOEY7XG59XG5cbi5wYWRkaW5ne1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cblxuLnRleHR7XG4gIGZvbnQtc2l6ZTogY2FsYygxNHB4ICsgKDE5IC0gMTQpICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBjb2xvcjpyZ2JhKDAsMCwwLDAuNyk7XG59XG5cbi5iYW5uZXJ7XG4gIGZvbnQtc2l6ZTpjYWxjKDIwcHggKyAoNDAgLSAyMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOnJnYmEoMCwwLDAsMC43KTtcbn1cblxuLm5hbWV7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBiYWNrZ3JvdW5kOnJnYmEoNyw3LDcsMSk7XG4gIGZvbnQtc2l6ZToyLjJ2dztcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBjb2xvcjp3aGl0ZTtcbiAgcGFkZGluZzowLjFlbSAwLjNlbTtcbiAgbWFyZ2luLXRvcDoxZW07XG4gIG1hcmdpbi1sZWZ0OjZyZW07XG59XG5cbi5saW5lcyB7XG4gIHdpZHRoOjgwO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5saW5lczpiZWZvcmUsIC5saW5lczphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6ICNDQ0NDQ0M7XG4gICAgbWluLXdpZHRoOiAycHg7XG59XG5cbi5saW5lLWJhY2tncm91bmR7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAzcmVtO1xuICBtYXJnaW4tbGVmdDowLjJlbTtcbiAgYmFja2dyb3VuZDogI0NDQ0NDQztcbn1cblxuLmRhdGV7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG4gIGZvbnQtd2VpZ2h0OjYwMDtcbiAgZm9udC1mYW1pbHk6XCJMYXRvXCI7XG4gIGZvbnQtc2l6ZTowLjc1ZW07XG4gIGNvbG9yOndoaXRlO1xuICBwYWRkaW5nOjAuM2VtIDAuNWVtO1xuICBtYXJnaW4tbGVmdDowLjJlbTtcbiAgYm9yZGVyLXJhZGl1czoycHg7XG59XG5cbi5jb250ZW50e1xuICBtYXJnaW4tbGVmdDowLjVlbTtcbiAgcGFkZGluZy1sZWZ0OjJlbTtcbiAgcGFkZGluZy10b3A6NGVtO1xuICBwYWRkaW5nLWJvdHRvbTo0ZW07XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiNDQ0NDQ0M7XG59XG5cbi5yZXNwb25zaXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/bio/bio.component.ts":
/*!**************************************!*\
  !*** ./src/app/bio/bio.component.ts ***!
  \**************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BioComponent = class BioComponent {
    constructor() {
        this.active = "Bio";
    }
    ngOnInit() {
    }
};
BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bio',
        template: __webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/index.js!./src/app/bio/bio.component.html"),
        styles: [__webpack_require__(/*! ./bio.component.css */ "./src/app/bio/bio.component.css")]
    })
], BioComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color:#CD5C5C;\n}\n\n.container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  flex-wrap:wrap;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.text {\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.title {\n  color:white;\n  font-weight:700;\n  font-size: calc(30px + (60 - 30) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.padding {\n  padding:0 1.5rem;\n}\n\n.padvertical {\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n.button {\n  margin-top:0.5rem;\n  color:white;\n  background-color:#CD5C5C;\n  border: 1px solid #CD5C5C;\n  border-radius:5px;\n}\n\n.outline:focus {\n  outline:none;\n}\n\n.mailto {\n  display:block;\n  width:80px;\n  height:25px;\n  text-decoration:none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxtQkFBWTtFQUFaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvRUFBb0U7RUFDcEUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNDRDVDNUM7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmbGV4LXdyYXA6d3JhcDtcbn1cblxuLmNvbHVtbntcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgxOSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6cmdiYSgwLDAsMCwwLjcpO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6IGNhbGMoMzBweCArICg2MCAtIDMwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOjAgMS41cmVtO1xufVxuXG4ucGFkdmVydGljYWwge1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6MC41cmVtO1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjojQ0Q1QzVDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0Q1QzVDO1xuICBib3JkZXItcmFkaXVzOjVweDtcbn1cblxuLm91dGxpbmU6Zm9jdXMge1xuICBvdXRsaW5lOm5vbmU7XG59XG5cbi5tYWlsdG8ge1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDo4MHB4O1xuICBoZWlnaHQ6MjVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.active = "Let\'s Chat";
        this.checkoutForm = this.formBuilder.group({
            name: '',
            email: '',
            message: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(data) {
        alert('hi');
        let url = "mailto:";
        if (data.email) {
            url += "ryan.m.tan95@gmail.com" + "?";
        }
        if (data.message) {
            url += "body=" + data.message;
        }
        window.location.href = url;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n          flex-direction:row;\n  -webkit-box-pack:justify;\n          justify-content:space-between;\n  -webkit-box-align:center;\n          align-items:center;\n  margin-top:20px\n}\n\n.section-header {\n  font-family:'Helvetica Neue';\n  font-size:15px;\n  font-weight:700;\n  color: rgb(179,179,179);\n}\n\n.title {\n  font-family:'Helvetica Neue';\n  font-size: calc(14px + (35 - 14) * ((100vw - 300px) / (1600 - 300)));\n  font-weight:700;\n  position: absolute;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n#active {\n  color: black\n}\n\n.section:hover {\n  color: black\n}\n\n.outline:focus {\n  outline:none;\n}\n\n.menu {\n  height:2em;\n  margin-left:2em;\n  border:1.4px solid black;\n  border-radius:5px;\n  cursor:pointer;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osNkJBQWtCO0VBQWxCLDRCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsd0JBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix3QkFBa0I7VUFBbEIsa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0VBQW9FO0VBQ3BFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgbWFyZ2luLXRvcDoyMHB4XG59XG5cbi5zZWN0aW9uLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OidIZWx2ZXRpY2EgTmV1ZSc7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBmb250LXdlaWdodDo3MDA7XG4gIGNvbG9yOiByZ2IoMTc5LDE3OSwxNzkpO1xufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgzNSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4jYWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrXG59XG5cbi5zZWN0aW9uOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrXG59XG5cbi5vdXRsaW5lOmZvY3VzIHtcbiAgb3V0bGluZTpub25lO1xufVxuXG4ubWVudSB7XG4gIGhlaWdodDoyZW07XG4gIG1hcmdpbi1sZWZ0OjJlbTtcbiAgYm9yZGVyOjEuNHB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.resize = "full";
        this.dropdown = false;
        this.resize = window.innerWidth < 720 ? "small" : "full";
    }
    ngOnInit() {
    }
    onResize(event) {
        this.resize = window.innerWidth < 720 ? "small" : "full";
    }
    onActive(section) {
        if (this.active == section) {
            return 'black';
        }
    }
    onPress() {
        this.dropdown = !this.dropdown;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HeaderComponent.prototype, "active", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"])
], HeaderComponent.prototype, "onResize", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/hobby/hobby.component.css":
/*!*******************************************!*\
  !*** ./src/app/hobby/hobby.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  background-color:#2F4F4F;\n}\n\n.container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  flex-wrap:wrap;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.text {\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.title {\n  color:white;\n  font-weight:700;\n  font-size: calc(30px + (60 - 30) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.padding {\n  padding:0 1.5rem;\n}\n\n.padvertical {\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9iYnkvaG9iYnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1CQUFZO0VBQVosWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9FQUFvRTtFQUNwRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG9FQUFvRTtBQUN0RTs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob2JieS9ob2JieS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyRjRGNEY7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmbGV4LXdyYXA6d3JhcDtcbn1cblxuLmNvbHVtbntcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgxOSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6cmdiYSgwLDAsMCwwLjcpO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICBmb250LXNpemU6IGNhbGMoMzBweCArICg2MCAtIDMwKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOjAgMS41cmVtO1xufVxuXG4ucGFkdmVydGljYWwge1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hobby/hobby.component.ts":
/*!******************************************!*\
  !*** ./src/app/hobby/hobby.component.ts ***!
  \******************************************/
/*! exports provided: HobbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbyComponent", function() { return HobbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HobbyComponent = class HobbyComponent {
    constructor() {
        this.active = "Hobbies";
    }
    ngOnInit() {
    }
};
HobbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hobby',
        template: __webpack_require__(/*! raw-loader!./hobby.component.html */ "./node_modules/raw-loader/index.js!./src/app/hobby/hobby.component.html"),
        styles: [__webpack_require__(/*! ./hobby.component.css */ "./src/app/hobby/hobby.component.css")]
    })
], HobbyComponent);



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.background{\n  background-color:#6B7A8F;\n}\n\n.padding{\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n.text{\n  /* font-size:1.3vw; */\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.banner{\n  color:white;\n  font-size:calc(20px + (60 - 20) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.line-design{\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  height: calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)));\n  background: white;\n  min-width: 2px;\n  margin-top:1vw;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0VBQW9FO0VBQ3BFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrRUFBa0U7RUFDbEUsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG59XG5cbi5jb2x1bW57XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5iYWNrZ3JvdW5ke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiM2QjdBOEY7XG59XG5cbi5wYWRkaW5ne1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cblxuLnRleHR7XG4gIC8qIGZvbnQtc2l6ZToxLjN2dzsgKi9cbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMTkgLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOnJnYmEoMCwwLDAsMC43KTtcbn1cblxuLmJhbm5lcntcbiAgY29sb3I6d2hpdGU7XG4gIGZvbnQtc2l6ZTpjYWxjKDIwcHggKyAoNjAgLSAyMCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG59XG5cbi5saW5lLWRlc2lnbntcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiBjYWxjKDQwcHggKyAoMTIwIC0gNDApICogKCgxMDB2dyAtIDMwMHB4KSAvICgxNjAwIC0gMzAwKSkpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWluLXdpZHRoOiAycHg7XG4gIG1hcmdpbi10b3A6MXZ3O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortfolioComponent = class PortfolioComponent {
    constructor() {
        this.active = "Projects";
    }
    ngOnInit() {
    }
};
PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portfolio',
        template: __webpack_require__(/*! raw-loader!./portfolio.component.html */ "./node_modules/raw-loader/index.js!./src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
    })
], PortfolioComponent);



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  text-align:center;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n          flex-direction:column;\n  color: rgb(17,17,17);\n}\n\n.container-row {\n  display:-webkit-box;\n  display:flex;\n  flex-wrap:wrap;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  text-align:center;\n  color: rgb(17,17,17);\n}\n\n.title {\n  padding-top:10rem;\n  font-size: calc(23px + (40 - 23) * ((100vw - 300px) / (1600 - 300)));\n}\n\n.line-design{\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  min-height: 2px;\n  background: white;\n  width: 8rem;\n}\n\n.lines {\n  width:80;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-pack:center;\n          justify-content:center;\n  text-align:center;\n  -webkit-box-align:center;\n          align-items:center;\n}\n\n.lines:before, .lines:after {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: 1px;\n    background: #CCCCCC;\n    min-width: 2px;\n}\n\n.tribalist{\n  background-color:#0066bf;\n  width:30rem;\n  height:25rem;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-pack:center;\n          justify-content:center;\n  -webkit-box-align:center;\n          align-items:center;\n}\n\n.surf{\n  background-color:#3D9970;\n  width:30rem;\n  height:25rem;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-pack:center;\n          justify-content:center;\n  -webkit-box-align:center;\n          align-items:center;\n}\n\n.portfolio{\n  color:white;\n  font-size: calc(16px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));\n  background-color:#6B7A8F;\n  width:30rem;\n  height:25rem;\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient:vertical;\n  -webkit-box-direction:normal;\n          flex-direction:column;\n  -webkit-box-pack:center;\n          justify-content:center;\n  -webkit-box-align:center;\n          align-items:center;\n}\n\n.outline:focus {\n  outline:none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFZO0VBQVosWUFBWTtFQUNaLG9CQUFvQjtFQUNwQix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQiwyQkFBcUI7RUFBckIsNEJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxtQkFBWTtFQUFaLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvRUFBb0U7QUFDdEU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFFBQVE7RUFDUixtQkFBWTtFQUFaLFlBQVk7RUFDWix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix3QkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsbUJBQVk7WUFBWixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQVk7RUFBWixZQUFZO0VBQ1osdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQVk7RUFBWixZQUFZO0VBQ1osdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBa0I7VUFBbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG9FQUFvRTtFQUNwRSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBWTtFQUFaLFlBQVk7RUFDWiwyQkFBcUI7RUFBckIsNEJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHdCQUFrQjtVQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGNvbG9yOiByZ2IoMTcsMTcsMTcpO1xufVxuXG4uY29udGFpbmVyLXJvdyB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgZmxleC13cmFwOndyYXA7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgY29sb3I6IHJnYigxNywxNywxNyk7XG59XG5cbi50aXRsZSB7XG4gIHBhZGRpbmctdG9wOjEwcmVtO1xuICBmb250LXNpemU6IGNhbGMoMjNweCArICg0MCAtIDIzKSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbn1cblxuLmxpbmUtZGVzaWdue1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogOHJlbTtcbn1cblxuLmxpbmVzIHtcbiAgd2lkdGg6ODA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLmxpbmVzOmJlZm9yZSwgLmxpbmVzOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogI0NDQ0NDQztcbiAgICBtaW4td2lkdGg6IDJweDtcbn1cblxuLnRyaWJhbGlzdHtcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA2NmJmO1xuICB3aWR0aDozMHJlbTtcbiAgaGVpZ2h0OjI1cmVtO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuLnN1cmZ7XG4gIGJhY2tncm91bmQtY29sb3I6IzNEOTk3MDtcbiAgd2lkdGg6MzByZW07XG4gIGhlaWdodDoyNXJlbTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi5wb3J0Zm9saW97XG4gIGNvbG9yOndoaXRlO1xuICBmb250LXNpemU6IGNhbGMoMTZweCArICgyMCAtIDE2KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNkI3QThGO1xuICB3aWR0aDozMHJlbTtcbiAgaGVpZ2h0OjI1cmVtO1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuXG4ub3V0bGluZTpmb2N1cyB7XG4gIG91dGxpbmU6bm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() {
        this.active = "Projects";
    }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: __webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/index.js!./src/app/projects/projects.component.html"),
        styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/style.directive.ts":
/*!************************************!*\
  !*** ./src/app/style.directive.ts ***!
  \************************************/
/*! exports provided: StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StyleDirective = class StyleDirective {
    constructor(el) {
        this.el = el;
    }
    onMouseEnter() {
        this.changeColor(this.color || 'black');
    }
    onMouseLeave() {
        this.changeColor(null);
    }
    changeColor(color) {
        this.el.nativeElement.style.color = color;
        this.el.nativeElement.style.cursor = 'pointer';
    }
};
StyleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appStyle')
], StyleDirective.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], StyleDirective.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], StyleDirective.prototype, "onMouseLeave", null);
StyleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appStyle]'
    })
], StyleDirective);



/***/ }),

/***/ "./src/app/surf/surf.component.css":
/*!*****************************************!*\
  !*** ./src/app/surf/surf.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  flex-wrap:wrap;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.background{\n  background-color:#3D9970;\n}\n\n.padding {\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n.text {\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n.title {\n  background: -webkit-gradient(linear, left top, right top, from(rgba(62,59,130,1)), color-stop(100%, rgba(61,153,112,1)), to(rgba(0,212,255,1)));\n  background: linear-gradient(90deg, rgba(62,59,130,1) 0%, rgba(61,153,112,1) 100%, rgba(0,212,255,1) 100%);\n  color:white;\n  padding:10px 10px;\n  font-family:'Helvetica Neue';\n  font-weight:600;\n  border-Radius:10px;\n  text-align:center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VyZi9zdXJmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBWTtFQUFaLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0VBQW9FO0VBQ3BFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLCtJQUF5RztFQUF6Ryx5R0FBeUc7RUFDekcsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9zdXJmL3N1cmYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6Y2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBmbGV4LXdyYXA6d3JhcDtcbn1cblxuLmNvbHVtbntcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJhY2tncm91bmR7XG4gIGJhY2tncm91bmQtY29sb3I6IzNEOTk3MDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IGNhbGMoMTRweCArICgxOSAtIDE0KSAqICgoMTAwdncgLSAzMDBweCkgLyAoMTYwMCAtIDMwMCkpKTtcbiAgY29sb3I6cmdiYSgwLDAsMCwwLjcpO1xufVxuXG4udGl0bGUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjIsNTksMTMwLDEpIDAlLCByZ2JhKDYxLDE1MywxMTIsMSkgMTAwJSwgcmdiYSgwLDIxMiwyNTUsMSkgMTAwJSk7XG4gIGNvbG9yOndoaXRlO1xuICBwYWRkaW5nOjEwcHggMTBweDtcbiAgZm9udC1mYW1pbHk6J0hlbHZldGljYSBOZXVlJztcbiAgZm9udC13ZWlnaHQ6NjAwO1xuICBib3JkZXItUmFkaXVzOjEwcHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/surf/surf.component.ts":
/*!****************************************!*\
  !*** ./src/app/surf/surf.component.ts ***!
  \****************************************/
/*! exports provided: SurfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurfComponent", function() { return SurfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SurfComponent = class SurfComponent {
    constructor() {
        this.active = "Projects";
    }
    ngOnInit() {
    }
};
SurfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-surf',
        template: __webpack_require__(/*! raw-loader!./surf.component.html */ "./node_modules/raw-loader/index.js!./src/app/surf/surf.component.html"),
        styles: [__webpack_require__(/*! ./surf.component.css */ "./src/app/surf/surf.component.css")]
    })
], SurfComponent);



/***/ }),

/***/ "./src/app/tribalist/tribalist.component.css":
/*!***************************************************!*\
  !*** ./src/app/tribalist/tribalist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display:-webkit-box;\n  display:flex;\n  align-content:center;\n  -webkit-box-pack:center;\n          justify-content:center;\n  flex-wrap:wrap;\n}\n\n.column{\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.background {\n  background-color:#0066bf;\n}\n\n.padding {\n  padding-top:2em;\n  padding-bottom:2em;\n}\n\n.title {\n  background: -webkit-gradient(linear, left top, right top, from(rgba(62,59,130,1)), color-stop(100%, rgba(0,93,173,1)), to(rgba(0,212,255,1)));\n  background: linear-gradient(90deg, rgba(62,59,130,1) 0%, rgba(0,93,173,1) 100%, rgba(0,212,255,1) 100%);\n  color:white;\n  padding:10px 10px;\n  font-family:'Helvetica Neue';\n  font-weight:600;\n  border-Radius:10px;\n  text-align:center;\n}\n\n.text {\n  font-size: calc(14px + (19 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color:rgba(0,0,0,0.7);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJpYmFsaXN0L3RyaWJhbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZJQUF1RztFQUF2Ryx1R0FBdUc7RUFDdkcsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvRUFBb0U7RUFDcEUscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdHJpYmFsaXN0L3RyaWJhbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGZsZXgtd3JhcDp3cmFwO1xufVxuXG4uY29sdW1ue1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IzAwNjZiZjtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDoyZW07XG4gIHBhZGRpbmctYm90dG9tOjJlbTtcbn1cblxuLnRpdGxlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDYyLDU5LDEzMCwxKSAwJSwgcmdiYSgwLDkzLDE3MywxKSAxMDAlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcbiAgY29sb3I6d2hpdGU7XG4gIHBhZGRpbmc6MTBweCAxMHB4O1xuICBmb250LWZhbWlseTonSGVsdmV0aWNhIE5ldWUnO1xuICBmb250LXdlaWdodDo2MDA7XG4gIGJvcmRlci1SYWRpdXM6MTBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiBjYWxjKDE0cHggKyAoMTkgLSAxNCkgKiAoKDEwMHZ3IC0gMzAwcHgpIC8gKDE2MDAgLSAzMDApKSk7XG4gIGNvbG9yOnJnYmEoMCwwLDAsMC43KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tribalist/tribalist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tribalist/tribalist.component.ts ***!
  \**************************************************/
/*! exports provided: TribalistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TribalistComponent", function() { return TribalistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TribalistComponent = class TribalistComponent {
    constructor() {
        this.active = "Projects";
    }
    ngOnInit() {
    }
};
TribalistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tribalist',
        template: __webpack_require__(/*! raw-loader!./tribalist.component.html */ "./node_modules/raw-loader/index.js!./src/app/tribalist/tribalist.component.html"),
        styles: [__webpack_require__(/*! ./tribalist.component.css */ "./src/app/tribalist/tribalist.component.css")]
    })
], TribalistComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanm.tan/Desktop/Portfolio Website/portfolio-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map