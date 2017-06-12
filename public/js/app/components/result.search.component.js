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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Jahongir on 22-May-17.
 */
var core_1 = require("@angular/core");
var header_service_1 = require("../shared/header.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ResultSearchComponent = (function () {
    function ResultSearchComponent(headerService, activeModal) {
        this.headerService = headerService;
        this.activeModal = activeModal;
    }
    ResultSearchComponent.prototype.saveReport = function (problem) {
        var data = { problem: problem, id: this.result.ID };
        this.headerService.saveReport(data)
            .subscribe(function (data) {
            if (data.message == "ok") {
                alert("Отчет успешно сохранен");
            }
        });
    };
    return ResultSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ResultSearchComponent.prototype, "result", void 0);
ResultSearchComponent = __decorate([
    core_1.Component({
        selector: 'result-app',
        templateUrl: '/js/app/components/views/result.search.component.html',
        providers: [header_service_1.HeaderService]
    }),
    __metadata("design:paramtypes", [header_service_1.HeaderService,
        ng_bootstrap_1.NgbActiveModal])
], ResultSearchComponent);
exports.ResultSearchComponent = ResultSearchComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL1RhcmVuYTIvYXNzZXRzL2FwcC9jb21wb25lbnRzL3Jlc3VsdC5zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBaUQ7QUFDakQsMkRBQXlEO0FBQ3pELDJEQUE0RDtBQVE1RCxJQUFhLHFCQUFxQjtJQUdoQywrQkFBcUIsYUFBNEIsRUFDNUIsV0FBNkI7UUFEN0Isa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWtCO0lBQ2hELENBQUM7SUFFSCwwQ0FBVSxHQUFWLFVBQVcsT0FBTztRQUNoQixJQUFJLElBQUksR0FBRyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FBQyxVQUFDLElBQUk7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDSCw0QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFoQlU7SUFBUixZQUFLLEVBQUU7O3FEQUFRO0FBREwscUJBQXFCO0lBTmpDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixXQUFXLEVBQUUsdURBQXVEO1FBQ3BFLFNBQVMsRUFBRSxDQUFFLDhCQUFhLENBQUU7S0FDN0IsQ0FBQztxQ0FLb0MsOEJBQWE7UUFDYiw2QkFBYztHQUp2QyxxQkFBcUIsQ0FpQmpDO0FBakJZLHNEQUFxQiIsImZpbGUiOiJjb21wb25lbnRzL3Jlc3VsdC5zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSmFob25naXIgb24gMjItTWF5LTE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL2hlYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdiQWN0aXZlTW9kYWwgfSBmcm9tIFwiQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmVzdWx0LWFwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcvanMvYXBwL2NvbXBvbmVudHMvdmlld3MvcmVzdWx0LnNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbIEhlYWRlclNlcnZpY2UgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlc3VsdFNlYXJjaENvbXBvbmVudHtcclxuICBASW5wdXQoKSByZXN1bHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBwcml2YXRlIGhlYWRlclNlcnZpY2U6IEhlYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgIHB1YmxpYyAgYWN0aXZlTW9kYWw6ICAgTmdiQWN0aXZlTW9kYWxcclxuICApe31cclxuXHJcbiAgc2F2ZVJlcG9ydChwcm9ibGVtKXtcclxuICAgIGxldCBkYXRhID0ge3Byb2JsZW06IHByb2JsZW0sIGlkOiB0aGlzLnJlc3VsdC5JRH07XHJcblxyXG4gICAgdGhpcy5oZWFkZXJTZXJ2aWNlLnNhdmVSZXBvcnQoZGF0YSlcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSk9PntcclxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlID09IFwib2tcIil7XHJcbiAgICAgICAgICBhbGVydChcItCe0YLRh9C10YIg0YPRgdC/0LXRiNC90L4g0YHQvtGF0YDQsNC90LXQvVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
