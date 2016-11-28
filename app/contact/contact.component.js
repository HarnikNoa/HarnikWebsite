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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/share');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var ContactComponent = (function () {
    function ContactComponent(http, toastr, containerRef) {
        this.http = http;
        this.toastr = toastr;
        this.data = { name: '', email: '', message: '' };
        this.busy = false;
        this.toastr.setRootViewContainerRef(containerRef);
    }
    ContactComponent.prototype.onSubmit = function (form) {
        this.sendForm(form);
    };
    ContactComponent.prototype.sendForm = function (form) {
        var _this = this;
        this.busy = true;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('https://formspree.io/harniknoa@gmail.com', JSON.stringify(this.data), {
            headers: headers
        }).subscribe(function (success) {
            _this.busy = false;
            if (success) {
                _this.toastSuccess(form);
            }
        }, function (error) { return _this.toastError(); });
    };
    ContactComponent.prototype.toastSuccess = function (form) {
        this.toastr.success('Message sent', 'Success!', { toastLife: 5000, showCloseButton: false });
        form.reset();
    };
    ContactComponent.prototype.toastError = function () {
        this.toastr.error('Whoops. Something went wrong!  Please email Noa@SheCodedThat.com instead');
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact-tab',
            templateUrl: 'app/contact/contact.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map