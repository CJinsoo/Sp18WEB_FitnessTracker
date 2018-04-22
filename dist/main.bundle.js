webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class = \"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var tracker_component_1 = __webpack_require__("./src/app/tracker/tracker.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var share_component_1 = __webpack_require__("./src/app/share/share.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var signin_component_1 = __webpack_require__("./src/app/signin/signin.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                home_component_1.HomeComponent,
                tracker_component_1.TrackerComponent,
                profile_component_1.ProfileComponent,
                share_component_1.ShareComponent,
                signin_component_1.SigninComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'tracker', component: tracker_component_1.TrackerComponent },
                    { path: 'profile', component: profile_component_1.ProfileComponent },
                    { path: 'share', component: share_component_1.ShareComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: 'signin', component: signin_component_1.SigninComponent }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "h1 {\n    padding: 1rem 0;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Fitness Tracker!</h1>\n<div class = \"row\">\n    <div class=\"col\">     \n      <div class=\"card\">\n          <img class=\"card-img-top\" src=\"../masakinewhair.gif\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n    </div>\n    <div class=\"col\">     \n        <div class=\"card\">\n            <img class=\"card-img-top\" src=\"masakinewhair.gif\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n        </div>\n    </div>\n    <div class=\"col\">     \n      <div class=\"card\">\n          <img class=\"card-img-top\" src=\"masakinewhair.gif\" alt=\"Card image cap\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Card title</h5>\n            <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n            <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n          </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding: 1rem 0;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id = \"messages\">\n  <div class = \"alert alert-success\">\n      {{messages[0]}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.messages = ['Choose activities and start recording your workout results', 'Overview, edit your profile!'];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/model/tracker.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Tracker = /** @class */ (function () {
    function Tracker() {
        this.Members = [];
        this.ExerciseStack = [
            "Squat", "Leg Press", "Lunge", "Deadlift", "Leg Extension", "Leg Curl", "Standing Calf Raise", "Seated Calf Raise",
            "Bench Press", "Chest fly", "Push Up", "Pull Down", "Pull Up", "Shoulder Press", "Triceps Extension", "Biceps Curl",
            "Crunch", "Lunge", "Plank", "Running", "Mild Walking", "Fast Walking", "Yoga", "Tabata", "Dance", "Step"
        ];
    }
    return Tracker;
}());
exports.Tracker = Tracker;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var Profile = /** @class */ (function () {
    function Profile() {
        this.Name = "Jane Doe";
        this.Age = 20;
        this.Heightft = 5;
        this.Heightin = 1;
        this.Weight = 100;
        this.Email = "example@gmail.com";
        this.Goal = "";
    }
    return Profile;
}());
exports.Profile = Profile;
var Activity = /** @class */ (function () {
    function Activity() {
    }
    return Activity;
}());
exports.Activity = Activity;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light bg-light\">\n  <div class = \"container\">\n    <a class=\"navbar-brand\" routerLink = \"/home\">Fitness Tracker</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/tracker\" routerLinkActive=\"active\">Tracker</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/share\" routerLinkActive=\"active\">Share</a>\n        </li>\n      </ul>\n      <span class=\"nav-item justify-content:between\"><a class=\"nav-link\" routerLink=\"/signin\" routerLinkActive=\"active\">Sign in</a></span>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messages></app-messages>\n<div class=\"row container\" *ngIf=\"!Me\">\n  <input #Name /><button (click) = \"login(Name.value)\" >Login</button>\n</div>\n<div class=\"container\" *ngIf=\"Me\">\n  <div class = \"row\">\n    <div class = \"col-4\">\n      <div>\n        <img class=\"card-img-top\" src=\"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png\" alt=\"Card image cap\">\n        <div style=\"position:relative;\">\n            <a class='btn btn-primary' href='javascript:;'>\n                Choose File...\n              <input type=\"file\" style='position:absolute;z-index:2;top:0;left:0;filter: alpha(opacity=0);-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";opacity:0;background-color:transparent;color:transparent;' name=\"file_source\" size=\"40\"  onchange='$(\"#upload-file-info\").html($(this).val());'>\n            </a>\n            &nbsp;\n            <span class='label label-info' id=\"upload-file-info\"></span>\n    </div>\n      </div>\n    </div>\n    <div class = \"col-8\" *ngIf = !isEdit>\n      <ul class=\"list-group list-group-flush\">\n          <li class=\"list-group-item\">User Id: {{Me.UserId}}</li>\n          <li class=\"list-group-item\">Name: {{Me.Name}}</li>\n          <li class=\"list-group-item\">Age: {{Me.Age}} </li>\n          <li class=\"list-group-item\">Gender: {{Me.Gender}} </li>\n          <li class=\"list-group-item\">Height: {{Me.Heightft}}\" {{Me.Heightin}}' </li>\n          <li class=\"list-group-item\">Weight: {{Me.Weight}} lb</li>\n          <li class=\"list-group-item\">BMI: {{Me.Bmi}} </li>\n          <li class=\"list-group-item\">Goal: {{Me.Goal}} </li>\n          <li class=\"list-group-item\">Email: {{Me.Email}} </li>\n      </ul>\n      <button class=\"btn btn-primary btn-sm\" style = \"float:right\" (click) = \"toggleEdit()\">Edit User</button>\n      <!--<a href=\"#\" class=\"btn btn-primary btn-sm\" style = \"float:right\">Edit</a>-->\n    </div>\n    <div class = \"col-8\" *ngIf = isEdit>\n        <div class=\"form-group row\">\n            <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\n            <div class=\"col-10\">\n              <input #name class=\"form-control\" placeholder = \"Jane Doe\" type=\"text\" [(ngModel)] = \"Me.Name\" name = \"Name\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"example-search-input\" class=\"col-2 col-form-label\">Age</label>\n            <div class=\"col-10\">\n              <input #age class=\"form-control\" placeholder = \"20\" type=\"number\"  [(ngModel)] = \"Me.Age\" name = \"Age\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"example-email-input\" class=\"col-2 col-form-label\">Height</label>\n            <div class=\"col\">\n              <input #heightF class=\"form-control col\" placeholder = \"ft\" type=\"number\" [(ngModel)] = \"Me.Heightft\" name = \"Heightft\">\n            </div>\n            <div class = \"col\">\n              <input #heightI class=\"form-control col\" placeholder = \"in\" type=\"number\" [(ngModel)] = \"Me.Heightin\" name = \"Heightin\">\n            </div>\n          </div>\n          <div class=\"form-group row\">\n            <label for=\"example-url-input\" class=\"col-2 col-form-label\">Weight</label>\n            <div class=\"col-10\">\n              <input #weight class=\"form-control\" placeholder = \"lb\" type=\"number\" [(ngModel)] = \"Me.Weight\" name = \"Weight\">\n            </div>\n          </div>\n          \n            <div class=\"form-group row\">\n              <label for=\"example-search-input\" class=\"col-2 col-form-label\">Goal</label>\n              <div class=\"col-10\">\n                <input #goal class=\"form-control\" placeholder = \"ex) Lose 5lbs\" type=\"text\" [(ngModel)] = \"Me.Goal\" name = \"Goal\">\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"example-email-input\" class=\"col-2 col-form-label\">Email</label>\n              <div class=\"col-10\">\n                <input #email class=\"form-control\" placeholder = \"example@gmail.com\" type=\"email\" [(ngModel)] = \"Me.Email\" name = \"Email\">\n              </div>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"female\">\n              <label class=\"form-check-label\" for=\"inlineRadio1\">Female</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"male\">\n              <label class=\"form-check-label\" for=\"inlineRadio2\">Male</label>\n            </div>\n        <button class=\"btn btn-primary btn-sm\" style = \"float:right\" (click) = \"toggleEdit()\" (click) = \"bmiCalculator()\" (click) = \"saveProfile($event)\"> Save</button>\n       \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var tracker_1 = __webpack_require__("./src/app/model/tracker.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http) {
        this.http = http;
        this.Model = new tracker_1.Tracker();
        this._api = "http://localhost:8080/fitTracker";
        this.isEdit = false;
    }
    ProfileComponent.prototype.bmiCalculator = function () {
        var height = this.Me.UserProfile.Heightft * 12 + this.Me.UserProfile.Heightin;
        var num = this.Me.UserProfile.Weight / height / height * 703;
        this.Me.UserProfile.Bmi = Math.round(num * 100) / 100;
        console.log('running bmicalculator' + this.Me.UserProfile.Bmi);
        return Math.round(num * 100) / 100;
    };
    ProfileComponent.prototype.findUser = function (userId) {
        this.Me = this.Model.Members.find(function (obj) { return obj.UserProfile.UserId === userId; });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        /*
        this.Me.UserProfile.Name = "Jane Doe";
        this.Me.UserProfile.Age = 20;
        this.Me.UserProfile.Heightft = 5;
        this.Me.UserProfile.Heightin = 1;
        this.Me.UserProfile.Weight = 100;
        this.Me.UserProfile.Email = "example@gmail.com";
        */
        //this.bmi = this.bmiCalculator((this.heightft * 12 + this.heightin), this.weight);
    };
    //this.weight / (this.heightft * 12 + this.heightin)*(this.heightft * 12 + this.heightin)) * 703
    ProfileComponent.prototype.toggleEdit = function () {
        this.isEdit = !this.isEdit;
    };
    ProfileComponent.prototype.login = function (id) {
        var _this = this;
        this.http.get(this._api + "/exercises", { params: { userId: id } })
            .subscribe(function (data) { return _this.Me = { UserId: id, UserProfile: data.json() }; });
        //console.log(this.Me.UserProfile.Name)
    };
    ProfileComponent.prototype.saveProfile = function (e, name, age, heightF, heightI, weight, goal, email) {
        this.http.post(this._api + "/exercises/save", { UserId: this.Me.UserId, Name: name, Age: age, Gender: undefined, Email: email, Heightft: heightF, Heightin: heightI, Weight: weight, Bmi: this.bmiCalculator(), Goal: goal })
            .subscribe();
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/share/share.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  share works!\n</p>\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'app-share',
            template: __webpack_require__("./src/app/share/share.component.html"),
            styles: [__webpack_require__("./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;


/***/ }),

/***/ "./src/app/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" *ngIf = \"!Me\">\n    <input #Name /><button (click) = \"login(Name.value)\" >Login</button>\n</div>\n<div class = \"container\" *ngIf = \"Me\">\n    <h2>You are already logged in</h2>\n</div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var tracker_1 = __webpack_require__("./src/app/model/tracker.ts");
var SigninComponent = /** @class */ (function () {
    function SigninComponent(http) {
        this.http = http;
        this.Model = new tracker_1.Tracker();
        this._api = "http://localhost:8080/fitTracker";
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;


/***/ }),

/***/ "./src/app/tracker/tracker.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tracker/tracker.component.html":
/***/ (function(module, exports) {

module.exports = "<app-messages></app-messages>\n<div class = \"container\">\n    <div class = \"row\">\n        <div class = \"col-sm-3\">\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">{{this.UserId}}</li>\n                <li class=\"list-group-item\">{{this.Name}}</li>\n                <li class=\"list-group-item\">Weight: {{this.Weight}} lb</li>\n                <li class=\"list-group-item\">BMI: {{this.Bmi}} </li>\n                <li class=\"list-group-item\">Goal: {{this.Goal}} </li>\n            </ul>\n        </div>\n        <div class = \"col-sm-5\">\n            <div class=\"form-group\">\n                <label for=\"exampleFormControlSelect2\">Select Your Workout</label>\n                <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\">\n                    <option *ngFor = \"let item of Model.ExerciseStack\">\n                        {{item}}\n                    </option>\n                </select>\n            </div>\n        </div>\n    </div>\n   \n</div>"

/***/ }),

/***/ "./src/app/tracker/tracker.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var tracker_1 = __webpack_require__("./src/app/model/tracker.ts");
var TrackerComponent = /** @class */ (function () {
    function TrackerComponent(http) {
        this.http = http;
        this.Model = new tracker_1.Tracker();
        this._api = "http://localhost:8080/fitTracker";
        //http.get(this._api + "/exercises/getExercises").subscribe(data=> this.Me.MyQuotes = data.json())
    }
    TrackerComponent.prototype.ngOnInit = function () {
    };
    TrackerComponent = __decorate([
        core_1.Component({
            selector: 'app-tracker',
            template: __webpack_require__("./src/app/tracker/tracker.component.html"),
            styles: [__webpack_require__("./src/app/tracker/tracker.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], TrackerComponent);
    return TrackerComponent;
}());
exports.TrackerComponent = TrackerComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map