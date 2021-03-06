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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var app_component_1 = require('./app.component');
var contact_component_1 = require('./contact/contact.component');
var about_component_1 = require('./about/about.component');
var welcome_component_1 = require('./home/welcome.component');
var game_component_1 = require('./game/game.component');
var lessons_component_1 = require('./lessons/lessons.component');
var config = {
    animate: 'flyRight',
    newestOnTop: false,
    showCloseButton: true,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng2_toastr_1.ToastModule.forRoot(config),],
            declarations: [app_component_1.AppComponent, contact_component_1.ContactComponent, about_component_1.AboutComponent, welcome_component_1.WelcomeComponent, game_component_1.GameComponent, lessons_component_1.LessonsComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map