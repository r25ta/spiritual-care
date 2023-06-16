"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WorkersService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var WorkersService = /** @class */ (function () {
    //Injection HttpClient (ajax) into of the constructor service class
    function WorkersService(httpClient) {
        this.httpClient = httpClient;
        this.API = '../../../assets/Xworkers.json';
    }
    //Method listAllWorkers returns the worker list
    WorkersService.prototype.listAllWorkers = function () {
        return this.httpClient.get(this.API).pipe(rxjs_1.first(), rxjs_1.delay(2000), rxjs_1.tap(function (workers) { return console.log(workers); }));
    };
    WorkersService = __decorate([
        core_1.Injectable({
            //Allow service class to be project-wide view
            providedIn: 'root'
        })
    ], WorkersService);
    return WorkersService;
}());
exports.WorkersService = WorkersService;
