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
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent1.prototype, "content", void 0);
    ChildComponent1 = __decorate([
        core_1.Component({
            selector: 'compo1',
            templateUrl: '/app/compo1.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent1);
    return ChildComponent1;
}());
var ChildComponent2 = (function () {
    function ChildComponent2() {
    }
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChildComponent2.prototype, "content", void 0);
    ChildComponent2 = __decorate([
        core_1.Component({
            selector: 'compo2',
            templateUrl: '/app/compo2.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ChildComponent2);
    return ChildComponent2;
}());
var AppComponent = (function () {
    function AppComponent(componentResolver) {
        this.componentResolver = componentResolver;
        this.v = 0;
        this.isViewInitialized = false;
    }
    AppComponent.prototype.updateComponent = function () {
        var _this = this;
        setInterval(function () {
            if (!_this.isViewInitialized) {
                return;
            }
            if (_this.cmpRef) {
                _this.cmpRef.destroy();
            }
            if (_this.v % 2 == 0) {
                _this.componentResolver.resolveComponent(ChildComponent1).then(function (factory) {
                    _this.cmpRef = _this.target.createComponent(factory);
                    _this.cmpRef.instance.content = "UNO!!";
                });
            }
            else {
                _this.componentResolver.resolveComponent(ChildComponent2).then(function (factory) {
                    _this.cmpRef = _this.target.createComponent(factory);
                    _this.cmpRef.instance.content = "DOS!!";
                });
            }
            _this.v++;
        }, 1000);
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.updateComponent();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.isViewInitialized = true;
        this.updateComponent();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    };
    __decorate([
        core_1.ViewChild('target', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "target", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: '<div #target></div>'
        }), 
        __metadata('design:paramtypes', [core_1.ComponentResolver])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map