"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GoersComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var shared_module_1 = require("src/app/shared/shared.module");
var GoersComponent = /** @class */ (function () {
    //INJECT SERVICE CLASS INTO CONSTRUCTOR OF THE COMPONENT CLASS
    function GoersComponent(goersService, dialogError) {
        var _this = this;
        this.dialogError = dialogError;
        this.displayedColumns = ['id', 'name', 'phone', 'born'];
        this.clickedRows = new Set();
        /*THIS METHOD CONNECTS WITH THE API REST, IF ANY PROBLEM OCCURS WITH THE API,
        THIS IMPLEMENTATION CATCHES THE COMMUNICATION ERROR
        AND SENDS A CUSTOM ERROR MESSAGE TO THE METHOD openDialogError.
        */
        this.goers$ = goersService.listAll().pipe(rxjs_1.catchError(function (err) {
            _this.openDialogError('List of Goers unavailable, connection failure!');
            return rxjs_1.of([]);
        }));
    }
    /*This method is responsible for activate the ErrorDialogComponent component
      passing as parameter custom error message of string type.
      The component ErrorDialogComponent is responsible to opening Dialog Box with the custom error message*/
    GoersComponent.prototype.openDialogError = function (errorMsg) {
        this.dialogError.open(shared_module_1.ErrorDialogComponent, {
            data: errorMsg
        });
    };
    GoersComponent = __decorate([
        core_1.Component({
            selector: 'app-goers',
            templateUrl: './goers.component.html',
            styleUrls: ['./goers.component.scss']
        })
    ], GoersComponent);
    return GoersComponent;
}());
exports.GoersComponent = GoersComponent;
