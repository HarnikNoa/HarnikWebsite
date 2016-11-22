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
var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome to Noa\'s Lesson Emporium!';
        this.subTitle = 'Computer science lessons for girls ages 9 - 12';
        this.notableWoman = "Ada Lovelace";
        this.notableWomanInfo = '"The daughter of famed poet Lord Byron, Augusta Ada Byron, Countess of Lovelace- better known as "Ada Lovelace"-was born in London on December 10, 1815. Ada showed her gift for mathematics at an early age. She translated an article on an invention by Charles Babbage, and added her own comments. Because she introduced many computer concepts, Ada is considered the first computer programmer. Ada died on November 27, 1852."';
    }
    WelcomeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: 'app/home/welcome.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map