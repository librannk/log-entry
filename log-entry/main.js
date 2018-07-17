(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-body{\r\n  max-height: 500px;\r\n  overflow: auto;\r\n   }\r\n.modal-header {\r\n    padding: 2px 16px;\r\n    background-color: #5cb85c;\r\n    color: white;\r\n}\r\n.modal-footer {\r\n  padding: 2px 16px;\r\n  background-color: #5cb85c;\r\n  color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark  bg-dark flex-md-nowrap p-0 shadow\">\n  <a class=\"navbar-brand col-sm-3 col-md-2\" href=\"#\">NCR Corporation</a>\n  <ul class=\"navbar-nav px-3\">\n    <li class=\"nav-item text-nowrap\">\n      <a class=\"nav-link\" href=\"#\">Hi, User Name</a>\n    </li>\n  </ul>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <main role=\"main\" class=\"col-md-12 col-lg-12\">\n      <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3\">\n        <h1 class=\"h2\">Logger dashboard</h1>\n        <div class=\"btn-toolbar mb-3 mb-md-0\">\n          <div class=\"btn-group mr-1\">\n            <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)= \"showModal('add')\">Add Log</button>\n          </div>\n          <div class=\"btn-group mr-2\">\n            <button class=\"btn btn-sm btn-outline-secondary\">Share</button>\n            <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\n          </div>\n          <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n            <span data-feather=\"calendar\"></span>\n            This week\n          </button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-6\">\n          <div class=\"dataTables_length\" id=\"dataTable_length\">\n            <label>Show entries\n              <select name=\"dataTable_length\" aria-controls=\"dataTable\" class=\"form-control form-control-sm\">\n                <option value=\"10\">10</option>\n                <option value=\"25\">25</option>\n                <option value=\"50\">50</option>\n                <option value=\"100\">100</option>\n              </select>\n            </label>\n          </div>\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n          <div id=\"dataTable_filter\" class=\"dataTables_filter\">\n            <label>Search:\n              <input type=\"search\" class=\"form-control form-control-sm\" placeholder=\"\" aria-controls=\"dataTable\">\n            </label>\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped table-sm\">\n          <thead>\n            <tr>\n              <th>ID</th>\n              <th>Log Name</th>\n              <th>CHANGE REQUEST#</th>\n              <th>JIRA/RFC#</th>\n              <th>Contact</th>\n              <th>Planview Project</th>\n              <th>Description</th>\n              <th>Special Installation Info</th>\n              <th>Aol Info</th>\n              <th>Name of Document Changed</th>\n              <th>File Modified</th>\n              <th>ER64R06</th>\n              <th>Applied to Prod</th>\n              <th>Edit</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let l of logs; let i = index\">\n              <td>{{l.id}}</td>\n              <td>{{l.log_name}}</td>\n              <td>{{l.change_request}}</td>\n              <td>{{l.rfc}}</td>\n              <td>{{l.contact}}</td>\n              <td>{{l.planview_project}}</td>\n              <td>{{l.description}}</td>\n              <td>{{l.special__installation__info}}</td>\n              <td>{{l.aol_info}}</td>\n              <td>{{l.name_of__document__changed}}</td>\n              <td>{{l.files_modified}}</td>\n              <td>{{l.er64r06}}</td>\n              <td>{{l.applied_to_erpprod}}</td>\n              <td>\n                <button type=\"button\" class=\"btn\" (click)=\"showModal('edit', i)\">Edit</button>\n              </td>\n              <td>\n                <button type=\"button\" (click)=\"onDelete(l)\" class=\"btn btn-danger\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </main>\n  </div>\n</div>\n\n<div class=\"modal fade\" [ngClass]=\"{'show d-block': modalType}\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Log</h5>\n        <button type=\"button\" class=\"close\" (click)=\"hideModal()\">\n          <span>&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" role=\"form\" id=\"addLogForm\">\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"title\">TITLE</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"TITLE\" [(ngModel)]=\"log.id\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"log_name\">Log Name</label>\n            <div class=\"col-sm-12\">\n              <select class=\"form-control\" id=\"log_name\" name=\"log_name\" [(ngModel)]=\"log.log_name\">\n                <option value=\"\" disabled>Select Log</option>\n                <option>MFL</option>\n                <option>OTC</option>\n                <option>SPP</option>\n                <option>RTR</option>\n                <option>SCP</option>\n                <option>CFS</option>\n                <option>EPC</option>\n                <option>Other</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"change_request\">CHANGE REQUEST#</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"change_request\" name=\"change_request\" placeholder=\"CHANGE REQUEST#\" [(ngModel)]=\"log.change_request\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"rfc\">JIRA/RFC#</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"rfc\" name=\"rfc\" placeholder=\"JIRA/RFC#\" [(ngModel)]=\"log.rfc\" />\n            </div>rfc\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"contact\">Contact</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"contact\" name=\"contact\" placeholder=\"Contact\" [(ngModel)]=\"log.contact\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"planview_project\">Planview Project</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"planview_project\" name=\"planview_project\" placeholder=\"Planview Project\" [(ngModel)]=\"log.planview_project\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"description\">Description</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"log.description\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"special__installation__info\">Special Installation Info</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"special__installation__info\" name=\"special__installation__info\" placeholder=\"Special Installation Info\"\n                [ngModel]=\"log.special__installation__info\"/>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"aol_info\">Aol Info</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"aol_info\" name=\"aol_info\" placeholder=\"Aol Info\" [(ngModel)]=\"log.aol_info\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"name_of__document__changed\">Name of Document Changed</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"name_of__document__changed\" name=\"name_of__document__changed\" placeholder=\"Name of Document Changed\"\n                [ngModel]=\"log.name_of__document__changed\"/>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"files_modified\">Files Modified</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"files_modified\" name=\"files_modified\" placeholder=\"Files Modified\" [(ngModel)]=\"log.files_modified\"\n              />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"er64r06\">ER64R06</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"er64r06\" name=\"er64r06\" placeholder=\"ER64R06\" [(ngModel)]=\"log.er64r06\" />\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-sm-6 control-label\" for=\"applied_to_erpprod\">Applied to PROD</label>\n            <div class=\"col-sm-12\">\n              <input type=\"text\" class=\"form-control\" id=\"applied_to_erpprod\" name=\"applied_to_erpprod\" placeholder=\"Applied to PROD\" [(ngModel)]=\"log.applied_to_erpprod\"\n              />\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"hideModal()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addOrEditLog()\">{{modalType === 'add' ? 'Add' : 'Edit'}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-5\">\n    <div class=\"dataTables_info\" id=\"dataTable_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 26 entries</div>\n  </div>\n  <div class=\"col-sm-12 col-md-7\">\n    <div class=\"dataTables_paginate paging_simple_numbers\" id=\"dataTable_paginate\">\n      <ul class=\"pagination\">\n        <li class=\"paginate_button page-item previous disabled\" id=\"dataTable_previous\">\n          <a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a>\n        </li>\n        <li class=\"paginate_button page-item active\">\n          <a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"1\" tabindex=\"0\" class=\"page-link\">1</a>\n        </li>\n        <li class=\"paginate_button page-item \">\n          <a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a>\n        </li>\n        <li class=\"paginate_button page-item \">\n          <a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a>\n        </li>\n        <li class=\"paginate_button page-item next\" id=\"dataTable_next\">\n          <a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">Next</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "./src/app/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(logService) {
        this.logService = logService;
        this.logs = [];
        this.emptyLog = {};
        this.log = {};
        this.modalType = '';
        this.editIndex = -1;
        this.getLogs();
    }
    AppComponent.prototype.getLogs = function () {
        var _this = this;
        this.logService.getLogs().subscribe(function (response) {
            // console.log(response);
            _this.logs = JSON.parse(response._body);
        }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.addOrEditLog = function () {
        var _this = this;
        if (this.modalType === 'add') {
            // this.logs.unshift(this.log);
            this.logService.addLog(this.log).subscribe(function (response) {
                // console.log(response);
                _this.getLogs();
            }, function (error) { return console.log(error); });
        }
        else {
            // this.logs[this.editIndex] = this.log;
            this.logService.updateLog(this.log).subscribe(function (response) {
                console.log(response);
                _this.getLogs();
                // this.logs[this.editIndex] = this.log;
            }, function (error) { return console.log(error); });
        }
        this.modalType = '';
    };
    AppComponent.prototype.showModal = function (type, index) {
        if (index === void 0) { index = 0; }
        this.modalType = type;
        if (type === 'edit') {
            this.log = this.logs[index];
            this.editIndex = index;
        }
        else if (type === 'add') {
            this.log = this.emptyLog;
        }
    };
    AppComponent.prototype.hideModal = function () {
        this.modalType = '';
        // this.log = <logentry>{};
    };
    AppComponent.prototype.onDelete = function (log) {
        var _this = this;
        console.log(log);
        this.logService.deleteLog(log).subscribe(function (response) {
            // console.log(response);
            _this.getLogs();
        }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./log.service */ "./src/app/log.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/log.service.ts":
/*!********************************!*\
  !*** ./src/app/log.service.ts ***!
  \********************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
    }
    LogService.prototype.addLog = function (log) {
        return this.http.post('http://localhost:8080/LogEntryWebservice/rest/erp_log_entry/add', log);
    };
    LogService.prototype.getLogs = function () {
        return this.http.get('http://localhost:8080/LogEntryWebservice/rest/erp_log_entry/list');
    };
    LogService.prototype.updateLog = function (log) {
        return this.http.post('http://localhost:8080/LogEntryWebservice/rest/erp_log_entry/update', log);
    };
    LogService.prototype.deleteLog = function (log) {
        console.log(log);
        return this.http.delete('http://localhost:8080/LogEntryWebservice/rest/erp_log_entry/delete', new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ body: log }));
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LogService);
    return LogService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nk250061\Desktop\Work\Small Projects\Log Entry Project\log-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map