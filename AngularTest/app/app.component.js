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
var ChildComponent1 = (function () {
    function ChildComponent1() {
    }
    ChildComponent1 = __decorate([
        core_1.Component({
            selector: 'compo1',
            template: '<h1>Este es el componente <b>UNO</b > </h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent1);
    return ChildComponent1;
}());
var ChildComponent2 = (function () {
    function ChildComponent2() {
    }
    ChildComponent2 = __decorate([
        core_1.Component({
            selector: 'compo2',
            template: '<h1>Este es el componente <b>DOS</b > </h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent2);
    return ChildComponent2;
}());
var AppComponent = (function () {
    function AppComponent(dcl, injector) {
        this.dcl = dcl;
        this.injector = injector;
        this.v = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.v % 2 == 0) {
                _this.dcl.loadAsRoot(ChildComponent1, '#child', _this.injector);
            }
            else {
                _this.dcl.loadAsRoot(ChildComponent2, '#child', _this.injector);
            }
            _this.v++;
            console.log(_this.v);
        }, 1000);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<div id="child"></div>'
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map