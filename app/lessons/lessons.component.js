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
var app_component_1 = require('../../app/app.component');
var LessonsComponent = (function () {
    function LessonsComponent(tabs) {
        this.tabs = tabs;
        this.skillsList = ["Basic computer science concepts", "Making programs", "Making web pages", "Scratch", "Javascript", "HTML", "CSS", "Object Oriented programming languages", "Analytical thinking", "Logic", "Action and consequence"];
        this.skills = "Skills taught vary depending on each girl's age and interests.  However, all students are taught basic concepts through activities and games.  Moreover, all girls are meant to feel empowered through the lessons.  Possible skills taught include, but are not limited to:";
        this.purpose = "The purpose of these lessons is to get girls in computer science before they reach an age where they're told they shouldn't be interested in computers.  In the future they may not become software engineers, but it won't be because they're afraid to try or feel like they wouldn't be able to do it.  Below is a chart of the current percentages of women in different industry groups.  When it comes to technology women represent only 16% in software and 9% in hardware.";
        this.priceList = [
            { description: "One 60 min lesson", amount: "$60" },
            { description: "Weekly 60 min lesson X 4 weeks", amount: "$220" },
            { description: "Weekly 60 min lesson X 6 weeks", amount: "$300" }
        ];
    }
    LessonsComponent.prototype.onChangeTabs = function (tabName) {
        this.tabs.selectTab(tabName);
    };
    LessonsComponent = __decorate([
        core_1.Component({
            selector: 'lessons-tab',
            templateUrl: 'app/lessons/lessons.component.html',
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], LessonsComponent);
    return LessonsComponent;
}());
exports.LessonsComponent = LessonsComponent;
//# sourceMappingURL=lessons.component.js.map