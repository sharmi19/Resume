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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Resume';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _interests_interests_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interests/interests.component */ "./src/app/interests/interests.component.ts");
/* harmony import */ var _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contactme/contactme.component */ "./src/app/contactme/contactme.component.ts");















const appRoutes = [
    { path: "portfolio", component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"] },
    { path: "navbar", component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"] },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: "skills", component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"] },
    { path: "experience", component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"] },
    { path: "education", component: _education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"] },
    { path: "contactme", component: _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__["ContactmeComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
        _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"],
        _interests_interests_component__WEBPACK_IMPORTED_MODULE_11__["InterestsComponent"],
        _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__["ContactmeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _skills_skills_component__WEBPACK_IMPORTED_MODULE_8__["SkillsComponent"],
                    _experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_10__["EducationComponent"],
                    _interests_interests_component__WEBPACK_IMPORTED_MODULE_11__["InterestsComponent"],
                    _contactme_contactme_component__WEBPACK_IMPORTED_MODULE_12__["ContactmeComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contactme/contactme.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactme/contactme.component.ts ***!
  \**************************************************/
/*! exports provided: ContactmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactmeComponent", function() { return ContactmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");



class ContactmeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactmeComponent.ɵfac = function ContactmeComponent_Factory(t) { return new (t || ContactmeComponent)(); };
ContactmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactmeComponent, selectors: [["app-contactme"]], decls: 22, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"], [1, "bgcolor", "transbox"], [1, "textpattern"], [1, "outerbox"]], template: function ContactmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get in Touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My personal mailing address : sharmisphs@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Call me : 9073355422");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Facebook: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "https://m.facebook.com/sharmisphs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " LinkedIn: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "https://www.linkedin.com/in/sharmi-chakraborty-a0b444122/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(/assets/img/mountain.jpg);\n  display: block;\n  padding: 0px;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.textpattern[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-family: \"Brush Script MT\", cursive;\n  font-size: 40px;\n  color: black;\n  text-align: center;\n}\n\n.outerbox[_ngcontent-%COMP%] {\n  margin-left: 3%;\n  margin-top: 1%;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 22px;\n  color: black;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdG1lL0M6XFxVc2Vyc1xcU2hhcm1pXFxEb2N1bWVudHNcXFJlc3VtZVxcUmVzdW1lXFxyZXN1bWUvc3JjXFxhcHBcXGNvbnRhY3RtZVxcY29udGFjdG1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0bWUvY29udGFjdG1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEdBQUE7RUFNQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNIRjs7QURLQTtFQUNFLGVBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RtZS9jb250YWN0bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVxyXG4gICAgKSxcclxuICAgIHVybCgvYXNzZXRzL2ltZy9tb3VudGFpbi5qcGcpO1xyXG4gIC8vIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvd29yay5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGV4dHBhdHRlcm4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5vdXRlcmJveCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcbiIsIi5iZ2NvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpKSwgdXJsKC9hc3NldHMvaW1nL21vdW50YWluLmpwZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi50ZXh0cGF0dGVybiB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBmb250LWZhbWlseTogXCJCcnVzaCBTY3JpcHQgTVRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm91dGVyYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactme',
                templateUrl: './contactme.component.html',
                styleUrls: ['./contactme.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");



class EducationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 34, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"], [1, "bgcolor", "transbox"], [1, "textpattern"], [1, "timeline"], [1, "timespan"], [1, "educationalstyle", "educationalcollime"], [1, "educationalstyle", "educationalcolpink"], [1, "educationalstyle", "educationalcolyellow"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Educational Qualification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2014-2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " B-Tech,Information Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Institute: Heritage Institute of Technology,West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2012-2014");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " All India Senior School Certificate Examination");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " School: Delhi Public School,West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2012");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " West Bengal Board of Secondary Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " School: South Point High School,West Bengal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(/assets/img/books.jpg);\n  display: block;\n  padding: 0px;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.textpattern[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-family: \"Brush Script MT\", cursive;\n  font-size: 40px;\n  color: black;\n  text-align: center;\n}\n\nul.timeline[_ngcontent-%COMP%] {\n  list-style-type: none;\n  position: relative;\n  margin-left: 32.5%;\n  margin-top: 6%;\n}\n\nul.timeline[_ngcontent-%COMP%]:before {\n  content: \" \";\n  background: black;\n  display: inline-block;\n  position: absolute;\n  left: 29px;\n  width: 2px;\n  height: 100%;\n  z-index: 400;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  padding-left: 20px;\n}\n\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \" \";\n  background: black;\n  display: inline-block;\n  position: absolute;\n  border-radius: 50%;\n  border: 3px solid #22c0e8;\n  left: 20px;\n  width: 20px;\n  height: 20px;\n  z-index: 400;\n}\n\n.timespan[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 19px;\n  color: black;\n}\n\n.educationalstyle[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 20px;\n}\n\n.educationalcolpink[_ngcontent-%COMP%] {\n  color: #7a3d47;\n}\n\n.educationalcollime[_ngcontent-%COMP%] {\n  color: #008000;\n}\n\n.educationalcolyellow[_ngcontent-%COMP%] {\n  color: #4f345f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL0M6XFxVc2Vyc1xcU2hhcm1pXFxEb2N1bWVudHNcXFJlc3VtZVxcUmVzdW1lXFxyZXN1bWUvc3JjXFxhcHBcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkdBQUE7RUFNQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDREY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLG1EQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsY0FBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtBQ0tGIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ2NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpXHJcbiAgICApLFxyXG4gICAgdXJsKC9hc3NldHMvaW1nL2Jvb2tzLmpwZyk7XHJcbiAgLy8gd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy93b3JrLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50ZXh0cGF0dGVybiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxudWwudGltZWxpbmUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMyLjUlO1xyXG4gIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbnVsLnRpbWVsaW5lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyOXB4O1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDQwMDtcclxufVxyXG51bC50aW1lbGluZSA+IGxpIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxudWwudGltZWxpbmUgPiBsaTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMyMmMwZTg7XHJcbiAgbGVmdDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgei1pbmRleDogNDAwO1xyXG59XHJcbi50aW1lc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5lZHVjYXRpb25hbHN0eWxlIHtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uZWR1Y2F0aW9uYWxjb2xwaW5rIHtcclxuICBjb2xvcjogcmdiKDEyMiwgNjEsIDcxKTtcclxufVxyXG4uZWR1Y2F0aW9uYWxjb2xsaW1lIHtcclxuICBjb2xvcjogIzAwODAwMDtcclxufVxyXG4uZWR1Y2F0aW9uYWxjb2x5ZWxsb3cge1xyXG4gIGNvbG9yOiByZ2IoNzksIDUyLCA5NSk7XHJcbn1cclxuIiwiLmJnY29sb3Ige1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNikpLCB1cmwoL2Fzc2V0cy9pbWcvYm9va3MuanBnKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRleHRwYXR0ZXJuIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG51bC50aW1lbGluZSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMzIuNSU7XG4gIG1hcmdpbi10b3A6IDYlO1xufVxuXG51bC50aW1lbGluZTpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyOXB4O1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDQwMDtcbn1cblxudWwudGltZWxpbmUgPiBsaSB7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbnVsLnRpbWVsaW5lID4gbGk6YmVmb3JlIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjMjJjMGU4O1xuICBsZWZ0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB6LWluZGV4OiA0MDA7XG59XG5cbi50aW1lc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZWR1Y2F0aW9uYWxzdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVkdWNhdGlvbmFsY29scGluayB7XG4gIGNvbG9yOiAjN2EzZDQ3O1xufVxuXG4uZWR1Y2F0aW9uYWxjb2xsaW1lIHtcbiAgY29sb3I6ICMwMDgwMDA7XG59XG5cbi5lZHVjYXRpb25hbGNvbHllbGxvdyB7XG4gIGNvbG9yOiAjNGYzNDVmO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ExperienceComponent_div_12_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5.point);
} }
function ExperienceComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " & ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Working on:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExperienceComponent_div_12_div_11_Template, 4, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Role : ", item_r3.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Company : ", item_r3.company, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.set);
} }
class ExperienceComponent {
    constructor() {
        this.experience = [];
    }
    ngOnInit() {
        this.experience = [
            {
                time: "Nov-2018 to Present",
                role: "Software Engineer",
                company: "Eka Software Solutions Pvt Ltd",
                set: [
                    {
                        point: "Generic framework based on Metadata and Workflow driven architecture, that can be used for building various applications"
                    },
                    {
                        point: "Use of Reactive Forms as the whole framework is built on top of Angular 7"
                    },
                    {
                        point: "Delivery of 8+ applications from a single code base using this aforesaid framework"
                    },
                    {
                        point: "Developed an Admin UI setup for handling MongoDB documents for Metadata and Workflow driven applications"
                    }
                ]
            }
        ];
    }
}
ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) { return new (t || ExperienceComponent)(); };
ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExperienceComponent, selectors: [["app-experience"]], decls: 13, vars: 1, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], [1, "bgcolor", "transbox"], [1, "textpattern"], [4, "ngFor", "ngForOf"], [1, "timespan"], [1, "role"], [1, "skillformat"], [2, "padding-left", "5%"], [1, "set"]], template: function ExperienceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Work Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceComponent_div_12_Template, 12, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(/assets/img/files.jpg);\n  display: block;\n  padding: 0px;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.textpattern[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-family: \"Brush Script MT\", cursive;\n  font-size: 40px;\n  color: black;\n  text-align: center;\n}\n\n.timespan[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 18px;\n  color: black;\n  text-align: left;\n  padding-left: 1.5%;\n}\n\n.role[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 23px;\n  color: #008000;\n  text-align: left;\n  padding-left: 1.5%;\n}\n\n.skillformat[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 18px;\n  color: darkmagenta;\n  text-align: left;\n  padding-left: 1.5%;\n}\n\n.set[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 19px;\n  color: black;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS9DOlxcVXNlcnNcXFNoYXJtaVxcRG9jdW1lbnRzXFxSZXN1bWVcXFJlc3VtZVxccmVzdW1lL3NyY1xcYXBwXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyR0FBQTtFQU1BLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLDRCQUFBO0VBQ0Esc0JBQUE7QUNMRjs7QURPQTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxtREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBREtBO0VBQ0UsbURBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsbURBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdjb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KVxyXG4gICAgKSxcclxuICAgIHVybCgvYXNzZXRzL2ltZy9maWxlcy5qcGcpO1xyXG4gIC8vIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvd29yay5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGV4dHBhdHRlcm4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aW1lc3BhbiB7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xyXG59XHJcbi5yb2xlIHtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBjb2xvcjogIzAwODAwMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMS41JTtcclxufVxyXG4uc2tpbGxmb3JtYXQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiBkYXJrbWFnZW50YTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMS41JTtcclxufVxyXG4uc2V0IHtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iLCIuYmdjb2xvciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSksIHVybCgvYXNzZXRzL2ltZy9maWxlcy5qcGcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4udGV4dHBhdHRlcm4ge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgZm9udC1mYW1pbHk6IFwiQnJ1c2ggU2NyaXB0IE1UXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aW1lc3BhbiB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxLjUlO1xufVxuXG4ucm9sZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgY29sb3I6ICMwMDgwMDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMS41JTtcbn1cblxuLnNraWxsZm9ybWF0IHtcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogZGFya21hZ2VudGE7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMS41JTtcbn1cblxuLnNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-experience",
                templateUrl: "./experience.component.html",
                styleUrls: ["./experience.component.scss"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");



class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"], [1, "bgcolor"], [1, "row"], [1, "col-md-6"], ["src", "assets/img/Sharmi.jpg", 1, "profileimage"], [1, "col-md-6", "headersname"], [2, "color", "#C71585"], [1, "textpattern"], [2, "color", "black"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Hello,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " I'm Sharmi Chakraborty. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Web Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background-color: black;\n  padding: 0px;\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assets/img/rain.jpg);\n  width: 100vw;\n  display: block;\n  padding: 0px;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.profileimage[_ngcontent-%COMP%] {\n  width: 45%;\n  margin-top: 13%;\n  margin-left: 30%;\n}\n\n#main[_ngcontent-%COMP%] {\n  width: 35%;\n  display: flex;\n}\n\n#main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.headersname[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 65px;\n  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;\n}\n\n.textpattern[_ngcontent-%COMP%] {\n  margin-left: 59%;\n  margin-top: 0%;\n  font-family: \"Brush Script MT\", cursive;\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFNoYXJtaVxcRG9jdW1lbnRzXFxSZXN1bWVcXFJlc3VtZVxccmVzdW1lL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwR0FBQTtFQUtBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDSEY7O0FES0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDRkY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBREdBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNlLFVBQUE7RUFDYixPQUFBO0FDRUY7O0FEQUE7RUFDRSxjQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7QUNHRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnY29sb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpXHJcbiAgICApLFxyXG4gICAgdXJsKC9hc3NldHMvaW1nL3JhaW4uanBnKTtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5yb3cge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnByb2ZpbGVpbWFnZSB7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW4tdG9wOiAxMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG4jbWFpbiB7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jbWFpbiBkaXYge1xyXG4gIC1tcy1mbGV4OiAxOyAvKiBJRSAxMCAqL1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLmhlYWRlcnNuYW1lIHtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogNjVweDtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCAjZmYwMDAwLCAwIDAgNXB4ICMwMDAwZmY7XHJcbiAgLy8gdGV4dC1zaGFkb3c6IGgtc2hhZG93IHYtc2hhZG93IGJsdXItcmFkaXVzIGJsYWNrfG5vbmV8aW5pdGlhbHxpbmhlcml0O1xyXG5cclxuICAvLyAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDY1cHgvMS40ZW0gbHVsby1jbGVhbi13MDEtb25lLWJvbGQsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRleHRwYXR0ZXJuIHtcclxuICBtYXJnaW4tbGVmdDogNTklO1xyXG4gIG1hcmdpbi10b3A6IDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4iLCIuYmdjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSksIHVybCgvYXNzZXRzL2ltZy9yYWluLmpwZyk7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5wcm9maWxlaW1hZ2Uge1xuICB3aWR0aDogNDUlO1xuICBtYXJnaW4tdG9wOiAxMyU7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG59XG5cbiNtYWluIHtcbiAgd2lkdGg6IDM1JTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4gZGl2IHtcbiAgLW1zLWZsZXg6IDE7XG4gIC8qIElFIDEwICovXG4gIGZsZXg6IDE7XG59XG5cbi5oZWFkZXJzbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIFwiQ29taWMgU2Fuc1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDY1cHg7XG4gIHRleHQtc2hhZG93OiAwIDAgM3B4ICNmZjAwMDAsIDAgMCA1cHggIzAwMDBmZjtcbn1cblxuLnRleHRwYXR0ZXJuIHtcbiAgbWFyZ2luLWxlZnQ6IDU5JTtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDM1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/interests/interests.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interests/interests.component.ts ***!
  \**************************************************/
/*! exports provided: InterestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestsComponent", function() { return InterestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class InterestsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
InterestsComponent.ɵfac = function InterestsComponent_Factory(t) { return new (t || InterestsComponent)(); };
InterestsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestsComponent, selectors: [["app-interests"]], decls: 2, vars: 0, template: function InterestsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "interests works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZXN0cy9pbnRlcmVzdHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interests',
                templateUrl: './interests.component.html',
                styleUrls: ['./interests.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return ["active"]; };
const _c2 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() {
    }
    ngOnInit() {
        this.home = "/home";
        this.skills = "/skills";
        this.experience = "/experience";
        this.education = "/education";
        this.contactme = "/contactme";
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 16, vars: 35, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "topnav"], [3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "SKILLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "EXPERIENCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EDUCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.home))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.skills))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.experience))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.education))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.contactme))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #333;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n\n.topnav[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media screen and (max-width: 600px) {\n  .topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n    display: none;\n  }\n\n  .topnav[_ngcontent-%COMP%]   a.icon[_ngcontent-%COMP%] {\n    float: right;\n    display: block;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .topnav.responsive[_ngcontent-%COMP%] {\n    position: relative;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .topnav.responsive[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcU2hhcm1pXFxEb2N1bWVudHNcXFJlc3VtZVxcUmVzdW1lXFxyZXN1bWUvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLHlDQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxhQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxZQUFBO0lBQ0EsY0FBQTtFQ0VGO0FBQ0Y7O0FEQ0E7RUFDRTtJQUNFLGtCQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxNQUFBO0VDRUY7O0VEQUE7SUFDRSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG5cclxuLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udG9wbmF2IC5pY29uIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50b3BuYXYgYTpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAudG9wbmF2IGEuaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLnRvcG5hdi5yZXNwb25zaXZlIC5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG4iLCJib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRvcG5hdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG5cbi50b3BuYXYgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnRvcG5hdiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udG9wbmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udG9wbmF2IC5pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRvcG5hdiBhOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLnRvcG5hdiBhLmljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRvcG5hdi5yZXNwb25zaXZlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAudG9wbmF2LnJlc3BvbnNpdmUgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAudG9wbmF2LnJlc3BvbnNpdmUgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuLnJvdyB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");



class PortfolioComponent {
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);
        this.fillerContent = Array.from({ length: 50 }, () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 0, vars: 0, template: function PortfolioComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio',
                templateUrl: './portfolio.component.html',
                styleUrls: ['./portfolio.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] }]; }, null); })();


/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function SkillsComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width:", item_r1.percentage, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.percentage, " ");
} }
class SkillsComponent {
    constructor() {
        this.skillset = [];
    }
    ngOnInit() {
        this.skillset = [
            { name: "Angular", percentage: "85%" },
            { name: "Javasript", percentage: "85%" },
            { name: "HTML5", percentage: "90%" },
            { name: "CSS", percentage: "80%" },
            { name: "NodeJS", percentage: "45%" },
            { name: "Java", percentage: "40%" },
            { name: "C", percentage: "30%" },
            { name: "MongoDB", percentage: "95%" },
            { name: "MySQL", percentage: "95%" },
            { name: "GIT", percentage: "90%" }
        ];
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 12, vars: 1, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["charset", "utf-8"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], [1, "bgcolor"], [1, "textpattern"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-2", "skillset"], [1, "col-md-10"], ["id", "myBar", 1, "w3-container", "w3-green"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Knowledge Level in Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillsComponent_div_11_Template, 7, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillset);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".bgcolor[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/assets/img/work.jpg);\n  display: block;\n  padding: 0px;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.textpattern[_ngcontent-%COMP%] {\n  margin-top: 1%;\n  font-size: 40px;\n  color: black;\n  text-align: center;\n  font-family: \"Brush Script MT\", cursive;\n}\n\n.blackcol[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.skillset[_ngcontent-%COMP%] {\n  font-family: \"Comic Sans MS\", \"Comic Sans\", cursive;\n  font-size: 20px;\n  color: black;\n  text-align: center;\n}\n\n.row[_ngcontent-%COMP%] {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.w3-green[_ngcontent-%COMP%] {\n  background-color: #008000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL0M6XFxVc2Vyc1xcU2hhcm1pXFxEb2N1bWVudHNcXFJlc3VtZVxcUmVzdW1lXFxyZXN1bWUvc3JjXFxhcHBcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEdBQUE7RUFNQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSw0QkFBQTtFQUNBLHNCQUFBO0FDTEY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FDSkY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FES0E7RUFDRSxtREFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLG9DQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcclxuICAgICksXHJcbiAgICB1cmwoL2Fzc2V0cy9pbWcvd29yay5qcGcpO1xyXG4gIC8vIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvd29yay5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4udGV4dHBhdHRlcm4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xyXG59XHJcbi5ibGFja2NvbCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5za2lsbHNldCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29taWMgU2FucyBNU1wiLCBcIkNvbWljIFNhbnNcIiwgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucm93IHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbi53My1ncmVlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5iZ2NvbG9yIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKSwgdXJsKC9hc3NldHMvaW1nL3dvcmsuanBnKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRleHRwYXR0ZXJuIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkJydXNoIFNjcmlwdCBNVFwiLCBjdXJzaXZlO1xufVxuXG4uYmxhY2tjb2wge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5za2lsbHNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvbWljIFNhbnMgTVNcIiwgXCJDb21pYyBTYW5zXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnczLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODAwMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-skills",
                templateUrl: "./skills.component.html",
                styleUrls: ["./skills.component.scss"]
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sharmi\Documents\Resume\Resume\resume\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map