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
var GameComponent = (function () {
    function GameComponent() {
        this.completedHash = (_a = {},
            _a["Conditionals"] = "if ( ) then ",
            _a["Variable declaration"] = "var x = 4;",
            _a["Loops"] = "foreach item in array",
            _a["Relational operators"] = "x >= 4",
            _a["Expression"] = "2 + 3",
            _a
        );
        this.conceptList = this.createConceptList();
        this.implementationList = this.createImplementationList();
        this.conceptClick = false;
        this.implementClick = false;
        this.dataCorrect = null;
        this.alertMessage = "";
        var _a;
    }
    GameComponent.prototype.createConceptList = function () {
        var conceptList = [];
        for (var concept in this.completedHash) {
            conceptList.push(concept);
        }
        conceptList = this.shuffleArray(conceptList);
        return conceptList;
    };
    GameComponent.prototype.createImplementationList = function () {
        var implementationList = [];
        for (var concept in this.completedHash) {
            implementationList.push(this.completedHash[concept]);
        }
        implementationList = this.shuffleArray(implementationList);
        return implementationList;
    };
    GameComponent.prototype.shuffleArray = function (array) {
        if (array.length <= 1) {
            return array;
        }
        for (var i = 0; i < array.length; i++) {
            var randomIndex = Math.floor(Math.random() * (i + 1));
            _a = [array[randomIndex], array[i]], array[i] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
        var _a;
    };
    GameComponent.prototype.isMatch = function () {
        console.log(this.completedHash[this.oldConcept]);
        if (this.completedHash[this.oldConcept] === this.oldImplementation) {
            //match! success!
            this.toastSuccess();
            this.conceptList.splice(this.conceptList.indexOf(this.oldConcept), 1);
            this.implementationList.splice(this.implementationList.indexOf(this.oldImplementation), 1);
        }
        else {
            //not match! bzz bzz!
            this.toastFailure();
        }
        this.implementClick = false;
        this.conceptClick = false;
        this.borderHighlight = null;
        this.borderAnswerHighlight = null;
        this.oldConcept = null;
        this.oldImplementation = null;
    };
    GameComponent.prototype.isSameConcept = function (currentConcept) {
        this.conceptClick = true;
        var newConcept = currentConcept;
        if (newConcept === this.oldConcept) {
            this.oldConcept = null;
            this.borderHighlight = null;
            this.borderAnswerHighlight = null;
        }
        else {
            this.oldConcept = newConcept;
            this.borderHighlight = this.conceptList.indexOf(newConcept);
        }
        if (this.implementClick === true && this.conceptClick === true) {
            this.isMatch();
        }
    };
    GameComponent.prototype.isSameImplementation = function (currentImplementation) {
        this.implementClick = true;
        var newImplement = currentImplementation;
        if (newImplement === this.oldImplementation) {
            this.oldImplementation = null;
            this.borderHighlight = null;
            this.borderAnswerHighlight = null;
        }
        else {
            this.oldImplementation = newImplement;
            this.borderAnswerHighlight = this.implementationList.indexOf(newImplement);
        }
        if (this.implementClick === true && this.conceptClick === true) {
            this.isMatch();
        }
    };
    GameComponent.prototype.toastSuccess = function () {
        var _this = this;
        this.alertMessage = "CORRECT!";
        this.dataCorrect = true;
        setTimeout(function () {
            _this.dataCorrect = null;
        }, 2000);
    };
    GameComponent.prototype.toastFailure = function () {
        var _this = this;
        this.alertMessage = "WRONG!";
        this.dataCorrect = false;
        setTimeout(function () {
            _this.dataCorrect = null;
        }, 2000);
    };
    GameComponent.prototype.resetGame = function () {
        this.oldConcept = null;
        this.oldImplementation = null;
        this.conceptList = this.createConceptList();
        this.implementationList = this.createImplementationList();
    };
    GameComponent = __decorate([
        core_1.Component({
            selector: 'game-tab',
            templateUrl: 'app/game/game.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map