"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppMaterialModule = void 0;
var core_1 = require("@angular/core");
var card_1 = require("@angular/material/card");
var table_1 = require("@angular/material/table");
var toolbar_1 = require("@angular/material/toolbar");
var tabs_1 = require("@angular/material/tabs");
var icon_1 = require("@angular/material/icon");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var dialog_1 = require("@angular/material/dialog");
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            exports: [
                table_1.MatTableModule,
                card_1.MatCardModule,
                toolbar_1.MatToolbarModule,
                tabs_1.MatTabsModule,
                icon_1.MatIconModule,
                progress_spinner_1.MatProgressSpinnerModule,
                dialog_1.MatDialogModule,
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;
